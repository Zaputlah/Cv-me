/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderScript } from '../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BseMOw_E.mjs';
export { renderers } from '../renderers.mjs';

const $$TanyaAI = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI Search Engine", "sideBarActiveItemID": "Tanya AI" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center min-h-screen py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50"> <!-- Header --> <h1 class="text-5xl font-extrabold text-blue-700 mb-8">🔮 AI Search Engine</h1> <p class="text-gray-600 text-lg mb-12 text-center max-w-2xl">
Tanyakan apapun, dan AI akan memberikan jawaban akurat beserta sumber terpercaya.
</p> <!-- Form Card --> <form id="searchForm" class="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 space-y-6"> <div> <label class="block font-semibold text-gray-700 mb-2">Pertanyaan Anda:</label> <textarea id="query" name="query" rows="4" placeholder="Contoh: Apa itu quantum computing?" required class="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-lg resize-none transition"></textarea> </div> <div class="text-center"> <button type="submit" class="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition">
🔍 Cari Jawaban
</button> </div> </form> <!-- Result Section --> <div id="result" class="mt-10 w-full max-w-3xl space-y-4"></div> </div> ${renderScript($$result2, "D:/my-cv/Cv-me/src/pages/tanyaAI.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/my-cv/Cv-me/src/pages/tanyaAI.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/tanyaAI.astro";
const $$url = "/tanyaAI";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TanyaAI,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
