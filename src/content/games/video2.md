<!-- ---
title: "Sejarah Perang dalam Islam"
description: "Kuis interaktif tentang sejarah peperangan dalam Islam, termasuk tokoh, strategi, dan dampaknya dalam perkembangan Islam."
pubDate: "2025-03-21"
heroImage: ""
[
  "Islam",
  "Sejarah",
  "Perang Islam",
  "Kuis Sejarah Islam",
  "Sahabat Nabi",
  "Pendidikan Islam",
  "Trivia Islam",
  "Pengetahuan Umum Islam",
  "Ujian Islam",
  "Edukasi Islam",
  "21 Maret",
  "2025",
  "Maret 2025",
  "Zaputlah",
  "Sirah Nabawiyah",
  "Jihad Fii Sabilillah",
  "Strategi Perang Islam",
  "Khalid bin Walid",
  "Perang Badar",
  "Perang Uhud",
  "Perang Khandaq",
  "Perang Tabuk",
  "Perang Hunain",
  "Fathul Makkah",
  "Khilafah Islamiyah",
  "Sejarah Khulafaur Rasyidin",
  "Perang Salib",
  "Dinasti Umayyah",
  "Dinasti Abbasiyah",
  "Perang di Andalusia",
  "Perang melawan Mongol",
  "Panglima Islam",
  "Kehebatan Pasukan Muslim",
  "Sejarah Kejayaan Islam",
  "Penaklukan Konstantinopel",
  "Shalahuddin Al-Ayyubi",
  "Muhammad Al-Fatih",
  "Perang Islam vs Romawi",
  "Perang Islam vs Persia"
]

---
<script>
        let currentQuestion = 0;
        let score = 0;

      const questions = [
    { 
        question: "Perang pertama dalam sejarah Islam yang terjadi antara kaum Muslim dan Quraisy disebut?", 
        options: ["Perang Uhud", "Perang Badr", "Perang Khandak", "Perang Hunain"],
        answer: 1
    },
    { 
        question: "Siapakah pemimpin pasukan Quraisy dalam Perang Badr?", 
        options: ["Abu Jahal", "Abu Sufyan رضي الله عنه", "Abu Lahab", "Utbah bin Rabi’ah رضي الله عنه"],
        answer: 0
    },
    { 
        question: "Berapa jumlah pasukan Muslim dalam Perang Badr dibandingkan dengan pasukan Quraisy?", 
        options: ["313 vs 1000", "500 vs 1500", "700 vs 2000", "1000 vs 3000"],
        answer: 0
    },
    { 
        question: "Apa penyebab utama kekalahan Muslim dalam Perang Uhud?", 
        options: [
            "Jumlah pasukan lebih sedikit", 
            "Prajurit pemanah meninggalkan pos di bukit", 
            "Kelelahan pasukan Muslim", 
            "Strategi Quraisy terlalu kuat"
        ],
        answer: 1
    },
    { 
        question: "Siapakah pahlawan Islam yang gugur dalam Perang Uhud?", 
        options: ["Hamzah bin Abdul Muttalib رضي الله عنه", "Bilal bin Rabah رضي الله عنه", "Khalid bin Walid رضي الله عنه", "Zaid bin Haritsah رضي الله عنه"],
        answer: 0
    },
    { 
        question: "Perang Khandak dikenal juga dengan nama?", 
        options: ["Perang Kota", "Perang Parit", "Perang Bukit", "Perang Tenda"],
        answer: 1
    },
    { 
        question: "Siapa yang mengusulkan strategi parit dalam Perang Khandak?", 
        options: ["Ali bin Abi Thalib رضي الله عنه", "Umar bin Khattab رضي الله عنه", "Salman Al-Farisi رضي الله عنه", "Zubair bin Awwam رضي الله عنه"],
        answer: 2
    },
    { 
        question: "Perang Khandak terjadi akibat serangan dari?", 
        options: ["Romawi", "Yahudi Bani Quraizhah", "Kaum Quraisy dan sekutunya", "Persia"],
        answer: 2
    },
    { 
        question: "Setelah Perang Khandak, kaum Muslimin membuat perjanjian dengan Quraisy yang disebut?", 
        options: ["Perjanjian Aqabah", "Perjanjian Hudaibiyah", "Perjanjian Fathu Makkah", "Perjanjian Tabuk"],
        answer: 1
    },
    { 
        question: "Perang apa yang membuka jalan bagi kaum Muslim untuk menaklukkan Makkah?", 
        options: ["Perang Hunain", "Perang Khaibar", "Fathu Makkah", "Perang Tabuk"],
        answer: 2
    },
    { 
        question: "Apa yang dilakukan Nabi Muhammad ﷺ setelah menaklukkan Makkah?", 
        options: ["Membakar Ka'bah", "Mengusir seluruh penduduk Makkah", "Mengampuni kaum Quraisy", "Menyatakan perang kepada Quraisy"],
        answer: 2
    },
    { 
        question: "Perang Hunain terjadi antara kaum Muslimin dan suku?", 
        options: ["Bani Nadir", "Hawazin dan Tsaqif", "Bani Qainuqa", "Bani Quraizhah"],
        answer: 1
    },
    { 
        question: "Siapa yang memimpin pasukan Muslim dalam Perang Hunain?", 
        options: ["Khalid bin Walid رضي الله عنه", "Ali bin Abi Thalib رضي الله عنه", "Nabi Muhammad ﷺ", "Zaid bin Haritsah رضي الله عنه"],
        answer: 2
    },
    { 
        question: "Perang terakhir yang dipimpin oleh Rasulullah ﷺ adalah?", 
        options: ["Perang Badr", "Perang Tabuk", "Perang Uhud", "Perang Khaibar"],
        answer: 1
    },
    { 
        question: "Dalam Perang Tabuk, pasukan Muslim berhadapan dengan?", 
        options: ["Kaum Yahudi", "Pasukan Persia", "Pasukan Romawi", "Kaum Quraisy"],
        answer: 2
    },
    { 
        question: "Apa tujuan utama Perang Tabuk?", 
        options: [
            "Menaklukkan Makkah", 
            "Menghancurkan suku Quraisy", 
            "Menghadapi ancaman dari Romawi", 
            "Mengusir Yahudi dari Madinah"
        ],
        answer: 2
    },
    { 
        question: "Dalam Perang Mu'tah, berapa jumlah pasukan Muslim dibandingkan dengan pasukan Romawi?", 
        options: ["3000 vs 10000", "3000 vs 200000", "10000 vs 50000", "15000 vs 70000"],
        answer: 1
    },
    { 
        question: "Siapa yang menjadi pemimpin pertama pasukan Muslim dalam Perang Mu'tah?", 
        options: ["Khalid bin Walid رضي الله عنه", "Zaid bin Haritsah رضي الله عنه", "Ja'far bin Abi Thalib رضي الله عنه", "Abdullah bin Rawahah رضي الله عنه"],
        answer: 1
    },
    { 
        question: "Setelah Zaid bin Haritsah رضي الله عنه gugur di Perang Mu'tah, siapa yang menggantikannya?", 
        options: ["Ja'far bin Abi Thalib رضي الله عنه", "Abu Ubaidah bin Jarrah رضي الله عنه", "Sa'ad bin Abi Waqqas رضي الله عنه", "Abdurrahman bin Auf رضي الله عنه"],
        answer: 0
    },
    { 
        question: "Siapa yang dijuluki 'Pedang Allah yang Terhunus' setelah memimpin Perang Mu'tah?", 
        options: ["Ali bin Abi Thalib رضي الله عنه", "Sa'ad bin Abi Waqqas رضي الله عنه", "Khalid bin Walid رضي الله عنه", "Umar bin Khattab رضي الله عنه"],
        answer: 2
    }
];


