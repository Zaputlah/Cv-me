/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript, d as addAttribute } from '../chunks/astro/server_BRzQfmCI.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKft6Hqk.mjs';
export { renderers } from '../renderers.mjs';

const $$Quran = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://equran.id/api/v2/surat");
  const suratData = await res.json();
  const surats = suratData.data ?? [];
  const totalMekah = surats.filter((surat) => surat.tempatTurun === "Mekah").length;
  const totalMadinah = surats.filter((surat) => surat.tempatTurun === "Madinah").length;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Al Quran", "sideBarActiveItemID": "quran" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="space-y-8 pb-10"> <div class="space-y-4"> <p class="text-sm font-semibold uppercase tracking-wider text-blue-700">
Al Quran
</p> <div> <h1 class="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
Daftar Surat
</h1> <p class="mt-3 max-w-2xl text-base leading-7 text-gray-600">
Baca daftar surat Al-Quran lengkap dengan jumlah ayat, arti, dan
          tempat turunnya.
</p> </div> </div> <div class="grid gap-3 border-y border-gray-200 py-5 sm:grid-cols-3"> <div> <p class="text-2xl font-bold text-gray-950">${surats.length}</p> <p class="mt-1 text-sm text-gray-500">Total surat</p> </div> <div> <p class="text-2xl font-bold text-gray-950">${totalMekah}</p> <p class="mt-1 text-sm text-gray-500">Makkiyah</p> </div> <div> <p class="text-2xl font-bold text-gray-950">${totalMadinah}</p> <p class="mt-1 text-sm text-gray-500">Madaniyyah</p> </div> </div> <div class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"> <label for="searchInput" class="sr-only">Cari surat</label> <div class="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"> <i class="fa-solid fa-magnifying-glass text-gray-400"></i> <input type="text" id="searchInput" placeholder="Cari nama surat, arti, tempat turun, atau jumlah ayat..." class="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"> </div> </div> </section> <section class="pb-12"> <div id="suratList" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"> ${surats.map((surat) => {
    const isMadinah = surat.tempatTurun === "Madinah";
    return renderTemplate`<a${addAttribute(`/quran/${surat.nomor}`, "href")} class="surat-item group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"${addAttribute(`${surat.namaLatin.toLowerCase()} ${surat.arti.toLowerCase()} ${surat.tempatTurun.toLowerCase()} ${surat.jumlahAyat}`, "data-keywords")}> <div class="flex items-start justify-between gap-4"> <div class="flex items-start gap-3"> <div class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700"> ${surat.nomor} </div> <div> <h2 class="text-xl font-bold text-gray-950">${surat.namaLatin}</h2> <p class="mt-1 text-sm text-gray-500">${surat.arti}</p> </div> </div> <p class="font-arabic text-2xl leading-none text-gray-900">${surat.nama}</p> </div> <div class="mt-5 flex flex-wrap gap-2"> <span${addAttribute(`rounded-md px-2.5 py-1.5 text-xs font-semibold ${isMadinah ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"}`, "class")}> ${surat.tempatTurun} </span> <span class="rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-700"> ${surat.jumlahAyat} ayat
</span> </div> <div class="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-blue-700"> <span>Baca surat</span> <span class="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 transition group-hover:bg-blue-600 group-hover:text-white"> <i class="fa-solid fa-arrow-right text-xs"></i> </span> </div> </a>`;
  })} </div> <div id="emptyState" class="hidden rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"> <p class="font-semibold text-gray-900">Surat tidak ditemukan</p> <p class="mt-1 text-sm text-gray-500">Coba gunakan kata kunci lain.</p> </div> </section> ${renderScript($$result2, "C:/cvme/Cv-me/src/pages/quran.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/cvme/Cv-me/src/pages/quran.astro", void 0);

const $$file = "C:/cvme/Cv-me/src/pages/quran.astro";
const $$url = "/quran";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Quran,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
