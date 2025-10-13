/* empty css                                      */
import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BseMOw_E.mjs';
import { $ as $$HorizontalCard } from '../chunks/HorizontalCard_CqyJCUkc.mjs';
import { g as getCollection } from '../chunks/_astro_content_BjQhqExE.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Hai 👋</div> <div class="text-5xl font-bold">I'm Reza putra fadilah</div> <div class="text-3xl py-3 font-bold"> <span id="typingText" class="typing-animation"></span> </div> <div class="py-2"> <text class="text-lg">
Software Developer with extensive experience in building web and enterprise
    applications as a Web Developer, Software Developer, Java Developer, and
    Full Stack Developer. Skilled in both frontend and backend development with
    strong expertise in <b>Java, PHP, AngularJS, Spring Boot, and CodeIgniter</b>, 
    and hands-on experience with <b>Flutter</b> and <b>.NET</b>. Proficient in 
    designing scalable and secure systems, API integration, and database management 
    using <b>MySQL, SQL Server, and Navicat</b>. Experienced in deploying and managing 
    applications on <b>WildFly</b> server. Adept at version control and collaboration 
    using <b>Git, GitHub, Bitbucket, and GitLab</b>, and familiar with both
<b>Agile</b> and <b>Waterfall</b> methodologies. Committed to clean code practices, 
    CI/CD pipelines, and delivering high-quality, maintainable software solutions.
</text> </div> <!-- <div class="mt-8">
      <a
        class="btn"
        href="https://www.linkedin.com/in/reza-putra-fadilah-87800316b/"
        target="_blank">Let's connect!</a
      >
    </div> --> <div class="mt-8 flex flex-col gap-4 sm:flex-row"> <!-- LinkedIn Button --> <a class="btn bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition" href="https://www.linkedin.com/in/reza-putra-fadilah-87800316b/" target="_blank"> <i class="fab fa-linkedin text-xl"></i>
Connect on LinkedIn
</a> <!-- WhatsApp Button --> <a class="btn bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition" href="https://wa.me/6285811043930" target="_blank"> <i class="fab fa-whatsapp text-xl"></i>
Chat on WhatsApp
</a> </div> </div> <div> <div class="text-3xl w-full font-bold mb-2">My projects</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Hospital", "img": "/Hospital.png", "desc": "Website rumah sakit sederhana yang dibuat untuk menyediakan informasi yang ada di dalam rumah sakit tersebut", "url": "https://hospital-zaputlah.vercel.app/", "customTag": "#Reactjs #Fontawesome #Jwt #Reactstrap #Css #Axios", "badge": "NEW" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "CRUD 1", "img": "/crud1.png", "desc": "Crud sederhana yang bisa melakukan create read ubah delete tapi sebelum melakukan crud di wajibkan untuk login terlebih dahulu", "customTag": "#Reactjs #Redux #Jwt #Bootsrap #Axios", "url": "https://crud-react-redux-tau.vercel.app/" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Qoute 1", "img": "/qoute1.png", "desc": "Kumpulan kata kata Bijak dari Orang orang yang ada di luar negeri", "customTag": "#Reactjs #Api #Axios #Css", "url": "https://qoute-chi.vercel.app/" })} <div class="divider my-0"></div> <div class="container relative"> <a class="inline-block px-4 py-2 mt-2 bg-black text-white rounded hover:bg-gray-400 absolute top-0 right-0" href="/projects">Selengkapnya</a> </div> ` })} ${renderScript($$result, "D:/my-cv/Cv-me/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/my-cv/Cv-me/src/pages/index.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
