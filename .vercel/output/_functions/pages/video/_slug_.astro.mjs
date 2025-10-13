/* empty css                                         */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot, b as addAttribute } from '../../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BjQhqExE.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BseMOw_E.mjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import { c as createSlug } from '../../chunks/createSlug_D-iatWqU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$VideoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoLayout;
  const {
    title,
    description,
    pubDate,
    updatedDate,
    heroImage,
    youtubeurl,
    badge,
    tags = []
  } = Astro2.props;
  dayjs.extend(localizedFormat);
  const displayDate = dayjs(pubDate).format("ll");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "src": heroImage, "ogType": "article" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="md:flex md:justify-center"> <article class="prose prose-lg max-w-[750px] prose-img:mx-auto"> ${heroImage && renderTemplate`<div className="video-container"> <iframe width="750" height="422"${addAttribute(`https://www.youtube.com/embed/${heroImage.split("v=")[1]}`, "src")}${addAttribute(title, "title")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen class="w-full mb-6"></iframe> </div>`} <h1 class="title my-2 text-4xl font-bold">${title}</h1> ${pubDate && renderTemplate`<time>${displayDate}</time>`} <br> ${badge && renderTemplate`<div class="badge badge-secondary my-1">${badge}</div>`} ${tags && tags.map((tag) => renderTemplate`<a${addAttribute(`/video/tag/${tag}`, "href")} class="badge badge-outline ml-2 no-underline"> ${tag} </a>`)} ${updatedDate && renderTemplate`<div>
Last updated on <time>${updatedDate}</time> </div>`} <div class="divider my-2"></div> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "D:/my-cv/Cv-me/src/layouts/VideoLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const videoEntries = await getCollection("video");
  return videoEntries.map((entry) => ({
    params: { slug: createSlug(entry.data.title, entry.slug) },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const video = entry.data;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "VideoLayout", $$VideoLayout, { "title": video.title, "description": video.description, "pubDate": video.pubDate, "heroImage": video.heroImage, "updatedDate": video.updatedDate, "badge": video.badge, "tags": video.tags }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "D:/my-cv/Cv-me/src/pages/video/[slug].astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/video/[slug].astro";
const $$url = "/video/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
