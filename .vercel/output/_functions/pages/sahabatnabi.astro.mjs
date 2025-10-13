/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BseMOw_E.mjs';
export { renderers } from '../renderers.mjs';

const sahabatData = [
	{
		id: 1,
		nama: "Abu Bakar Ash-Shiddiq",
		kelebihan: [
			"Sahabat pertama yang masuk Islam dari kalangan dewasa",
			"Mendampingi Rasulullah saat hijrah ke Madinah",
			"Khalifah pertama setelah wafatnya Rasulullah",
			"Dikenal karena kejujuran dan keteguhannya dalam iman"
		]
	},
	{
		id: 2,
		nama: "Umar bin Khattab",
		kelebihan: [
			"Khalifah kedua yang memperluas wilayah Islam secara signifikan",
			"Dikenal karena keadilan dan ketegasan",
			"Masuk Islam setelah mendengar bacaan Al-Qur’an",
			"Penuh wibawa dan ditakuti oleh musuh Islam"
		]
	},
	{
		id: 3,
		nama: "Utsman bin Affan",
		kelebihan: [
			"Khalifah ketiga yang menggandakan mushaf Al-Qur'an dan menyebarkannya",
			"Dermawan yang membiayai pasukan Perang Tabuk",
			"Menikah dengan dua putri Nabi secara berurutan (Dzun Nurain)",
			"Pemalu dan penuh kesopanan"
		]
	},
	{
		id: 4,
		nama: "Ali bin Abi Thalib",
		kelebihan: [
			"Khalifah keempat dan juga sepupu sekaligus menantu Nabi",
			"Pejuang tangguh dan sangat cerdas",
			"Dikenal karena ilmu dan keberaniannya",
			"Termasuk orang pertama yang masuk Islam dari kalangan anak-anak"
		]
	},
	{
		id: 5,
		nama: "Bilal bin Rabah",
		kelebihan: [
			"Muadzin pertama dalam Islam",
			"Memiliki suara merdu dan penuh penghayatan",
			"Tegar menghadapi siksaan karena keimanannya",
			"Disayangi Rasulullah karena kesetiaannya"
		]
	},
	{
		id: 6,
		nama: "Khalid bin Walid",
		kelebihan: [
			"Dikenal sebagai 'Pedang Allah yang Terhunus'",
			"Komandan militer yang tidak pernah kalah dalam pertempuran",
			"Ahli strategi perang yang luar biasa",
			"Masuk Islam setelah Perjanjian Hudaibiyah"
		]
	},
	{
		id: 7,
		nama: "Saad bin Abi Waqqas",
		kelebihan: [
			"Termasuk 10 sahabat yang dijamin masuk surga",
			"Doanya selalu dikabulkan",
			"Pemanah ulung dalam peperangan",
			"Panglima dalam penaklukan Persia"
		]
	},
	{
		id: 8,
		nama: "Abdurrahman bin Auf",
		kelebihan: [
			"Sahabat yang sangat dermawan",
			"Pebisnis sukses yang selalu membantu perjuangan Islam",
			"Termasuk 10 sahabat yang dijamin masuk surga",
			"Selalu mendahulukan orang lain dalam kebaikan"
		]
	},
	{
		id: 9,
		nama: "Abu Ubaidah bin Al-Jarrah",
		kelebihan: [
			"Termasuk 10 sahabat yang dijamin masuk surga",
			"Dikenal sebagai penjaga amanah umat (Aminul Ummah)",
			"Pemimpin pasukan Islam dalam banyak pertempuran penting",
			"Teladan dalam kejujuran, kesederhanaan, dan kepemimpinan"
		]
	},
	{
		id: 10,
		nama: "Zubair bin Awwam",
		kelebihan: [
			"Sepupu Rasulullah dan termasuk 10 sahabat yang dijamin masuk surga",
			"Pejuang gagah berani dalam setiap peperangan",
			"Salah satu pelindung Nabi saat Perang Uhud",
			"Termasuk sahabat pertama yang masuk Islam"
		]
	},
	{
		id: 11,
		nama: "Thalhah bin Ubaidillah",
		kelebihan: [
			"Termasuk 10 sahabat yang dijamin masuk surga",
			"Melindungi Nabi saat Perang Uhud hingga tubuhnya terluka parah",
			"Dikenal sangat dermawan dan suka membantu sesama",
			"Ahli dalam berdagang namun tetap zuhud"
		]
	},
	{
		id: 12,
		nama: "Salman Al-Farisi",
		kelebihan: [
			"Ahli strategi yang mengusulkan penggalian parit pada Perang Khandaq",
			"Pencari kebenaran yang berpindah agama sebelum menemukan Islam",
			"Dicintai Nabi karena ketakwaannya",
			"Contoh dari perjuangan mencari iman sejati"
		]
	},
	{
		id: 13,
		nama: "Hudzaifah bin Al-Yaman",
		kelebihan: [
			"Sahabat kepercayaan Nabi dalam menjaga rahasia-rahasia penting",
			"Dikenal sebagai penjaga rahasia munafik",
			"Memiliki kecerdasan luar biasa dalam memahami situasi sosial-politik",
			"Pejuang dalam berbagai pertempuran besar"
		]
	},
	{
		id: 14,
		nama: "Abu Hurairah",
		kelebihan: [
			"Periwayat hadits terbanyak dalam Islam",
			"Sangat dekat dengan Rasulullah dan senantiasa bersama beliau",
			"Memiliki hafalan yang sangat kuat",
			"Bersahabat dengan Nabi dalam berbagai kesempatan dakwah"
		]
	},
	{
		id: 15,
		nama: "Muadz bin Jabal",
		kelebihan: [
			"Dikenal sebagai sahabat yang paling tahu tentang halal dan haram",
			"Utusan Nabi ke Yaman sebagai guru dan pemimpin",
			"Ahli ilmu dan sangat cerdas",
			"Dicintai Nabi dan didoakan khusus oleh beliau"
		]
	},
	{
		id: 16,
		nama: "Anas bin Malik",
		kelebihan: [
			"Pelayan pribadi Rasulullah selama 10 tahun",
			"Periwayat hadits yang terpercaya",
			"Didoakan oleh Rasul agar diberi umur panjang dan banyak keturunan",
			"Dekat dengan keluarga Nabi"
		]
	},
	{
		id: 17,
		nama: "Usamah bin Zaid",
		kelebihan: [
			"Pemuda yang ditunjuk Nabi sebagai panglima pasukan ke Syam",
			"Putra Zaid bin Haritsah, sangat disayangi oleh Nabi",
			"Teladan bagi generasi muda Islam",
			"Memiliki akhlak yang mulia dan pemberani"
		]
	},
	{
		id: 18,
		nama: "Sa’id bin Zaid",
		kelebihan: [
			"Termasuk dalam 10 sahabat yang dijamin masuk surga",
			"Sahabat yang sangat setia dan gigih dalam membela Islam",
			"Menikah dengan Fatimah binti Al-Khattab, saudari Umar bin Khattab",
			"Berperan penting dalam Perang Yarmuk"
		]
	},
	{
		id: 19,
		nama: "Ammar bin Yasir",
		kelebihan: [
			"Sahabat yang sabar dalam menghadapi penyiksaan karena keimanannya",
			"Dijamin masuk surga oleh Nabi",
			"Pejuang pemberani yang ikut dalam banyak pertempuran",
			"Keluarganya adalah keluarga syuhada pertama dalam Islam"
		]
	},
	{
		id: 20,
		nama: "Abdullah bin Mas'ud",
		kelebihan: [
			"Ahli dalam bacaan dan penafsiran Al-Qur’an",
			"Sahabat awal yang masuk Islam dan dekat dengan Nabi",
			"Dikenal sangat sederhana dan rendah hati",
			"Periwayat hadits dan guru generasi tabi’in"
		]
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Sahabatnabi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sahabat Nabi", "sideBarActiveItemID": "sahabatnabi" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="text-left mb-6 px-4"> <h2 class="text-4xl font-extrabold text-blue-700 mb-2">Para Sahabat Nabi</h2> <p class="text-gray-600 mb-4 text-lg">Pelajari para sahabat Rasulullah SAW dan keutamaan mereka dalam Islam.</p> <input type="text" id="searchInput" placeholder="Cari berdasarkan nama atau kelebihan..." class="w-full sm:w-1/2 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition duration-200"> </div> <div id="sahabatList" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mb-12"> ', ` </div> <script type="module" is:client>
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.sahabat-item');

    input.addEventListener('input', () => {
      const search = input.value.toLowerCase();
      items.forEach((item) => {
        const keywords = item.getAttribute('data-keywords');
        item.style.display = keywords.includes(search) ? 'block' : 'none';
      });
    });
  <\/script> `])), maybeRenderHead(), sahabatData.map((item) => renderTemplate`<div class="sahabat-item bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300 overflow-hidden flex flex-col"${addAttribute(`${item.nama.toLowerCase()} ${item.kelebihan.join(" ").toLowerCase()}`, "data-keywords")}> <div class="p-5 flex-1 flex flex-col justify-between"> <div> <h3 class="text-xl font-semibold text-blue-800 mb-2">${item.nama}</h3> <ul class="list-disc pl-5 text-gray-700 text-sm space-y-1"> ${item.kelebihan.map((k, index) => renderTemplate`<li>${k}</li>`)} </ul> </div> </div> </div>`)) })}`;
}, "D:/my-cv/Cv-me/src/pages/sahabatnabi.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/sahabatnabi.astro";
const $$url = "/sahabatnabi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sahabatnabi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
