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
const pdfExtract = require("pdf-extraction");
const genAI = new GoogleGenerativeAI("AIzaSyDffYOVGEpjqkOgNzCl4tJjip-2lnvaFr8");
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const botField = formData.get("bot-field");
    if (botField) {
      console.log("🚫 Bot detected: Honeypot field filled.");
      return new Response(
        JSON.stringify({ error: "Permintaan diblokir oleh filter keamanan." }),
        { status: 403 }
      );
    }
    const userIp = request.headers.get("x-forwarded-for") || request.headers.get("client-ip") || "unknown";
    let countEntry = requestCounts.get(userIp);
    const now = Date.now();
    if (countEntry && countEntry.resetTime < now) {
      countEntry = { count: 0, resetTime: now + COOLDOWN_WINDOW_MS };
    }
    if (countEntry && countEntry.count >= MAX_REQUESTS_PER_HOUR) {
      const minutesLeft = Math.ceil((countEntry.resetTime - now) / 6e4);
      return new Response(
        JSON.stringify({
          error: `❌ Batasan harian terlampaui (Demo Portofolio). Coba lagi dalam ${minutesLeft} menit.`
        }),
        { status: 429 }
        // Too Many Requests
      );
    }
    const newCountEntry = {
      count: (countEntry?.count || 0) + 1,
      resetTime: countEntry?.resetTime || now + COOLDOWN_WINDOW_MS
    };
    requestCounts.set(userIp, newCountEntry);
    console.log(`Rate Limit Status: ${userIp} - ${newCountEntry.count}/${MAX_REQUESTS_PER_HOUR}`);
    const file = formData.get("cvFile");
    let jobDescription = formData.get("jobDescription");
    if (!file || !jobDescription) {
      return new Response(
        JSON.stringify({ error: "CV dan Job Description wajib diisi" }),
        { status: 400 }
      );
    }
    let cvText = "";
    const buffer = Buffer.from(await file.arrayBuffer());
    if (file.name.endsWith(".pdf")) {
      const data = await pdfExtract(buffer);
      cvText = data.text;
    } else if (file.name.endsWith(".docx")) {
      const result2 = await mammoth.extractRawText({ buffer });
      cvText = result2.value;
    } else {
      return new Response(
        JSON.stringify({
          error: "Format file tidak didukung (hanya .pdf / .docx)"
        }),
        { status: 400 }
      );
    }
    if (cvText.length > MAX_TEXT_LENGTH) {
      cvText = cvText.slice(0, MAX_TEXT_LENGTH);
      console.warn("⚠️ CV text truncated.");
    }
    if (jobDescription.length > MAX_JOB_DESCRIPTION) {
      jobDescription = jobDescription.slice(0, MAX_JOB_DESCRIPTION);
      console.warn("⚠️ Job Description truncated.");
    }
    console.log("✅ CV Extracted Text:", cvText.slice(0, 100) + "...");
    const prompt = `
    Anda adalah seorang Senior Recruiter. Tugas Anda adalah menganalisis CV dan membandingkannya dengan Job Description (JD).
    Output harus disajikan dengan ringkas, menggunakan format poin (list), dan tidak lebih dari 250 kata untuk menghemat token.

    CV:

${cvText}


    JD:
${jobDescription}



    **Struktur Output:**
    1. **Ringkasan Profil:** (Maks 3 kalimat, fokus pada pengalaman dan spesialisasi).
    2. **Kecocokan:** Tiga skill atau pengalaman dari CV yang SANGAT cocok dengan JD.
    3. **Gap:** Satu area atau skill yang HILANG di CV namun dibutuhkan JD.
    4. **Skor Kecocokan:** [Skor 0-100]% (Berikan justifikasi 1 kalimat).
    `;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const resultText = result.response.text();
    return new Response(
      JSON.stringify({ result: resultText }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("❌ Screening Error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error." }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
