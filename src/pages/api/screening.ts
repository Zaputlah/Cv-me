import type { APIRoute } from "astro";
import mammoth from "mammoth";
import pdfParse from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";

// === RATE LIMITING CONFIGURATION ===
const MAX_REQUESTS_PER_HOUR = 5;
const COOLDOWN_WINDOW_MS = 60 * 60 * 1000;
const requestCounts = new Map<string, { count: number; resetTime: number }>();

// === TOKEN OPTIMIZATION ===
const MAX_TEXT_LENGTH = 10000;
const MAX_JOB_DESCRIPTION = 2000;

// === INIT GEMINI CLIENT ===
const apiKey = import.meta.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn("⚠️ GEMINI_API_KEY not set!");
}
const genAI = new GoogleGenerativeAI(apiKey);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // --- Honeypot check ---
    const botField = formData.get("bot-field");
    if (botField) {
      return new Response(JSON.stringify({ error: "Bot detected" }), {
        status: 403,
      });
    }

    // --- Rate limiting ---
    const userIp = request.headers.get("x-forwarded-for") || "unknown";
    let countEntry = requestCounts.get(userIp);
    const now = Date.now();

    if (countEntry && countEntry.resetTime < now) {
      countEntry = { count: 0, resetTime: now + COOLDOWN_WINDOW_MS };
    }

    if (countEntry && countEntry.count >= MAX_REQUESTS_PER_HOUR) {
      const minutesLeft = Math.ceil((countEntry.resetTime - now) / 60000);
      return new Response(
        JSON.stringify({
          error: `Batasan harian terlampaui. Coba lagi dalam ${minutesLeft} menit.`,
        }),
        { status: 429 }
      );
    }

    requestCounts.set(userIp, {
      count: (countEntry?.count || 0) + 1,
      resetTime: countEntry?.resetTime || now + COOLDOWN_WINDOW_MS,
    });

    // --- Extract file ---
    const file = formData.get("cvFile") as File | null;
    let jobDescription = (formData.get("jobDescription") as string) || "";

    if (!file || !jobDescription) {
      return new Response(
        JSON.stringify({ error: "CV dan Job Description wajib diisi" }),
        { status: 400 }
      );
    }

    let cvText = "";
    const buffer = Buffer.from(await file.arrayBuffer());

    if (file.name.endsWith(".pdf")) {
      const data = await pdfParse(buffer);
      cvText = data.text;
    } else if (file.name.endsWith(".docx")) {
      const result = await mammoth.extractRawText({ buffer });
      cvText = result.value;
    } else {
      return new Response(
        JSON.stringify({ error: "Format file tidak didukung" }),
        { status: 400 }
      );
    }

    // --- Token truncation ---
    if (cvText.length > MAX_TEXT_LENGTH)
      cvText = cvText.slice(0, MAX_TEXT_LENGTH);
    if (jobDescription.length > MAX_JOB_DESCRIPTION)
      jobDescription = jobDescription.slice(0, MAX_JOB_DESCRIPTION);

    // --- Prompt for Gemini ---
    const prompt = `
Anda adalah Senior Recruiter. Analisis CV dan bandingkan dengan Job Description.
Output ringkas, format list, max 250 kata.

CV:\n\n${cvText}\n\n
JD:\n${jobDescription}\n\n

1. Ringkasan Profil (max 3 kalimat)
2. Kecocokan (3 skill/experience)
3. Gap (1 skill hilang)
4. Skor Kecocokan [0-100]% (1 kalimat justification)
`;

    // --- Gemini API call ---
    let resultText = "";
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(prompt);
      resultText = result.response.text();
    } catch (apiErr) {
      console.error("❌ Gemini API Error:", apiErr);
      return new Response(
        JSON.stringify({ error: "Failed to call Gemini API" }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ result: resultText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("❌ Screening Error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
};
