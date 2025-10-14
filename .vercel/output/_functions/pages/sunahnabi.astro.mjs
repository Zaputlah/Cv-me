/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DJ5VsFU4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C8pmW2BQ.mjs';
export { renderers } from '../renderers.mjs';

const sunahData = [
	{
		id: 1,
		sunnah: "Shalat Tahajud",
		keutamaan: "Mendekatkan diri kepada Allah dan diangkat derajatnya.",
		dalil: "QS. Al-Isra: 79 - 'Dan pada sebagian malam hari bertahajudlah kamu sebagai suatu ibadah tambahan bagimu; mudah-mudahan Tuhanmu mengangkat kamu ke tempat yang terpuji.'"
	},
	{
		id: 2,
		sunnah: "Shalat Dhuha",
		keutamaan: "Dicukupkan rezekinya oleh Allah.",
		dalil: "HR. Tirmidzi - 'Di setiap persendian kalian terdapat sedekah... dua rakaat dhuha mencukupinya.'"
	},
	{
		id: 3,
		sunnah: "Senyum",
		keutamaan: "Bernilai sedekah.",
		dalil: "HR. Tirmidzi - 'Senyummu kepada saudaramu adalah sedekah.'"
	},
	{
		id: 4,
		sunnah: "Makan dengan tangan kanan",
		keutamaan: "Mengikuti adab Nabi.",
		dalil: "HR. Muslim - 'Jika salah seorang di antara kalian makan, maka makanlah dengan tangan kanannya.'"
	},
	{
		id: 5,
		sunnah: "Masuk rumah dengan mengucap salam",
		keutamaan: "Mendatangkan keberkahan dan dijauhkan dari setan.",
		dalil: "QS. An-Nur: 61 - 'Apabila kamu memasuki rumah-rumah, maka ucapkanlah salam...' "
	},
	{
		id: 6,
		sunnah: "Berpuasa Senin dan Kamis",
		keutamaan: "Amalan diperiksa oleh Allah saat berpuasa.",
		dalil: "HR. Tirmidzi - 'Amal perbuatan diangkat pada hari Senin dan Kamis, dan aku senang ketika amalku diangkat aku sedang berpuasa.'"
	},
	{
		id: 7,
		sunnah: "Membaca doa sebelum tidur",
		keutamaan: "Dijaga oleh malaikat dan tidur bernilai ibadah.",
		dalil: "HR. Bukhari - Nabi membaca doa sebelum tidur: 'Bismika Allahumma ahya wa amuut.'"
	},
	{
		id: 8,
		sunnah: "Membaca doa ketika keluar rumah",
		keutamaan: "Dilindungi dari keburukan dan godaan setan.",
		dalil: "HR. Abu Dawud - 'Dengan nama Allah, aku bertawakkal kepada Allah, tidak ada daya dan kekuatan kecuali dengan Allah.'"
	},
	{
		id: 9,
		sunnah: "Berzikir setelah shalat",
		keutamaan: "Menambah pahala dan mendekatkan diri kepada Allah.",
		dalil: "HR. Muslim - 'Barangsiapa membaca Subhanallah 33x, Alhamdulillah 33x, dan Allahu Akbar 33x setelah shalat...' "
	},
	{
		id: 10,
		sunnah: "Menyegerakan berbuka puasa",
		keutamaan: "Mengikuti perintah Nabi dan mendapat keberkahan.",
		dalil: "HR. Bukhari - 'Manusia akan senantiasa dalam kebaikan selama mereka menyegerakan berbuka.'"
	},
	{
		id: 11,
		sunnah: "Mengucap salam saat bertemu",
		keutamaan: "Menyebarkan kasih sayang dan mendapatkan doa keselamatan",
		dalil: "HR. Muslim - 'Kalian tidak akan masuk surga hingga kalian beriman... sebarkan salam di antara kalian.'"
	},
	{
		id: 12,
		sunnah: "Tidur miring ke kanan",
		keutamaan: "Sunnah Nabi dan lebih sehat menurut medis",
		dalil: "HR. Bukhari - Nabi tidur di awal malam dengan berbaring ke sisi kanan."
	},
	{
		id: 13,
		sunnah: "Masuk masjid dengan kaki kanan",
		keutamaan: "Mengikuti adab Nabi dan memohon rahmat",
		dalil: "HR. Muslim - 'Jika salah satu dari kalian masuk masjid, hendaklah mengucapkan: “Allahumma iftah li abwaba rahmatika.”'"
	},
	{
		id: 14,
		sunnah: "Keluar masjid dengan kaki kiri",
		keutamaan: "Mengikuti sunnah dan memohon perlindungan",
		dalil: "HR. Muslim - 'Dan jika keluar, hendaklah membaca: “Allahumma inni as-aluka min fadhlika.”'"
	},
	{
		id: 15,
		sunnah: "Memulai sesuatu dengan basmalah",
		keutamaan: "Mendapat keberkahan dan perlindungan dari setan",
		dalil: "HR. Abu Dawud - 'Setiap perkara penting yang tidak dimulai dengan menyebut nama Allah, maka terputus keberkahannya.'"
	},
	{
		id: 16,
		sunnah: "Mengakhirkan makan sahur",
		keutamaan: "Mengikuti ajaran Nabi dan diberkahi",
		dalil: "HR. Bukhari - 'Bersahurlah kalian, karena dalam sahur terdapat berkah.'"
	},
	{
		id: 17,
		sunnah: "Menjenguk orang sakit",
		keutamaan: "Mendapat doa malaikat dan rahmat Allah",
		dalil: "HR. Muslim - 'Tidaklah seorang Muslim menjenguk Muslim lainnya kecuali akan disambut oleh 70.000 malaikat yang mendoakannya.'"
	},
	{
		id: 18,
		sunnah: "Mengantar jenazah",
		keutamaan: "Mendapat pahala besar seperti dua gunung",
		dalil: "HR. Bukhari - 'Barangsiapa mengikuti jenazah hingga dishalatkan, maka ia mendapatkan satu qirath... seperti gunung Uhud.'"
	},
	{
		id: 19,
		sunnah: "Beristighfar setiap hari",
		keutamaan: "Dosa-dosa diampuni oleh Allah",
		dalil: "HR. Muslim - 'Sesungguhnya aku beristighfar kepada Allah dan bertobat kepada-Nya lebih dari 70 kali sehari.'"
	},
	{
		id: 20,
		sunnah: "Membaca Al-Qur’an setiap hari",
		keutamaan: "Mendapat cahaya di dunia dan syafaat di akhirat",
		dalil: "HR. Muslim - 'Bacalah Al-Qur’an, karena ia akan datang sebagai pemberi syafaat bagi pembacanya di hari kiamat.'"
	},
	{
		id: 21,
		sunnah: "Bersiwak sebelum shalat",
		keutamaan: "Membersihkan mulut dan mendapatkan ridha Allah",
		dalil: "HR. Bukhari - 'Seandainya tidak memberatkan umatku, niscaya aku perintahkan mereka bersiwak setiap hendak shalat.'"
	},
	{
		id: 22,
		sunnah: "Berdoa setelah wudhu",
		keutamaan: "Dibukakan delapan pintu surga",
		dalil: "HR. Muslim - 'Barangsiapa berwudhu lalu berkata: Asyhadu an laa ilaaha illallah... maka dibukakan baginya delapan pintu surga.'"
	},
	{
		id: 23,
		sunnah: "Shalat sunnah rawatib",
		keutamaan: "Dibangunkan rumah di surga",
		dalil: "HR. Muslim - 'Barangsiapa menjaga 12 rakaat sunnah rawatib, maka Allah bangunkan baginya rumah di surga.'"
	},
	{
		id: 24,
		sunnah: "Membaca dzikir pagi dan petang",
		keutamaan: "Dilindungi dari keburukan dunia dan akhirat",
		dalil: "HR. Abu Dawud - 'Barangsiapa membacanya setiap pagi dan sore maka ia tidak akan terkena bahaya.'"
	},
	{
		id: 25,
		sunnah: "Menutup bejana makanan dan air",
		keutamaan: "Menjaga dari gangguan dan penyakit",
		dalil: "HR. Bukhari - 'Tutuplah bejana-bejanamu dan ikatlah tempat minummu...' "
	},
	{
		id: 26,
		sunnah: "Menghadiri majelis ilmu",
		keutamaan: "Dinaungi malaikat dan mendapat rahmat",
		dalil: "HR. Muslim - 'Tidaklah suatu kaum berkumpul dalam salah satu rumah Allah untuk membaca kitab-Nya dan mempelajarinya bersama...' "
	},
	{
		id: 27,
		sunnah: "Bersikap lembut kepada istri dan keluarga",
		keutamaan: "Dicintai Allah dan Rasul-Nya",
		dalil: "HR. Tirmidzi - 'Sebaik-baik kalian adalah yang paling baik kepada keluarganya.'"
	},
	{
		id: 28,
		sunnah: "Memuliakan tamu",
		keutamaan: "Bagian dari iman",
		dalil: "HR. Bukhari - 'Barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tamunya.'"
	},
	{
		id: 29,
		sunnah: "Menjawab bersin dengan doa",
		keutamaan: "Mendapat rahmat Allah",
		dalil: "HR. Bukhari - 'Jika salah seorang dari kalian bersin, hendaklah ia mengucapkan: Alhamdulillah...'"
	},
	{
		id: 30,
		sunnah: "Mengucapkan doa ketika masuk WC",
		keutamaan: "Dilindungi dari gangguan jin",
		dalil: "HR. Bukhari - 'Ya Allah, aku berlindung kepada-Mu dari jin laki-laki dan jin perempuan.'"
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Sunahnabi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sunnah Nabi", "sideBarActiveItemID": "sunahnabi" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="text-left mb-6 px-4"> <h2 class="text-4xl font-extrabold text-blue-700 mb-2">Sunnah Nabi Muhammad SAW</h2> <p class="text-gray-600 mb-4 text-lg">Pelajari sunnah-sunnah Rasulullah SAW beserta keutamaannya dalam kehidupan sehari-hari.</p> <input type="text" id="searchInput" placeholder="Cari berdasarkan nama sunnah, keutamaan, atau dalil..." class="w-full sm:w-1/2 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition duration-200"> </div> <div id="sunahList" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mb-12"> ', ` </div> <script type="module" is:client>
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.sunah-item');

    input.addEventListener('input', () => {
      const search = input.value.toLowerCase();
      items.forEach((item) => {
        const keywords = item.getAttribute('data-keywords');
        item.style.display = keywords.includes(search) ? 'block' : 'none';
      });
    });
  <\/script> `])), maybeRenderHead(), sunahData.map((item) => renderTemplate`<div class="sunah-item bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300 overflow-hidden flex flex-col"${addAttribute(`${item.sunnah.toLowerCase()} ${item.keutamaan.toLowerCase()} ${item.dalil.toLowerCase()}`, "data-keywords")}> <div class="p-5 flex-1 flex flex-col justify-between"> <div> <h3 class="text-xl font-semibold text-blue-800 mb-2">${item.sunnah}</h3> <p class="text-sm text-gray-600 mb-2"><span class="font-semibold">Keutamaan:</span> ${item.keutamaan}</p> <p class="text-sm text-gray-500 italic">"${item.dalil}"</p> </div> </div> </div>`)) })}`;
}, "D:/my-cv/Cv-me/src/pages/sunahnabi.astro", void 0);

const $$file = "D:/my-cv/Cv-me/src/pages/sunahnabi.astro";
const $$url = "/sunahnabi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sunahnabi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
