/* empty css                                      */
import { c as createComponent, d as createAstro, m as maybeRenderHead, e as renderSlot, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_ed-aK6O1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DKlzkahM.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle, subtitle2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "D:/my-cv/Cv-me/src/components/cv/TimeLine.astro", void 0);

const $$Astro = createAstro();
const $$Cv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="mb-10 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-white shadow"> <h2 class="text-3xl font-bold mb-3">👤 Profile</h2> <p class="text-justify leading-relaxed">
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
</p> </section>  <section class="mb-10 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-white shadow"> <h2 class="text-3xl font-bold mb-6">🎓 Education</h2> <div class="grid gap-4"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "D3 Manajemen Informatika", "subtitle": "Universitas Bina Sarana Informatika" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "S1 Sistem Informasi", "subtitle": "STMIK Nusa Mandiri" })} </div> </section>  <section class="mb-10 p-6 rounded-2xl bg-gradient-to-r from-yellow-50 to-white shadow"> <h2 class="text-3xl font-bold mb-6">💼 Experience</h2> <div class="grid gap-6"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "PT Rafesh", "subtitle": "Magang Mahasiswa" }, { "default": ($$result3) => renderTemplate` <b class="block mt-3 mb-1">Tools & Technologies:</b> <ul class="list-disc list-inside space-y-1"> <li>Ms. Excel, Ms. Word, Photoshop, Kertas & Pulpen</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "PT Hasjrat Multifinance", "subtitle": "Web Developer" }, { "default": ($$result3) => renderTemplate` <b class="block mt-3 mb-1">Tools & Technologies:</b> <ul class="list-disc list-inside space-y-1"> <li>Eclipse, Navicat, iReport</li> <li>Java, Spring Boot, Bootstrap, CSS, Html, JavaScript</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Freelance", "subtitle": "IT Support" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "PT Metropolitan Retailmart", "subtitle": "MSR Developer" }, { "default": ($$result3) => renderTemplate` <b class="block mt-3 mb-1">Tools & Technologies:</b> <ul class="list-disc list-inside space-y-1"> <li>VS Code, Postman, Solr, Git</li> <li>Golang, PHP, CodeIgniter, JavaScript, HTML5, Bootstrap, Razor</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "PT Summit Global Teknologi", "subtitle": "Frontend Engineer" }, { "default": ($$result3) => renderTemplate` <b class="block mt-3 mb-1">Tools & Technologies:</b> <ul class="list-disc list-inside space-y-1"> <li>IntelliJ IDEA, Figma, Adobe XD, Git</li> <li>ChatGPT, Claude.ai, Magic Scroll </li> <li>IntelliJ IDEA, Vue.js, Nuxt, HTML5, CSS</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "PT Optimasmartindo Industri", "subtitle": "Staff IT" }, { "default": ($$result3) => renderTemplate` <b class="block mt-3 mb-1">Tools & Technologies:</b> <ul class="list-disc list-inside space-y-1"> <li>Canva, TikTok, Shopee, Tokopedia, Instagram, YouTube</li> <li>C#, Ms. Office, Bootstrap</li> <li>CCTV</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Bpjs Kesehatan", "subtitle": "Programmer fullstack" }, { "default": ($$result3) => renderTemplate` <b class="block mt-3 mb-1">Tools & Technologies:</b> <ul class="list-disc list-inside space-y-1"> <li>VS Code, Visual Studio, Postman, Git, Bitbucket</li> <li>Java, JavaScript, AngularJS, SpringBoot, .NET, SQL Server, Bootstrap, CSS, HTML</li> </ul> ` })} </div> </section>  <section class="mb-10 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-white shadow"> <h2 class="text-3xl font-bold mb-4">📜 Certifications</h2> <ul class="list-disc list-inside space-y-2"> <li>Desain Grafis</li> <li>CCNA (Cisco Certified Network Associate)</li> <li>3-in-1: Networking, Python, Automation</li> <li>Fullstack Web Development</li> <li>UI/UX Design</li> </ul> </section>  <section class="mb-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-50 to-white shadow"> <h2 class="text-3xl font-bold mb-4">🛠️ Skills</h2> <ul class="list-disc md:columns-5 columns-2 list-inside space-y-1"> <li>JavaScript</li> <li>PHP</li> <li>HTML5</li> <li>CSS</li> <li>CodeIgniter</li> <li>Laravel</li> <li>Tailwind</li> <li>Nuxt.js</li> <li>Astro.js</li> <li>Vue.js</li> <li>React.js</li> <li>Java</li> <li>Flutter</li> <li>.NET</li> </ul> </section> ` })}`;
}, "D:/my-cv/Cv-me/src/pages/cv.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
