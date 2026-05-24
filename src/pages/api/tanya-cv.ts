import type { APIRoute } from "astro";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildCvContext } from "../../data/cvProfile";

const MAX_REQUESTS_PER_HOUR = 10;
const COOLDOWN_WINDOW_MS = 60 * 60 * 1000;
const MAX_QUESTION_LENGTH = 700;
const requestCounts = new Map<string, { count: number; resetTime: number }>();

const apiKey = import.meta.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

function jsonResponse(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function checkRateLimit(request: Request) {
  const userIp = request.headers.get("x-forwarded-for") || "unknown";
  let countEntry = requestCounts.get(userIp);
  const now = Date.now();

  if (countEntry && countEntry.resetTime < now) {
    countEntry = { count: 0, resetTime: now + COOLDOWN_WINDOW_MS };
  }

  if (countEntry && countEntry.count >= MAX_REQUESTS_PER_HOUR) {
    const minutesLeft = Math.ceil((countEntry.resetTime - now) / 60000);
    return `Batas tanya CV terlampaui. Coba lagi dalam ${minutesLeft} menit.`;
  }

  requestCounts.set(userIp, {
    count: (countEntry?.count || 0) + 1,
    resetTime: countEntry?.resetTime || now + COOLDOWN_WINDOW_MS,
  });

  return null;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!genAI) {
      return jsonResponse({ error: "GEMINI_API_KEY belum diset." }, 500);
    }

    const formData = await request.formData();
    const botField = formData.get("bot-field");
    if (botField) {
      return jsonResponse({ error: "Permintaan diblokir oleh filter keamanan." }, 403);
    }

    const rateLimitError = checkRateLimit(request);
    if (rateLimitError) {
      return jsonResponse({ error: rateLimitError }, 429);
    }

    const question = String(formData.get("question") || "").trim();
    if (!question) {
      return jsonResponse({ error: "Pertanyaan wajib diisi." }, 400);
    }

    if (question.length > MAX_QUESTION_LENGTH) {
      return jsonResponse(
        { error: `Pertanyaan terlalu panjang. Maksimal ${MAX_QUESTION_LENGTH} karakter.` },
        400
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction:
        "Anda adalah asisten AI untuk CV Reza Putra Fadilah. Jawab dalam bahasa Indonesia yang ringkas, profesional, dan ramah. Gunakan hanya data CV yang diberikan. Jika jawaban tidak ada di data CV, katakan bahwa informasinya belum tersedia di CV, lalu sarankan informasi apa yang perlu ditambahkan.",
    });

    const prompt = `
DATA CV:
${buildCvContext()}

PERTANYAAN USER:
${question}

ATURAN JAWABAN:
- Jawab hanya berdasarkan DATA CV.
- Jangan mengarang pengalaman, tanggal, angka tahun, atau skill yang tidak ada.
- Jika diminta menilai kecocokan role, jelaskan skill/experience yang relevan dan gap yang terlihat dari DATA CV.
- Maksimal 180 kata kecuali user meminta detail.
`;

    const result = await model.generateContent(prompt);
    const answer = result.response.text().trim();

    return jsonResponse({
      answer:
        answer ||
        "Maaf, AI belum bisa membuat jawaban dari data CV saat ini. Coba ubah pertanyaannya.",
    });
  } catch (err) {
    console.error("Tanya CV Error:", err);
    return jsonResponse(
      { error: "Terjadi kesalahan pada server AI CV. Silakan coba lagi." },
      500
    );
  }
};
