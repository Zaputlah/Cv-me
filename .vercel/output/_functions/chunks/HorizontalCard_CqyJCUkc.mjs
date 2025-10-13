import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import './index_CYyG6us9.mjs';
import { $ as $$Image } from './_astro_assets_BkjhlY38.mjs';

const $$Astro = createAstro();
const $$HorizontalCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HorizontalCard;
  const {
    title,
    img,
    desc,
    url,
    badge,
    tags,
    customTag,
    target = "_blank"
  } = Astro2.props;
  const tag_url = url.split("/").slice(0, -1).join("/") + "/tag";
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "width": 750, "height": 422, "format": "webp", "alt": title, "class": "max-w-full md:max-w-[13rem] rounded-lg" })}`} <div class="grow w-full"> <h1 class="text-xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h1> <p class="py-1 text-1xl">${desc}</p> <p class="py-1 text-1xl">${customTag}</p> <div class="card-actions justify-end"> ${tags && tags.map((tag) => renderTemplate`<a${addAttribute(`${tag_url}/${tag}`, "href")} class="badge badge-outline"> ${tag} </a>`)} </div> </div> </div> </a> </div>`;
}, "D:/my-cv/Cv-me/src/components/HorizontalCard.astro", void 0);

export { $$HorizontalCard as $ };
