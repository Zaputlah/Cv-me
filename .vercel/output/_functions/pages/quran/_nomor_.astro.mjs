/* empty css                                         */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, b as addAttribute, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C8pmW2BQ.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await fetch("https://equran.id/api/v2/surat");
  const allSurat = (await res.json()).data;
  return allSurat.map((s) => ({
    params: { nomor: s.nomor.toString() }
  }));
}
const $$nomor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$nomor;
  const { params } = Astro2;
  const res = await fetch(`https://equran.id/api/v2/surat/${params.nomor}`);
  const surat = (await res.json()).data;
  const deskripsi = surat.deskripsi.replace(/<[^>]+>/g, "").replace(new RegExp(`Surat\\s+(${surat.namaLatin})`, "gi"), "Surat <strong>$1</strong>").replace(/\b(Mekah|Madinah)\b/gi, "<em>$1</em>");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Surat ${surat.namaLatin}`, "sideBarActiveItemID": "quran" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="px-4 py-6"> <!-- Header --> <div class="text-center mb-6"> <h1 class="text-4xl font-bold text-blue-700">', " (", ')</h1> <p class="text-gray-500 italic mt-2">\nArti: ', " \u2022 ", " ayat \u2022 Turun di <em>", '</em> </p> </div> <!-- Deskripsi --> <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-md text-gray-800 prose md:max-w-full w-full"> <p>', '</p> </div> <!-- Navigasi Surat --> <div class="flex flex-col md:flex-row justify-between items-center mb-6 text-sm gap-4"> <!-- Tombol Kembali --> <a href="/quran" class="inline-flex items-center text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md border border-blue-100 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>\nKembali ke Daftar Surat\n</a> <!-- Navigasi Sebelum/Sesudah --> <div class="flex gap-2"> ', " ", ' </div> </div> <!-- Ayat-ayat --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ', ` </div> </div>  <script type="module" is:client>
    document.querySelectorAll('.tafsir-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const el = document.getElementById(id);
        if (el) {
          el.classList.toggle('hidden');
        }
      });
    });
  <\/script> `])), maybeRenderHead(), surat.namaLatin, surat.nama, surat.arti, surat.jumlahAyat, surat.tempatTurun, unescapeHTML(deskripsi), surat.nomor > 1 && renderTemplate`<a${addAttribute(`/quran/${surat.nomor - 1}`, "href")} class="inline-flex items-center text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md border border-gray-200 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Surat Sebelumnya
</a>`, surat.nomor < 114 && renderTemplate`<a${addAttribute(`/quran/${surat.nomor + 1}`, "href")} class="inline-flex items-center text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md border border-gray-200 transition">
Surat Berikutnya
<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>`, surat.ayat.map((ayat) => renderTemplate`<div class="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition"> <div class="text-right text-3xl font-arabic text-gray-800 leading-loose"> ${ayat.teksArab} </div> <div class="mt-2 text-sm text-gray-600"> <span class="font-semibold">(${ayat.nomorAyat})</span> ${ayat.teksIndonesia} </div> <button class="mt-3 text-sm text-blue-600 hover:underline tafsir-toggle"${addAttribute(`tafsir-${ayat.nomorAyat}`, "data-id")}>
Lihat Tafsir
</button> <div${addAttribute(`tafsir-${ayat.nomorAyat}`, "id")} class="hidden mt-2 text-sm text-gray-700"> ${ayat.teksTafsir} </div> </div>`)) })}`;
}, "D:/my-cv/Cv-me/src/pages/quran/[nomor].astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/quran/[nomor].astro";
const $$url = "/quran/[nomor]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$nomor,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
