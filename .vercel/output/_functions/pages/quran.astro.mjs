/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C8pmW2BQ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Quran = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://equran.id/api/v2/surat");
  const suratData = await res.json();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "quran" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="text-left mb-4 px-4"> <h2 class="text-3xl font-bold w-full mb-2">Daftar Surat Al-Qur'an</h2> <input type="text" id="searchInput" placeholder="Cari surat berdasarkan nama, tempat turun, atau jumlah ayat..." class="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"> </div> <div id="suratList" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-10"> `, ` </div> <script type="module" is:client>
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.surat-item');

    input.addEventListener('input', () => {
      const search = input.value.toLowerCase();
      items.forEach((item) => {
        const keywords = item.getAttribute('data-keywords');
        item.style.display = keywords.includes(search) ? 'block' : 'none';
      });
    });
  <\/script> `])), maybeRenderHead(), suratData.data.map((surat) => {
    const bgClass = surat.tempatTurun.toLowerCase() === "madinah" ? "bg-green-100" : "bg-gray-100";
    return renderTemplate`<a${addAttribute(`/quran/${surat.nomor}`, "href")}${addAttribute(`surat-item block p-4 rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition duration-200 ${bgClass}`, "class")}${addAttribute(`${surat.namaLatin.toLowerCase()} ${surat.tempatTurun.toLowerCase()} ${surat.jumlahAyat}`, "data-keywords")}> <div class="text-lg font-semibold text-gray-800"> ${surat.nomor}. ${surat.namaLatin} </div> <div class="text-sm text-gray-600"> ${surat.jumlahAyat} ayat
</div> </a>`;
  })) })}`;
}, "D:/my-cv/Cv-me/src/pages/quran.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/quran.astro";
const $$url = "/quran";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Quran,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
