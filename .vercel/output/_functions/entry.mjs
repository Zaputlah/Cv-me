import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BG_DW_h2.mjs';
import { manifest } from './manifest_nR9xGP-l.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/screening.astro.mjs');
const _page3 = () => import('./pages/api/search.astro.mjs');
const _page4 = () => import('./pages/audioquran.astro.mjs');
const _page5 = () => import('./pages/blog/tag/_tag_/_---page_.astro.mjs');
const _page6 = () => import('./pages/blog/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog/_---page_.astro.mjs');
const _page8 = () => import('./pages/ceramah.astro.mjs');
const _page9 = () => import('./pages/cv.astro.mjs');
const _page10 = () => import('./pages/pahlawan.astro.mjs');
const _page11 = () => import('./pages/projects.astro.mjs');
const _page12 = () => import('./pages/quran/_nomor_.astro.mjs');
const _page13 = () => import('./pages/quran.astro.mjs');
const _page14 = () => import('./pages/rss.xml.astro.mjs');
const _page15 = () => import('./pages/sahabatnabi.astro.mjs');
const _page16 = () => import('./pages/screeningcv.astro.mjs');
const _page17 = () => import('./pages/sejarah.astro.mjs');
const _page18 = () => import('./pages/store/_slug_.astro.mjs');
const _page19 = () => import('./pages/store/_---page_.astro.mjs');
const _page20 = () => import('./pages/sunahnabi.astro.mjs');
const _page21 = () => import('./pages/tanyaai.astro.mjs');
const _page22 = () => import('./pages/ustadz/_id_.astro.mjs');
const _page23 = () => import('./pages/video/tag/_tag_/_---page_.astro.mjs');
const _page24 = () => import('./pages/video/_slug_.astro.mjs');
const _page25 = () => import('./pages/video/_---page_.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.4_@vercel+functi_23e6fc72d040ff66c070b30ef8e80010/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/screening.ts", _page2],
    ["src/pages/api/search.ts", _page3],
    ["src/pages/audioquran.astro", _page4],
    ["src/pages/blog/tag/[tag]/[...page].astro", _page5],
    ["src/pages/blog/[slug].astro", _page6],
    ["src/pages/blog/[...page].astro", _page7],
    ["src/pages/ceramah.astro", _page8],
    ["src/pages/cv.astro", _page9],
    ["src/pages/pahlawan.astro", _page10],
    ["src/pages/projects.astro", _page11],
    ["src/pages/quran/[nomor].astro", _page12],
    ["src/pages/quran.astro", _page13],
    ["src/pages/rss.xml.js", _page14],
    ["src/pages/sahabatnabi.astro", _page15],
    ["src/pages/screeningCv.astro", _page16],
    ["src/pages/sejarah.astro", _page17],
    ["src/pages/store/[slug].astro", _page18],
    ["src/pages/store/[...page].astro", _page19],
    ["src/pages/sunahnabi.astro", _page20],
    ["src/pages/tanyaAI.astro", _page21],
    ["src/pages/ustadz/[id].astro", _page22],
    ["src/pages/video/tag/[tag]/[...page].astro", _page23],
    ["src/pages/video/[slug].astro", _page24],
    ["src/pages/video/[...page].astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2db44771-b273-4002-a3da-75cc3e708a42",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
