/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C8pmW2BQ.mjs';
import { u as ustadzList } from '../chunks/ustadzList_n-Xsrgjv.mjs';
export { renderers } from '../renderers.mjs';

const $$Ceramah = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ustadz Sunnah", "sideBarActiveItemID": "ceramah" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-3xl font-bold mb-6">Daftar Ustadz Sunnah</div> <div class="space-y-4"> ${ustadzList.map((ustadz) => renderTemplate`<a${addAttribute(`/ustadz/${ustadz.id}`, "href")} class="block bg-white p-4 rounded shadow hover:bg-gray-100 transition"> <div class="font-bold text-xl">${ustadz.name}</div> <p>${ustadz.description}</p> </a>`)} </div> ` })}`;
}, "D:/my-cv/Cv-me/src/pages/ceramah.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/ceramah.astro";
const $$url = "/ceramah";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ceramah,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
