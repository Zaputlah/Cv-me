// src/pages/api/screening.ts

import type { APIRoute } from "astro";
import mammoth from "mammoth";
import { createRequire } from "module";
import { GoogleGenerativeAI } from "@google/generative-ai";

// === RATE LIMITING CONFIGURATION ===
const MAX_REQUESTS_PER_HOUR = 5; // Batasan: Maksimal 5 panggilan API per jam
const COOLDOWN_WINDOW_MS = 60 * 60 * 1000; // 1 jam
const requestCounts = new Map<string, { count: number; resetTime: number }>();

// === TOKEN OPTIMIZATION CONFIGURATION ===
const MAX_TEXT_LENGTH = 10000; // Maksimal 10.000 karakter teks CV yang akan diproses
const MAX_JOB_DESCRIPTION = 2000; // Maksimal 2.000 karakter Job Description

// Inisialisasi library pihak ketiga
const require = createRequire(import.meta.url);
const pdfExtract = require("pdf-extraction");

// ✅ init Gemini client
const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);
console.log(
  "GEMINI_API_KEY:",
  import.meta.env.GEMINI_API_KEY ? "Set" : "Not Set"
);


export const POST: APIRoute = async ({ request }) => {
  try {
    // --- 1. HONEYPOT CHECK (ANTI-BOT) ---
    const formData = await request.formData();
    const botField = formData.get("bot-field");
    if (botField) {
      console.log("🚫 Bot detected: Honeypot field filled.");
      return new Response(
        JSON.stringify({ error: "Permintaan diblokir oleh filter keamanan." }),
        { status: 403 }
      );
    }

    // --- 2. IP RATE LIMITING ---
    const userIp =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("client-ip") ||
      "unknown"; // Ambil IP dari header hosting
    let countEntry = requestCounts.get(userIp);
    const now = Date.now();

    if (countEntry && countEntry.resetTime < now) {
      countEntry = { count: 0, resetTime: now + COOLDOWN_WINDOW_MS };
    }

    if (countEntry && countEntry.count >= MAX_REQUESTS_PER_HOUR) {
      const minutesLeft = Math.ceil((countEntry.resetTime - now) / 60000);
      return new Response(
        JSON.stringify({
          error: `❌ Batasan harian terlampaui (Demo Portofolio). Coba lagi dalam ${minutesLeft} menit.`,
        }),
        { status: 429 } // Too Many Requests
      );
    }

    // Update hitungan
    const newCountEntry = {
      count: (countEntry?.count || 0) + 1,
      resetTime: countEntry?.resetTime || now + COOLDOWN_WINDOW_MS,
    };
    requestCounts.set(userIp, newCountEntry);
    console.log(`Rate Limit Status: ${userIp} - ${newCountEntry.count}/${MAX_REQUESTS_PER_HOUR}`);


    // --- 3. PROSES DATA DAN EKSTRAKSI ---
    const file = formData.get("cvFile") as File | null;
    let jobDescription = formData.get("jobDescription") as string;

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
      const result = await mammoth.extractRawText({ buffer });
      cvText = result.value;
    } else {
      return new Response(
        JSON.stringify({
          error: "Format file tidak didukung (hanya .pdf / .docx)",
        }),
        { status: 400 }
      );
    }

    // --- 4. OPTIMASI TOKEN INPUT (TRUNCATION) ---
    if (cvText.length > MAX_TEXT_LENGTH) {
        cvText = cvText.slice(0, MAX_TEXT_LENGTH);
        console.warn("⚠️ CV text truncated.");
    }

    if (jobDescription.length > MAX_JOB_DESCRIPTION) {
        jobDescription = jobDescription.slice(0, MAX_JOB_DESCRIPTION);
        console.warn("⚠️ Job Description truncated.");
    }
    
    console.log("✅ CV Extracted Text:", cvText.slice(0, 100) + '...');

    // --- 5. PEMBUATAN PROMPT (OPTIMASI OUTPUT) ---
    const prompt = `
    Anda adalah seorang Senior Recruiter. Tugas Anda adalah menganalisis CV dan membandingkannya dengan Job Description (JD).
    Output harus disajikan dengan ringkas, menggunakan format poin (list), dan tidak lebih dari 250 kata untuk menghemat token.

    CV:\n\n${cvText}\n\n
    JD:\n${jobDescription}\n\n

    **Struktur Output:**
    1. **Ringkasan Profil:** (Maks 3 kalimat, fokus pada pengalaman dan spesialisasi).
    2. **Kecocokan:** Tiga skill atau pengalaman dari CV yang SANGAT cocok dengan JD.
    3. **Gap:** Satu area atau skill yang HILANG di CV namun dibutuhkan JD.
    4. **Skor Kecocokan:** [Skor 0-100]% (Berikan justifikasi 1 kalimat).
    `;

    // --- 6. PANGGILAN GEMINI API ---
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Gunakan Flash untuk efisiensi
    
    const result = await model.generateContent(prompt);

    const resultText = result.response.text();

    return new Response(
      JSON.stringify({ result: resultText }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    // Tangani error lain, seperti masalah koneksi atau parsing file
    console.error("❌ Screening Error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error." }), { status: 500 });
  }
};