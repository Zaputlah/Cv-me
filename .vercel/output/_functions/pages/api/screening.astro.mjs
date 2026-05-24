import mammoth from 'mammoth';
import { createRequire } from 'module';
import { GoogleGenerativeAI } from '@google/generative-ai';
export { renderers } from '../../renderers.mjs';

const MAX_REQUESTS_PER_HOUR = 5;
const COOLDOWN_WINDOW_MS = 60 * 60 * 1e3;
const requestCounts = /* @__PURE__ */ new Map();
const MAX_TEXT_LENGTH = 1e4;
const MAX_JOB_DESCRIPTION = 2e3;
const require = createRequire(import.meta.url);
let pdfParser;
if (process.env.NODE_ENV === "development") {
  pdfParser = require("pdf-extraction");
} else {
  pdfParser = require("pdf-parse");
}
const apiKey = "AIzaSyDffYOVGEpjqkOgNzCl4tJjip-2lnvaFr8";
const genAI = new GoogleGenerativeAI(apiKey) ;
const POST = async ({ request }) => {
  try {
    if (!genAI) {
      return new Response(
        JSON.stringify({ error: "GEMINI_API_KEY belum diset di Vercel." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    const formData = await request.formData();
    const botField = formData.get("bot-field");
    if (botField) {
      return new Response(JSON.stringify({ error: "Bot detected" }), {
        status: 403
      });
    }
    const userIp = request.headers.get("x-forwarded-for") || "unknown";
    let countEntry = requestCounts.get(userIp);
    const now = Date.now();
    if (countEntry && countEntry.resetTime < now) {
      countEntry = { count: 0, resetTime: now + COOLDOWN_WINDOW_MS };
    }
    if (countEntry && countEntry.count >= MAX_REQUESTS_PER_HOUR) {
      const minutesLeft = Math.ceil((countEntry.resetTime - now) / 6e4);
      return new Response(
        JSON.stringify({
          error: `Batasan harian terlampaui. Coba lagi dalam ${minutesLeft} menit.`
        }),
        { status: 429 }
      );
    }
    const newCountEntry = {
      count: (countEntry?.count || 0) + 1,
      resetTime: countEntry?.resetTime || now + COOLDOWN_WINDOW_MS
    };
    requestCounts.set(userIp, newCountEntry);
    const file = formData.get("cvFile");
    let jobDescription = formData.get("jobDescription");
    if (!file || !jobDescription) {
      return new Response(
        JSON.stringify({ error: "CV dan Job Description wajib diisi" }),
        { status: 400 }
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    let cvText = "";
    if (file.name.endsWith(".pdf")) {
      if (process.env.NODE_ENV === "development") {
        const data = await pdfParser(buffer);
        cvText = data.text;
      } else {
        const data = await pdfParser(buffer);
        cvText = data.text;
      }
    } else if (file.name.endsWith(".docx")) {
      const result = await mammoth.extractRawText({ buffer });
      cvText = result.value;
    } else {
      return new Response(
        JSON.stringify({ error: "Format file tidak didukung" }),
        { status: 400 }
      );
    }
    if (cvText.length > MAX_TEXT_LENGTH)
      cvText = cvText.slice(0, MAX_TEXT_LENGTH);
    if (jobDescription.length > MAX_JOB_DESCRIPTION)
      jobDescription = jobDescription.slice(0, MAX_JOB_DESCRIPTION);
    const prompt = `
Anda adalah Senior Recruiter. Analisis CV dan bandingkan dengan Job Description.
Output ringkas, format list, max 250 kata.

CV:

${cvText}


JD:
${jobDescription}



1. Ringkasan Profil (max 3 kalimat)
2. Kecocokan (3 skill/experience)
3. Gap (1 skill hilang)
4. Skor Kecocokan [0-100]% (1 kalimat justification)
`;
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
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("❌ Screening Error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
