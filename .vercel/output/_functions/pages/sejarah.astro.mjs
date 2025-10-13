/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_ed-aK6O1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DKlzkahM.mjs';
export { renderers } from '../renderers.mjs';

const sejarahData = [
	{
		id: 1,
		periode: "Kerajaan Hindu-Buddha",
		tahun: "Abad ke-4 – Abad ke-15",
		peristiwa: "Munculnya kerajaan-kerajaan seperti Kutai, Tarumanegara, Sriwijaya, dan Majapahit.",
		tokoh: [
			"Raja Mulawarman",
			"Raja Purnawarman",
			"Gajah Mada",
			"Hayam Wuruk"
		]
	},
	{
		id: 2,
		periode: "Kerajaan Islam",
		tahun: "Abad ke-13 – Abad ke-18",
		peristiwa: "Penyebaran Islam melalui jalur perdagangan, munculnya kerajaan seperti Samudra Pasai, Demak, dan Mataram Islam.",
		tokoh: [
			"Sultan Malik Al Saleh",
			"Sunan Kalijaga",
			"Sultan Agung"
		]
	},
	{
		id: 3,
		periode: "Penjajahan Portugis dan Belanda",
		tahun: "1509 – 1942",
		peristiwa: "Kedatangan bangsa Eropa ke Nusantara, monopoli perdagangan, perlawanan rakyat terhadap kolonialisme.",
		tokoh: [
			"Pangeran Diponegoro",
			"Tuanku Imam Bonjol",
			"Cut Nyak Dhien"
		]
	},
	{
		id: 4,
		periode: "Penjajahan Jepang",
		tahun: "1942 – 1945",
		peristiwa: "Pendudukan Jepang selama Perang Dunia II, penderitaan rakyat, pembentukan PETA.",
		tokoh: [
			"Sukarno",
			"Moh. Hatta",
			"Sutan Sjahrir"
		]
	},
	{
		id: 5,
		periode: "Proklamasi dan Revolusi",
		tahun: "1945 – 1949",
		peristiwa: "Proklamasi Kemerdekaan 17 Agustus 1945, Agresi Militer Belanda, pengakuan kedaulatan.",
		tokoh: [
			"Sukarno",
			"Moh. Hatta",
			"Jenderal Sudirman"
		]
	},
	{
		id: 6,
		periode: "Orde Lama dan Orde Baru",
		tahun: "1950 – 1998",
		peristiwa: "Demokrasi parlementer, pemberontakan DI/TII, G30S/PKI, pemerintahan Soeharto.",
		tokoh: [
			"Sukarno",
			"Soeharto",
			"BJ Habibie"
		]
	},
	{
		id: 7,
		periode: "Reformasi dan Era Modern",
		tahun: "1998 – Sekarang",
		peristiwa: "Reformasi 1998, pemilu langsung, perkembangan demokrasi dan teknologi.",
		tokoh: [
			"Gus Dur",
			"Megawati",
			"Susilo Bambang Yudhoyono",
			"Joko Widodo"
		]
	},
	{
		id: 8,
		periode: "Perang Diponegoro",
		tahun: "1825 – 1830",
		peristiwa: "Perlawanan besar terhadap penjajahan Belanda yang dipimpin oleh Pangeran Diponegoro di Jawa.",
		tokoh: [
			"Pangeran Diponegoro",
			"Jenderal De Kock"
		]
	},
	{
		id: 9,
		periode: "Kebangkitan Nasional",
		tahun: "1908 – 1920-an",
		peristiwa: "Lahirnya organisasi modern seperti Budi Utomo, munculnya kesadaran nasional dan semangat persatuan.",
		tokoh: [
			"Dr. Soetomo",
			"Wahidin Soedirohoesodo"
		]
	},
	{
		id: 10,
		periode: "Sumpah Pemuda",
		tahun: "28 Oktober 1928",
		peristiwa: "Kongres Pemuda II yang menghasilkan Sumpah Pemuda, tonggak penting semangat persatuan bangsa Indonesia.",
		tokoh: [
			"Muhammad Yamin",
			"Soegondo Djojopoespito",
			"Wage Rudolf Supratman"
		]
	},
	{
		id: 11,
		periode: "Pertempuran Surabaya",
		tahun: "10 November 1945",
		peristiwa: "Pertempuran besar antara rakyat Surabaya dan tentara Sekutu yang diperingati sebagai Hari Pahlawan.",
		tokoh: [
			"Bung Tomo",
			"Arek Suroboyo"
		]
	},
	{
		id: 12,
		periode: "Konferensi Meja Bundar (KMB)",
		tahun: "1949",
		peristiwa: "Perundingan yang menghasilkan pengakuan kedaulatan Indonesia oleh Belanda.",
		tokoh: [
			"Moh. Hatta",
			"Van Roijen",
			"Dr. Soekiman"
		]
	},
	{
		id: 13,
		periode: "Pembentukan TNI",
		tahun: "1945 – 1947",
		peristiwa: "Penggabungan laskar dan BKR menjadi Tentara Nasional Indonesia.",
		tokoh: [
			"Jenderal Sudirman",
			"Urip Sumohardjo"
		]
	},
	{
		id: 14,
		periode: "Konferensi Asia Afrika",
		tahun: "1955",
		peristiwa: "Pertemuan negara-negara Asia dan Afrika di Bandung yang menentang kolonialisme.",
		tokoh: [
			"Sukarno",
			"Jawaharlal Nehru",
			"Gamal Abdel Nasser"
		]
	},
	{
		id: 15,
		periode: "Pembentukan Gerakan Non-Blok",
		tahun: "1961",
		peristiwa: "Indonesia menjadi salah satu pendiri Gerakan Non-Blok untuk menjaga netralitas di era Perang Dingin.",
		tokoh: [
			"Sukarno",
			"Josip Broz Tito",
			"Gamal Abdel Nasser"
		]
	},
	{
		id: 16,
		periode: "Konfrontasi Indonesia-Malaysia",
		tahun: "1963 – 1966",
		peristiwa: "Penolakan Indonesia atas pembentukan Federasi Malaysia yang dianggap proyek neo-kolonial.",
		tokoh: [
			"Sukarno",
			"Jenderal Nasution"
		]
	},
	{
		id: 17,
		periode: "G30S/PKI",
		tahun: "1965",
		peristiwa: "Gerakan 30 September yang menewaskan jenderal-jenderal TNI dan dituduhkan dilakukan oleh PKI.",
		tokoh: [
			"Letjen Suharto",
			"DN Aidit",
			"Jenderal Ahmad Yani"
		]
	},
	{
		id: 18,
		periode: "Supersemar",
		tahun: "11 Maret 1966",
		peristiwa: "Surat Perintah Sebelas Maret yang memberi kekuasaan kepada Soeharto dari Presiden Sukarno.",
		tokoh: [
			"Sukarno",
			"Soeharto"
		]
	},
	{
		id: 19,
		periode: "Pembangunan Orde Baru",
		tahun: "1970-an – 1998",
		peristiwa: "Pembangunan nasional dengan program REPELITA, pertumbuhan ekonomi tinggi, tapi juga otoritarianisme.",
		tokoh: [
			"Soeharto",
			"BJ Habibie",
			"Widjojo Nitisastro"
		]
	},
	{
		id: 20,
		periode: "Krisis Moneter",
		tahun: "1997 – 1998",
		peristiwa: "Krisis ekonomi yang melanda Asia, memicu kerusuhan dan berujung pada lengsernya Presiden Soeharto.",
		tokoh: [
			"Soeharto",
			"Amien Rais",
			"BJ Habibie"
		]
	},
	{
		id: 21,
		periode: "Reformasi Awal",
		tahun: "1998 – 1999",
		peristiwa: "Masa transisi setelah lengsernya Soeharto dengan penguatan demokrasi dan kebebasan pers.",
		tokoh: [
			"BJ Habibie",
			"Amien Rais",
			"Gus Dur"
		]
	},
	{
		id: 22,
		periode: "Era Gus Dur",
		tahun: "1999 – 2001",
		peristiwa: "Kepemimpinan Abdurrahman Wahid yang membawa reformasi di bidang HAM dan militer, meski berujung pemakzulan.",
		tokoh: [
			"Abdurrahman Wahid",
			"Megawati Soekarnoputri",
			"Amien Rais"
		]
	},
	{
		id: 23,
		periode: "Kepemimpinan Megawati",
		tahun: "2001 – 2004",
		peristiwa: "Masa pemerintahan Megawati Soekarnoputri dengan tantangan stabilitas ekonomi dan politik.",
		tokoh: [
			"Megawati Soekarnoputri",
			"Hamzah Haz",
			"Susilo Bambang Yudhoyono"
		]
	},
	{
		id: 24,
		periode: "Pemilu Langsung Pertama",
		tahun: "2004",
		peristiwa: "Pemilihan presiden pertama secara langsung oleh rakyat yang dimenangkan oleh Susilo Bambang Yudhoyono.",
		tokoh: [
			"Susilo Bambang Yudhoyono",
			"Jusuf Kalla",
			"Megawati Soekarnoputri"
		]
	},
	{
		id: 25,
		periode: "Pemerintahan SBY Jilid I",
		tahun: "2004 – 2009",
		peristiwa: "Fokus pada penanganan terorisme, bencana alam besar seperti tsunami Aceh, dan pertumbuhan ekonomi.",
		tokoh: [
			"Susilo Bambang Yudhoyono",
			"Jusuf Kalla",
			"Sri Mulyani"
		]
	},
	{
		id: 26,
		periode: "Pemerintahan SBY Jilid II",
		tahun: "2009 – 2014",
		peristiwa: "Melanjutkan pembangunan infrastruktur, reformasi birokrasi, dan pendidikan.",
		tokoh: [
			"Susilo Bambang Yudhoyono",
			"Boediono",
			"Agus Martowardojo"
		]
	},
	{
		id: 27,
		periode: "Awal Kepemimpinan Jokowi",
		tahun: "2014 – 2019",
		peristiwa: "Joko Widodo memulai era baru kepemimpinan dengan fokus pembangunan infrastruktur dan reformasi pelayanan publik.",
		tokoh: [
			"Joko Widodo",
			"Jusuf Kalla",
			"Basuki Tjahaja Purnama"
		]
	},
	{
		id: 28,
		periode: "Pemilu 2019",
		tahun: "2019",
		peristiwa: "Pemilu serentak yang mempertemukan kembali Jokowi dengan Prabowo dalam kontestasi politik nasional.",
		tokoh: [
			"Joko Widodo",
			"Prabowo Subianto",
			"Ma’ruf Amin"
		]
	},
	{
		id: 29,
		periode: "Pandemi COVID-19",
		tahun: "2020 – 2022",
		peristiwa: "Pandemi global yang berdampak besar pada kesehatan, ekonomi, dan pendidikan di Indonesia.",
		tokoh: [
			"Joko Widodo",
			"Terawan Agus Putranto",
			"Airlangga Hartarto"
		]
	},
	{
		id: 30,
		periode: "Pemindahan Ibu Kota Negara",
		tahun: "2022 – Sekarang",
		peristiwa: "Proyek pemindahan ibu kota dari Jakarta ke Ibu Kota Nusantara (IKN) di Kalimantan Timur.",
		tokoh: [
			"Joko Widodo",
			"Bambang Susantono",
			"Basuki Hadimuljono"
		]
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Sejarah = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sejarah Indonesia", "sideBarActiveItemID": "sejarah" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="text-left mb-6 px-4"> <h2 class="text-4xl font-extrabold text-blue-700 mb-2">Periode Sejarah Indonesia</h2> <p class="text-gray-600 mb-4 text-lg">Pelajari tonggak-tonggak sejarah penting dalam perjalanan bangsa Indonesia.</p> <input type="text" id="searchInput" placeholder="Cari berdasarkan periode, tahun, peristiwa atau tokoh..." class="w-full sm:w-1/2 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition duration-200"> </div> <div id="sejarahList" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mb-12"> ', ` </div> <script type="module" is:client>
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.sejarah-item');

    input.addEventListener('input', () => {
      const search = input.value.toLowerCase();
      items.forEach((item) => {
        const keywords = item.getAttribute('data-keywords');
        item.style.display = keywords.includes(search) ? 'block' : 'none';
      });
    });
  <\/script> `])), maybeRenderHead(), sejarahData.map((item) => renderTemplate`<div class="sejarah-item bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300 overflow-hidden flex flex-col"${addAttribute(`${item.periode.toLowerCase()} ${item.tahun.toLowerCase()} ${item.peristiwa.toLowerCase()} ${item.tokoh.join(" ").toLowerCase()}`, "data-keywords")}> <div class="p-5 flex-1 flex flex-col justify-between"> <div> <h3 class="text-xl font-semibold text-blue-800 mb-2">${item.periode}</h3> <p class="text-sm text-gray-500 mb-2">${item.tahun}</p> <p class="text-gray-700 text-sm italic mb-3">"${item.peristiwa}"</p> </div> <div class="text-sm text-gray-500 mt-2 border-t pt-2"> <p><span class="font-medium text-gray-600">Tokoh terkait:</span> ${item.tokoh.join(", ")}</p> </div> </div> </div>`)) })}`;
}, "D:/my-cv/Cv-me/src/pages/sejarah.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/sejarah.astro";
const $$url = "/sejarah";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sejarah,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