function loadQuestion() {
    if (currentQuestion >= questions.length) {
        let feedback = "";
        if (score === questions.length * 5) {
            feedback = "Pemahamanmu tentang Sejarah Perang dalam Islam sangat baik sekali!";
        } else if (score >= (questions.length * 4)) {
            feedback = "Pemahamanmu tentang Sejarah Perang dalam Islam baik!";
        } else if (score >= (questions.length * 3)) {
            feedback = "Pemahamanmu tentang Sejarah Perang dalam Islam cukup.";
        } else if (score >= (questions.length * 2)) {
            feedback = "Pemahamanmu tentang Sejarah Perang dalam Islam kurang.";
        } else {
            feedback = "Pemahamanmu tentang Sejarah Perang dalam Islam sangat kurang.";
        }

        document.getElementById("quiz").innerHTML = `
            <h2>Skor Akhir: ${score}</h2>
            <p>${feedback}</p>
            <div style="display: flex; justify-content: center; margin-top: 20px;">
            <button onclick="restartQuiz()" style="padding: 10px 20px; font-size: 16px; border: none; background-color: #4CAF50; color: white; cursor: pointer; border-radius: 5px;">
                Restart Kuis
            </button>
    </div>
        `;
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    let optionsHtml = "";
    q.options.forEach((option, index) => {
        optionsHtml += `<div class='option' onclick='checkAnswer(${index}, this)' style='padding: 10px; margin: 5px 0; border-radius: 5px; text-align: center; cursor: pointer; background-color: #f0f0f0; border: 1px solid #ccc;'>${option}</div>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
}

function checkAnswer(selected, element) {
    let correctAnswer = questions[currentQuestion].answer;
    let options = document.querySelectorAll(".option");

    options.forEach(opt => opt.style.pointerEvents = "none"); // Disable clicking after selection
    
    if (selected === correctAnswer) {
        element.style.backgroundColor = "#4CAF50"; // Warna hijau untuk jawaban benar
        element.style.color = "white";
        score += 5;
    } else {
        element.style.backgroundColor = "#f44336"; // Warna merah untuk jawaban salah
        element.style.color = "white";
        options[correctAnswer].style.backgroundColor = "#4CAF50"; // Warna hijau untuk jawaban benar
        options[correctAnswer].style.color = "white";
    }
    
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 2000); // Tambah jeda agar jawaban benar terlihat lebih lama
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    // Kembalikan elemen kuis ke format awal
    document.getElementById("quiz").innerHTML = `
        <h2 id="question"></h2>
        <div id="options"></div>
    `;

    loadQuestion();
}


document.addEventListener("DOMContentLoaded", loadQuestion);

    </script>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; margin: 0;">
    <div id="quiz" style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); width: 400px; text-align: center;display: contents;">
        <div id="question" style="font-size: 18px; font-weight: bold; margin-bottom: 20px;"></div>
        <div id="options"></div>
    </div>
    <script>loadQuestion();</script>
</body>
 -->
