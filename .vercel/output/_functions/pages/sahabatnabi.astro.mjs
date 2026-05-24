/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript, d as addAttribute } from '../chunks/astro/server_BRzQfmCI.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CKft6Hqk.mjs';
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

const $$Sahabatnabi = createComponent(($$result, $$props, $$slots) => {
  const totalKelebihan = sahabatData.reduce(
    (total, item) => total + item.kelebihan.length,
    0
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sahabat Nabi", "sideBarActiveItemID": "sahabatnabi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="space-y-8 pb-10"> <div class="space-y-4"> <p class="text-sm font-semibold uppercase tracking-wider text-blue-700">
Edukasi Islami
</p> <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"> <div> <h1 class="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
Sahabat Nabi
</h1> <p class="mt-3 max-w-2xl text-base leading-7 text-gray-600">
Kenali para sahabat Rasulullah SAW melalui ringkasan keutamaan,
            peran, dan teladan yang bisa dipelajari.
</p> </div> </div> </div> <div class="grid gap-3 border-y border-gray-200 py-5 sm:grid-cols-3"> <div> <p class="text-2xl font-bold text-gray-950">${sahabatData.length}</p> <p class="mt-1 text-sm text-gray-500">Sahabat</p> </div> <div> <p class="text-2xl font-bold text-gray-950">${totalKelebihan}</p> <p class="mt-1 text-sm text-gray-500">Ringkasan keutamaan</p> </div> <div> <p class="text-2xl font-bold text-gray-950">Akhlak</p> <p class="mt-1 text-sm text-gray-500">Ilmu, keberanian, amanah</p> </div> </div> <div class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"> <label for="searchInput" class="sr-only">Cari sahabat Nabi</label> <div class="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"> <i class="fa-solid fa-magnifying-glass text-gray-400"></i> <input type="text" id="searchInput" placeholder="Cari nama sahabat atau keutamaan..." class="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"> </div> </div> </section> <section class="pb-12"> <div id="sahabatList" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"> ${sahabatData.map((item) => renderTemplate`<article class="sahabat-item rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"${addAttribute(`${item.nama.toLowerCase()} ${item.kelebihan.join(" ").toLowerCase()}`, "data-keywords")}> <div class="flex items-start gap-3"> <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700"> ${item.id} </div> <div> <h2 class="text-xl font-bold text-gray-950">${item.nama}</h2> <p class="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
Sahabat Rasulullah
</p> </div> </div> <ul class="mt-4 space-y-2"> ${item.kelebihan.map((kelebihan) => renderTemplate`<li class="flex gap-2 text-sm leading-6 text-gray-600"> <i class="fa-solid fa-check mt-1 text-xs text-blue-600"></i> <span>${kelebihan}</span> </li>`)} </ul> </article>`)} </div> <div id="emptyState" class="hidden rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"> <p class="font-semibold text-gray-900">Data tidak ditemukan</p> <p class="mt-1 text-sm text-gray-500">Coba gunakan kata kunci lain.</p> </div> </section> ${renderScript($$result2, "C:/cvme/Cv-me/src/pages/sahabatnabi.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/cvme/Cv-me/src/pages/sahabatnabi.astro", void 0);

const $$file = "C:/cvme/Cv-me/src/pages/sahabatnabi.astro";
const $$url = "/sahabatnabi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sahabatnabi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
