/* empty css                                         */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../../chunks/astro/server_ed-aK6O1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DKlzkahM.mjs';
import { u as ustadzList } from '../../chunks/ustadzList_n-Xsrgjv.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  return ustadzList.map((ustadz) => ({
    params: { id: ustadz.id }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const ustadz = ustadzList.find((u) => u.id === id);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": ustadz?.name ?? "Ustadz Tidak Ditemukan", "sideBarActiveItemID": "ceramah" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 max-w-3xl mx-auto"> ${ustadz ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <h1 class="text-4xl font-bold mb-4">', '</h1> <p class="mb-6 text-gray-700">', '</p> <details class="mt-6" open> <summary class="cursor-pointer font-semibold text-2xl mb-4 list-none">\nVideo Ceramah\n</summary> <div id="videos-container"', `> <p class="text-gray-500">Sedang memuat video...</p> </div> </details>  <div id="video-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:none; align-items:center; justify-content:center; z-index:1000;"> <div style="position:relative; width:90%; max-width:800px; background:#000; border-radius:12px; overflow:hidden;"> <button id="close-modal" style="position:absolute; top:8px; right:12px; font-size:24px; background:none; border:none; color:white; cursor:pointer;">\xD7</button> <iframe id="modal-iframe" width="100%" style="aspect-ratio:16/9;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe> </div> </div> <script type="module">
  const container = document.getElementById("videos-container");
  const playlists = JSON.parse(container.dataset.playlists || "[]");

  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("modal-iframe");
  const closeBtn = document.getElementById("close-modal");

  closeBtn.onclick = () => {
    modal.style.display = "none";
    iframe.src = "";
  };

  async function fetchAllVideos(playlistId, title) {
    let videos = [];
    let nextPageToken = "";
    const apiBase = "https://v1.nocodeapi.com/zaputlah/yt/OMxOfxHePCGByEOJ/playlistItems";

    do {
      const url = apiBase + "?playlistId=" + playlistId + "&maxResults=50" + (nextPageToken ? "&pageToken=" + nextPageToken : "");
      const res = await fetch(url);
      const data = await res.json();

      const newVideos = (data.items || []).map(item => ({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

      videos = videos.concat(newVideos);
      nextPageToken = data.nextPageToken;

      await new Promise(r => setTimeout(r, 1000)); // Delay 1 detik
    } while (nextPageToken);

    return { title: title, videos: videos };
  }

  async function fetchVideos() {
    const allGroups = [];

    for (const playlist of playlists) {
      const cacheKey = "playlist_" + playlist.id;
      const cacheTimeKey = cacheKey + "_time";
      const cached = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      const isExpired = !cachedTime || (Date.now() - parseInt(cachedTime)) > 3600 * 1000;

      if (cached && !isExpired) {
        try {
          const parsed = JSON.parse(cached);
          allGroups.push(parsed);
          continue;
        } catch (err) {
          console.warn("Cache rusak, fetch ulang...");
        }
      }

      try {
        const group = await fetchAllVideos(playlist.id, playlist.title);
        localStorage.setItem(cacheKey, JSON.stringify(group));
        localStorage.setItem(cacheTimeKey, Date.now().toString());
        allGroups.push(group);
      } catch (err) {
        console.error("Gagal fetch playlist:", playlist.title, err);
        allGroups.push({ title: playlist.title, videos: [], error: true });
      }
    }

    renderVideos(allGroups);
  }

  function renderVideos(allGroups) {
    container.innerHTML = "";

    if (allGroups.length === 0) {
      container.innerHTML = "<p class='text-gray-600'>Tidak ada video.</p>";
      return;
    }

    for (const group of allGroups) {
      const details = document.createElement("details");
      details.className = "border rounded-lg shadow-sm mb-4";
      details.open = true;

      const summary = document.createElement("summary");
      summary.className = "bg-gray-100 px-4 py-3 font-bold text-lg cursor-pointer";
      summary.textContent = group.title;
      details.appendChild(summary);

      const content = document.createElement("div");
      content.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 p-4";

      if (group.error) {
        content.innerHTML = "<p class='text-red-500'>Gagal memuat video.</p>";
      } else {
        const maxVisible = 3;
        const visibleVideos = group.videos.slice(0, maxVisible);
        const hiddenVideos = group.videos.slice(maxVisible);

        for (const video of visibleVideos) {
          const card = createVideoCard(video);
          content.appendChild(card);
        }

        if (hiddenVideos.length > 0) {
          const button = document.createElement("button");
          button.textContent = "Tampilkan Semua (" + group.videos.length + " Video)";
          button.className = "mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold";
          button.onclick = () => {
            for (const video of hiddenVideos) {
              const card = createVideoCard(video);
              content.appendChild(card);
            }
            button.remove(); // hapus tombol setelah diklik
          };
          content.appendChild(button);
        }
      }

      details.appendChild(content);
      container.appendChild(details);
    }
  }

  function createVideoCard(video) {
    const card = document.createElement("div");
    card.className = "rounded-lg shadow border bg-white overflow-hidden cursor-pointer transition hover:shadow-md";

    const img = document.createElement("img");
    img.src = video.thumbnail;
    img.alt = video.title;
    img.className = "w-full aspect-video object-cover";

    const caption = document.createElement("div");
    caption.className = "px-4 py-3 font-medium text-gray-800 text-sm";
    caption.textContent = video.title;

    card.appendChild(img);
    card.appendChild(caption);

    card.onclick = () => {
      iframe.src = "https://www.youtube.com/embed/" + video.videoId + "?autoplay=1";
      modal.style.display = "flex";
    };

    return card;
  }

  fetchVideos();
<\/script> `])), ustadz.name, ustadz.description, addAttribute(JSON.stringify(ustadz.playlistId), "data-playlists")) })}` : renderTemplate`<h1 class="text-center text-2xl mt-10">Ustadz Tidak Ditemukan</h1>`} </div> ` })}`;
}, "D:/my-cv/Cv-me/src/pages/ustadz/[id].astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/ustadz/[id].astro";
const $$url = "/ustadz/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
