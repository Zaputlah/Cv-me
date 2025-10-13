/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BseMOw_E.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Pahlawan = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://indonesia-public-static-api.vercel.app/api/heroes");
  const pahlawanData = await res.json();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pahlawan Nasional", "sideBarActiveItemID": "pahlawan" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="text-left mb-6 px-4"> <h2 class="text-4xl font-extrabold text-blue-700 mb-2">Pahlawan Nasional Indonesia</h2> <p class="text-gray-600 mb-4 text-lg">Temukan dan pelajari kisah para pahlawan yang telah berjasa besar bagi bangsa ini.</p> <input type="text" id="searchInput" placeholder="Cari pahlawan berdasarkan nama, asal, atau deskripsi..." class="w-full sm:w-1/2 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition duration-200"> </div> <div id="pahlawanList" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-12"> ', ` </div> <script type="module" is:client>
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.pahlawan-item');

    input.addEventListener('input', () => {
      const search = input.value.toLowerCase();
      items.forEach((item) => {
        const keywords = item.getAttribute('data-keywords');
        item.style.display = keywords.includes(search) ? 'block' : 'none';
      });
    });
  <\/script> `])), maybeRenderHead(), pahlawanData.map((pahlawan, index) => renderTemplate`<div class="pahlawan-item bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300 overflow-hidden flex flex-col"${addAttribute(`${pahlawan.name.toLowerCase()} ${pahlawan.birth_year} ${pahlawan.description.toLowerCase()}`, "data-keywords")}> <div class="p-5 flex-1 flex flex-col justify-between"> <div> <h3 class="text-xl font-semibold text-blue-800 mb-2">${index + 1}. ${pahlawan.name}</h3> <p class="text-sm text-gray-700 italic mb-3">"${pahlawan.description}"</p> </div> <div class="text-sm text-gray-500 mt-2 border-t pt-2"> <p><span class="font-medium text-gray-600">Asal:</span> ${pahlawan.place_of_origin || "Tidak diketahui"}</p> <p><span class="font-medium text-gray-600">Lahir:</span> ${pahlawan.birth_year} — <span class="font-medium text-gray-600">Wafat:</span> ${pahlawan.death_year || "?"}</p> </div> </div> </div>`)) })}`;
}, "D:/my-cv/Cv-me/src/pages/pahlawan.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/pahlawan.astro";
const $$url = "/pahlawan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pahlawan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
