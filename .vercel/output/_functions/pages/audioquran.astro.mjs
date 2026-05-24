/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript, d as addAttribute } from '../chunks/astro/server_BRzQfmCI.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKft6Hqk.mjs';
export { renderers } from '../renderers.mjs';

const $$Audioquran = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://equran.id/api/v2/surat");
  const suratData = await res.json();
  const surats = suratData.data ?? [];
  const qaris = [
    { code: "01", name: "Abdullah Al-Juhany" },
    { code: "02", name: "Abdul-Muhsin Al-Qasim" },
    { code: "03", name: "Abdurrahman as-Sudais" },
    { code: "04", name: "Ibrahim Al-Dossari" },
    { code: "05", name: "Misyari Rasyid Al-Afasi" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Audio Al Quran", "sideBarActiveItemID": "audioquran" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="space-y-8 pb-10"> <div class="space-y-4"> <p class="text-sm font-semibold uppercase tracking-wider text-blue-700">
Murotal
</p> <div> <h1 class="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
Audio Al Quran
</h1> <p class="mt-3 max-w-2xl text-base leading-7 text-gray-600">
Dengarkan murotal per surat dengan pilihan qari yang tersedia.
</p> </div> </div> <div class="grid gap-3 border-y border-gray-200 py-5 sm:grid-cols-3"> <div> <p class="text-2xl font-bold text-gray-950">${surats.length}</p> <p class="mt-1 text-sm text-gray-500">Surat</p> </div> <div> <p class="text-2xl font-bold text-gray-950">${qaris.length}</p> <p class="mt-1 text-sm text-gray-500">Pilihan qari</p> </div> <div> <p class="text-2xl font-bold text-gray-950">Full Audio</p> <p class="mt-1 text-sm text-gray-500">Per surat</p> </div> </div> <div class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"> <label for="searchInput" class="sr-only">Cari audio surat</label> <div class="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"> <i class="fa-solid fa-magnifying-glass text-gray-400"></i> <input type="text" id="searchInput" placeholder="Cari nama surat, arti, tempat turun, atau jumlah ayat..." class="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"> </div> </div> </section> <section class="pb-12"> <div id="suratList" class="grid gap-4 md:grid-cols-2"> ${surats.map((surat) => renderTemplate`<article class="surat-item rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"${addAttribute(`${surat.namaLatin.toLowerCase()} ${surat.arti.toLowerCase()} ${surat.tempatTurun.toLowerCase()} ${surat.jumlahAyat}`, "data-keywords")}${addAttribute(surat.audioFull["01"], "data-audio-01")}${addAttribute(surat.audioFull["02"], "data-audio-02")}${addAttribute(surat.audioFull["03"], "data-audio-03")}${addAttribute(surat.audioFull["04"], "data-audio-04")}${addAttribute(surat.audioFull["05"], "data-audio-05")}> <div class="flex items-start justify-between gap-4"> <div class="flex items-start gap-3"> <div class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700"> ${surat.nomor} </div> <div> <h2 class="text-xl font-bold text-gray-950">${surat.namaLatin}</h2> <p class="mt-1 text-sm text-gray-500"> ${surat.arti} - ${surat.jumlahAyat} ayat - ${surat.tempatTurun} </p> </div> </div> <p class="font-arabic text-2xl leading-none text-gray-900">${surat.nama}</p> </div> <div class="mt-5 grid gap-3"> <label class="text-xs font-bold uppercase tracking-wider text-gray-400">
Pilih Qari
</label> <select class="qari-select rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"> ${qaris.map((qari) => renderTemplate`<option${addAttribute(qari.code, "value")}${addAttribute(qari.code === "05", "selected")}> ${qari.name} </option>`)} </select> <audio controls class="audio-player w-full" preload="none"> <source${addAttribute(surat.audioFull["05"], "src")} type="audio/mpeg">
Browser Anda tidak mendukung pemutar audio.
</audio> </div> </article>`)} </div> <div id="emptyState" class="hidden rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"> <p class="font-semibold text-gray-900">Audio surat tidak ditemukan</p> <p class="mt-1 text-sm text-gray-500">Coba gunakan kata kunci lain.</p> </div> </section> ${renderScript($$result2, "C:/cvme/Cv-me/src/pages/audioquran.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/cvme/Cv-me/src/pages/audioquran.astro", void 0);

const $$file = "C:/cvme/Cv-me/src/pages/audioquran.astro";
const $$url = "/audioquran";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Audioquran,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
