import { GoogleGenerativeAI } from '@google/generative-ai';
export { renderers } from '../../renderers.mjs';

const MAX_REQUESTS_PER_HOUR = 5;
const COOLDOWN_WINDOW_MS = 60 * 60 * 1e3;
const requestCounts = /* @__PURE__ */ new Map();
const genAI = new GoogleGenerativeAI("AIzaSyDffYOVGEpjqkOgNzCl4tJjip-2lnvaFr8");
function extractContentText(result) {
  if (result?.response?.text && typeof result.response.text === "string") {
    return result.response.text.trim();
  }
  const content = result?.response?.candidates?.[0]?.content;
  if (content && Array.isArray(content.parts)) {
    const textParts = content.parts.map((p) => p.text).filter((text) => typeof text === "string").join("\n");
    return textParts.trim();
  }
  return "";
}
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
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
      const minutesLeft = Math.ceil((countEntry.resetTime - now) / 6e4);
      return new Response(
        JSON.stringify({ error: `❌ Batasan pencarian terlampaui. Coba lagi dalam ${minutesLeft} menit.` }),
        { status: 429 }
      );
    }
    const newCountEntry = {
      count: (countEntry?.count || 0) + 1,
      resetTime: countEntry?.resetTime || now + COOLDOWN_WINDOW_MS
    };
    requestCounts.set(userIp, newCountEntry);
    const query = formData.get("query");
    if (!query) {
      return new Response(
        JSON.stringify({ error: "Query pencarian wajib diisi." }),
        { status: 400 }
      );
    }
    const enhancedQuery = `Tolong jawab pertanyaan ini dengan ringkas, jelas, dan gunakan data paling AKTUAL yang dapat kamu temukan melalui pencarian web: ${query}`;
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: "Anda adalah asisten pencarian yang tugasnya merangkum informasi faktual TERBARU, terutama mengenai tokoh, jabatan, dan peristiwa terkini. Utamakan data yang memiliki tanggal publikasi paling baru dari Google Search Tool.",
        tools: [{ googleSearch: {} }]
      }
    });
    const result = await model.generateContent(enhancedQuery);
    const rawResultText = extractContentText(result);
    const resultText = rawResultText || "Maaf, AI tidak dapat merangkum jawaban untuk pertanyaan ini. Mungkin pertanyaan diblokir oleh filter keamanan atau tidak ada data relevan yang ditemukan.";
    const searchChunks = result.response?.candidates?.[0]?.groundingMetadata?.groundingChunks;
    let sources = [];
    if (searchChunks) {
      const uniqueUris = /* @__PURE__ */ new Set();
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
  } catch (err) {
    console.error("❌ Search Engine Error:", err);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan fatal pada server AI. Silakan coba lagi." }),
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
