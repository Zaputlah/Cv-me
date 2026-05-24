/* empty css                                         */
import { c as createComponent, e as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as renderScript, d as addAttribute } from '../../chunks/astro/server_BRzQfmCI.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CKft6Hqk.mjs';
export { renderers } from '../../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Surat ${surat.namaLatin}`, "sideBarActiveItemID": "quran" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="space-y-8 pb-10"> <div class="space-y-4"> <a href="/quran" class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"> <i class="fa-solid fa-arrow-left"></i>
Daftar Surat
</a> <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"> <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"> <div> <p class="text-sm font-semibold uppercase tracking-wider text-blue-700">
Surat #${surat.nomor} </p> <h1 class="mt-2 text-4xl font-bold leading-tight text-gray-950 md:text-5xl"> ${surat.namaLatin} </h1> <p class="mt-2 text-base leading-7 text-gray-600"> ${surat.arti} - ${surat.jumlahAyat} ayat - Turun di ${surat.tempatTurun} </p> </div> <p class="font-arabic text-right text-5xl leading-relaxed text-gray-950"> ${surat.nama} </p> </div> <div class="mt-6 rounded-lg bg-blue-50 p-4 text-sm leading-7 text-gray-700"> <p>${unescapeHTML(deskripsi)}</p> </div> </div> <div class="flex flex-col gap-3 sm:flex-row sm:justify-between"> <div> ${surat.nomor > 1 && renderTemplate`<a${addAttribute(`/quran/${surat.nomor - 1}`, "href")} class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"> <i class="fa-solid fa-arrow-left"></i>
Surat sebelumnya
</a>`} </div> <div> ${surat.nomor < 114 && renderTemplate`<a${addAttribute(`/quran/${surat.nomor + 1}`, "href")} class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
Surat berikutnya
<i class="fa-solid fa-arrow-right"></i> </a>`} </div> </div> </div> </section> <section class="pb-12"> <div class="grid gap-4"> ${surat.ayat.map((ayat) => renderTemplate`<article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"> <div class="flex items-start gap-4"> <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700"> ${ayat.nomorAyat} </div> <div class="min-w-0 flex-1"> <p class="font-arabic text-right text-3xl leading-loose text-gray-950 md:text-4xl"> ${ayat.teksArab} </p> <p class="mt-4 text-sm leading-7 text-gray-600"> ${ayat.teksIndonesia} </p> ${ayat.teksTafsir && renderTemplate`<div class="mt-4"> <button type="button" class="tafsir-toggle inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"${addAttribute(`tafsir-${ayat.nomorAyat}`, "data-id")}> <i class="fa-solid fa-book-open"></i>
Lihat tafsir
</button> <div${addAttribute(`tafsir-${ayat.nomorAyat}`, "id")} class="hidden mt-3 rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm leading-7 text-gray-600"> ${ayat.teksTafsir} </div> </div>`} </div> </div> </article>`)} </div> </section> ${renderScript($$result2, "C:/cvme/Cv-me/src/pages/quran/[nomor].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/cvme/Cv-me/src/pages/quran/[nomor].astro", void 0);

const $$file = "C:/cvme/Cv-me/src/pages/quran/[nomor].astro";
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
