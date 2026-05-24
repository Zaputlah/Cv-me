/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_BRzQfmCI.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKft6Hqk.mjs';
export { renderers } from '../renderers.mjs';

const $$ScreeningCv = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Screening CV", "sideBarActiveItemID": "cv" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="p-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-xl border border-blue-100"> <div class="mb-6 text-center"> <h2 class="text-4xl font-extrabold text-blue-800 mb-2 flex items-center justify-center gap-2">
📄 CV Screening AI
</h2> <p class="text-gray-600 text-lg">
Upload CV kamu (demo terbatas) dan biarkan sistem menganalisis kecocokan.
</p> </div> <form id="screeningForm" class="space-y-6 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100" method="POST" enctype="multipart/form-data"> <div> <label class="block font-semibold text-gray-700 mb-2">Upload CV (PDF/DOCX):</label> <div class="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:border-blue-400 transition"> <input type="file" id="cvFile" name="cvFile" accept=".pdf,.docx" required class="w-full text-sm text-gray-600 focus:outline-none" maxlength="500000"> </div> <p class="text-xs text-gray-400 mt-1">*Maksimal 500KB. Hanya .pdf atau .docx.</p> </div> <div> <label class="block font-semibold text-gray-700 mb-2">Job Description:</label> <textarea id="jobDescription" name="jobDescription" rows="5" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan deskripsi pekerjaan..." maxlength="2000"></textarea> <p class="text-xs text-gray-400 mt-1">*Maksimal 2000 karakter.</p> </div> <input type="text" name="bot-field" style="display: none;"> <div class="text-center"> <button type="submit" class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition">
🔍 Analyze CV
</button> </div> </form> </section> <section id="result" class="mt-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-800 max-w-2xl mx-auto hidden"></section> ${renderScript($$result2, "C:/cvme/Cv-me/src/pages/screeningCv.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/cvme/Cv-me/src/pages/screeningCv.astro", void 0);

const $$file = "C:/cvme/Cv-me/src/pages/screeningCv.astro";
const $$url = "/screeningCv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ScreeningCv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
