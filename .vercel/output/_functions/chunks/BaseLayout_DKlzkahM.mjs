import { c as createComponent, d as createAstro, b as addAttribute, a as renderTemplate, m as maybeRenderHead, j as defineScriptVars, r as renderComponent, f as renderScript, k as renderHead, e as renderSlot } from './astro/server_ed-aK6O1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import './index_CYyG6us9.mjs';
import { $ as $$Image } from './_astro_assets_Dp8u7GYo.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from './config_D4uJdckR.mjs';

const $$Astro$4 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title,
    description,
    image = "/social_img.webp",
    ogType = "website"
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/z.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "D:/my-cv/Cv-me/src/components/BaseHead.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm"> <div class="navbar"> <div class="navbar-start"> <label for="my-drawer" class="btn btn-square btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> </div> <div class="navbar-center"> <a class="btn btn-ghost normal-case text-xl" href="/">Reza putra fadilah ⚡️</a> </div> <div class="navbar-end"></div> </div> </div>`;
}, "D:/my-cv/Cv-me/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center block mb-5 pt-10"> <div class="pb-2">
&copy; ${today.getFullYear()} Reza putra fadilah
</div> <div class="inline opacity-75">
Developed by <a href="https://github.com/zaputlah/" target="_blank" class="font-bold">Reza putra fadilah</a> <!-- Thanks for using this template. You can keep this line to support my work :) --> </div> </footer> `;
}, "D:/my-cv/Cv-me/src/components/Footer.astro", void 0);

const $$SideBarFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Gradient Mask -->${maybeRenderHead()}<div class="block sticky pointer-events-none bottom-10 bg-base-200 justify-center h-12 [mask-image:linear-gradient(transparent,#000000)]"></div> <!-- Social Icons --> <div class="social-icons px-4 pb-5 pt-1 flex justify-center sticky bottom-0 bg-base-200"> <!-- GitHub --> <a href="https://github.com/zaputlah" target="_blank" class="mx-3" aria-label="Github" title="Github"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
      3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
      -.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 
      1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 
      3.495.997.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
      0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 
      2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23 
      .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 
      1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 
      1.096.81 2.215 0 1.6-.015 2.885-.015 3.28 0 
      .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 
      24 5.67 18.627.297 12 .297z"></path> </svg> </a> <!-- Instagram --> <a href="https://instagram.com/zaputlah" target="_blank" class="mx-3" aria-label="Instagram" title="Instagram"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 
      114.9s51.3 114.9 114.9 114.9 114.9-51.3 
      114.9-114.9S287.6 141 224.1 141zm0 
      189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 
      74.7-74.7 74.7 33.5 74.7 74.7-33.5 
      74.7-74.7 74.7zm146.4-194.3c0 
      14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 
      26.9-26.9 26.9 12 26.9 26.9zm76.1 
      27.2c-1.7-35.3-9.9-66.7-36.2-93C383.3 
      7.9 351.9-.3 316.6 1.4c-35.3 1.7-138.6 
      1.7-173.9 0C107.4-.3 76 .9 49.7 
      27.2 23.4 53.5 15.2 84.9 16.9 
      120.2c1.7 35.3 1.7 138.6 0 173.9-1.7 
      35.3 7.9 66.7 34.2 93 26.3 26.3 57.7 
      35.9 93 34.2 35.3-1.7 138.6-1.7 
      173.9 0 35.3 1.7 66.7-7.9 
      93-34.2 26.3-26.3 35.9-57.7 
      34.2-93-1.7-35.3-1.7-138.6 
      0-173.9zM398.8 388c-7.8 
      19.6-22.9 34.7-42.6 42.6-29.5 
      11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
      9-132.1c7.8-19.6 22.9-34.7 
      42.6-42.6 29.5-11.7 99.5-9 
      132.1-9s102.7-2.6 132.1 
      9c19.6 7.8 34.7 22.9 42.6 
      42.6 11.7 29.5 9 99.5 9 
      132.1s2.7 102.7-9 132.1z"></path> </svg> </a> <!-- LinkedIn --> <a href="https://www.linkedin.com/in/reza-putra-fadilah-87800316b/" target="_blank" class="mx-3" aria-label="Linkedin" title="Linkedin"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor"> <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.14 
      107 0 82.86 0 53.5S24.14 0 53.84 
      0s53.44 24.14 53.44 53.5-24.14 
      53.5-53.44 53.5zM447.9 
      448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 
      0-55.7 37.7-55.7 76.6V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.4 
      42.7-48.3 87.8-48.3 94 0 111.3 61.9 111.3 
      142.3V448z"></path> </svg> </a> <!-- YouTube --> <a href="https://www.youtube.com/channel/UCJCeWHXjQhH8qRmycEayMwQ" target="_blank" class="mx-3" aria-label="Youtube" title="Youtube"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="currentColor"> <path d="M549.655 124.083c-6.281-23.65-24.779-42.13-48.408-48.434C458.236 
      64 288 64 288 64s-170.236 0-213.247 
      11.649c-23.629 6.304-42.127 24.784-48.408 
      48.434C16.003 167.111 16 256.005 16 
      256.005s-.003 88.906 10.345 131.922c6.281 
      23.65 24.779 42.13 48.408 48.434C117.764 
      448.005 288 448.005 288 448.005s170.236 
      0 213.247-11.649c23.629-6.304 42.127-24.784 
      48.408-48.434C559.997 344.911 560 
      256.005 560 256.005s-.003-88.906-10.345-131.922zM232 
      336.005V176.005l142.857 80z"></path> </svg> </a> </div>`;
}, "D:/my-cv/Cv-me/src/components/SideBarFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$SideBarMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideBarMenu;
  const { sideBarActiveItemID } = Astro2.props;
  const activeClass = "bg-base-300";
  return renderTemplate(_a || (_a = __template(["", `<ul class="menu grow shrink menu-md overflow-y-auto"> <!-- Umum --> <li><a class="py-3 text-base" id="home" href="/">Home</a></li> <li><a class="py-3 text-base" id="projects" href="/projects">Projects</a></li> <li><a class="py-3 text-base" id="cv" href="/cv">CV</a></li> <li> <a class="py-3 text-base" href="mailto:reza.rr889@gmail.com" target="_blank" referrerpolicy="no-referrer-when-downgrade">Contact</a> </li> <!-- Konten Islam --> <li class="menu-title"> <span>AI</span> </li> <li><a class="py-3 text-base" id="screeningCv" href="/screeningCv">Screening CV</a></li> <li><a class="py-3 text-base" id="Tanya AI" href="/tanyaAI">Tanya AI</a></li> <!-- Konten Islam --> <li class="menu-title"> <span>Edukasi Islami</span> </li> <!-- <li><a class="py-3 text-base" id="blog" href="/blog/">Blog</a></li> --> <li><a class="py-3 text-base" id="sahabatnabi" href="/sahabatnabi">Sahabat Nabi</a></li> <li><a class="py-3 text-base" id="sunahnabi" href="/sunahnabi">Sunah Nabi</a></li> <li><a class="py-3 text-base" id="quran" href="/quran">Al Qur'an</a></li> <li><a class="py-3 text-base" id="audioquran" href="/audioquran">Audio Al Qur'an</a></li> <!-- <li><a class="py-3 text-base" id="video" href="/video/">Video</a></li> --> <li class="menu-title"> <span>Edukasi Sejarah indonesia</span> </li> <li><a class="py-3 text-base" id="pahlawan" href="/pahlawan">Pahlawan Nasional</a></li> <li><a class="py-3 text-base" id="sejarah" href="/sejarah">Sejarah</a></li> </ul> <script>(function(){`, "\n  const activeItemElem = document.getElementById(sideBarActiveItemID);\n  activeItemElem && activeItemElem.classList.add(activeClass);\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({
    sideBarActiveItemID,
    activeClass
  }));
}, "D:/my-cv/Cv-me/src/components/SideBarMenu.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { sideBarActiveItemID } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="drawer-side z-40"> <label for="my-drawer" class="drawer-overlay"></label> <aside class="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col 
         border-r border-gray-300 shadow-md rounded-r-lg"> <div class="w-fit mx-auto mt-5 mb-6"> <a href="/"> <div class="avatar transition ease-in-out hover:scale-[102%] block m-auto"> <div class="w-[8.5rem] ring-2 ring-blue rounded-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "class": "mask mask-circle", "format": "webp", "width": 300, "height": 300, "src": "/zaputlah.jpeg", "alt": "Profile image" })} </div> </div> </a> </div> ${renderComponent($$result, "SideBarMenu", $$SideBarMenu, { "sideBarActiveItemID": sideBarActiveItemID })} ${renderComponent($$result, "SideBarFooter", $$SideBarFooter, {})} </aside> </div>`;
}, "D:/my-cv/Cv-me/src/components/SideBar.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/my-cv/Cv-me/node_modules/.pnpm/astro@5.14.4_@vercel+functi_23e6fc72d040ff66c070b30ef8e80010/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/my-cv/Cv-me/node_modules/.pnpm/astro@5.14.4_@vercel+functi_23e6fc72d040ff66c070b30ef8e80010/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    image,
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    includeSidebar = true,
    sideBarActiveItemID,
    ogType
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="lofi"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, ",": true, "ogType": ogType })}${renderTemplate`${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}`}<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><!-- AOS CSS --><link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">${renderHead()}</head> <body> <div class="bg-base-100 drawer lg:drawer-open"> <input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content bg-base-100"> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <div class="md:flex md:justify-center"> <main class="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${includeSidebar && renderTemplate`${renderComponent($$result, "SideBar", $$SideBar, { "sideBarActiveItemID": sideBarActiveItemID })}`} </div> </body></html>`;
}, "D:/my-cv/Cv-me/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
