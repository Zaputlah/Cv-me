// src/pages/api/search.ts
import type { APIRoute } from "astro";
import { GoogleGenerativeAI } from "@google/generative-ai";

// === RATE LIMITING CONFIGURATION ===
const MAX_REQUESTS_PER_HOUR = 5; 
const COOLDOWN_WINDOW_MS = 60 * 60 * 1000; // 1 jam
const requestCounts = new Map<string, { count: number; resetTime: number }>();

// ✅ init Gemini client
const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);

// --- Helper: Ekstrak teks dengan aman (Anti-TypeError) ---
function extractContentText(result: any): string {
    // 1. Cek apakah properti .text ada DAN bertipe string sebelum memanggil .trim()
    if (result?.response?.text && typeof result.response.text === 'string') {
        return result.response.text.trim();
    }
    
    // 2. Fallback yang aman (untuk struktur respons yang lebih kompleks)
    const content = result?.response?.candidates?.[0]?.content;
    if (content && Array.isArray(content.parts)) {
        // Gabungkan semua bagian teks, pastikan setiap bagian adalah string
        const textParts = content.parts
            .map(p => p.text)
            .filter(text => typeof text === 'string')
            .join("\n");
        return textParts.trim();
    }
    
    return "";
}


export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();

        // --- 1. HONEYPOT & RATE LIMITING LOGIC ---
        const botField = formData.get("bot-field");
        if (botField) {
          return new Response(
            JSON.stringify({ error: "Permintaan diblokir oleh filter keamanan." }),
            { status: 403 }
          );
        }
    
        const userIp = request.headers.get("x-forwarded-for") || "unknown";
        let countEntry = requestCounts.get(userIp);
        const now = Date.now();
    
        if (countEntry && countEntry.resetTime < now) {
          countEntry = { count: 0, resetTime: now + COOLDOWN_WINDOW_MS };
        }
    
        if (countEntry && countEntry.count >= MAX_REQUESTS_PER_HOUR) {
          const minutesLeft = Math.ceil((countEntry.resetTime - now) / 60000);
          return new Response(
            JSON.stringify({ error: `❌ Batasan pencarian terlampaui. Coba lagi dalam ${minutesLeft} menit.` }),
            { status: 429 }
          );
        }
    
        const newCountEntry = {
          count: (countEntry?.count || 0) + 1,
          resetTime: countEntry?.resetTime || now + COOLDOWN_WINDOW_MS,
        };
        requestCounts.set(userIp, newCountEntry);
        // --- END RATE LIMITING ---

        const query = formData.get("query") as string;
        if (!query) {
            return new Response(
                JSON.stringify({ error: "Query pencarian wajib diisi." }),
                { status: 400 }
            );
        }

        // ✅ PERBAIKAN AKURASI: Tambahkan instruksi untuk memaksa pencarian data terkini
        const enhancedQuery = `Tolong jawab pertanyaan ini dengan ringkas, jelas, dan gunakan data paling AKTUAL yang dapat kamu temukan melalui pencarian web: ${query}`;


        // --- 2. GENERATIVE AI CALL ---
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            config: {
                systemInstruction: "Anda adalah asisten pencarian yang tugasnya merangkum informasi faktual TERBARU, terutama mengenai tokoh, jabatan, dan peristiwa terkini. Utamakan data yang memiliki tanggal publikasi paling baru dari Google Search Tool.",
                tools: [{ googleSearch: {} }],
            },
        });

        const result = await model.generateContent(enhancedQuery);

        // ✅ Ambil teks hasil AI dengan fungsi helper yang aman
        const rawResultText = extractContentText(result);
        const resultText = rawResultText || 
            "Maaf, AI tidak dapat merangkum jawaban untuk pertanyaan ini. Mungkin pertanyaan diblokir oleh filter keamanan atau tidak ada data relevan yang ditemukan.";
            
        // --- 3. Ambil sources (grounding metadata) ---
        const searchChunks = result.response?.candidates?.[0]?.groundingMetadata?.groundingChunks;
        let sources: { title: string; uri: string }[] = [];

        if (searchChunks) {
            const uniqueUris = new Set<string>();
            for (const chunk of searchChunks) {
                if (chunk.web && !uniqueUris.has(chunk.web.uri)) {
                    sources.push({ title: chunk.web.title, uri: chunk.web.uri });
                    uniqueUris.add(chunk.web.uri);
                }
            }
        }

        return new Response(
            JSON.stringify({ result: resultText, sources }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (err: any) {
        console.error("❌ Search Engine Error:", err);
        return new Response(
            JSON.stringify({ error: "Terjadi kesalahan fatal pada server AI. Silakan coba lagi." }),
            { status: 500 }
        );
    }
};