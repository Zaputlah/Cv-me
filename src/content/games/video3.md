<!-- ---
title: "Doa Sehari-hari"
description: "\"Setiap perkara penting yang tidak diawali dengan menyebut nama Allah, maka akan terputus (berkahnya).\" (HR. Abu Dawud, no. 4840 dan Ibnu Majah, no. 1894)"
pubDate: "2025-03-21"
heroImage: ""
tags: [
  "Doa",
  "Zaputlah",
  "Mei",
  "24 Maret",
  "2025",
  "Doa harian",
  "Doa sunnah",
  "Hadits shahih",
  "Islamic reminder",
  "Doa sebelum tidur",
  "Doa bangun tidur",
  "Doa keluar rumah",
  "Doa masuk rumah",
  "Doa sebelum makan",
  "Doa setelah makan",
  "Doa sebelum bepergian",
  "Doa naik kendaraan",
  "Doa perlindungan",
  "Doa rezeki",
  "Doa kesehatan",
  "Doa kesabaran",
  "Doa istiqomah",
  "Doa mohon ampun",
  "Doa dzikir pagi",
  "Doa dzikir petang",
  "Keutamaan doa",
  "Doa dan tawakal",
  "Islamic daily life",
  "Spiritual growth",
  "Motivasi Islami"
]
---  
<script>
        let currentQuestion = 0;
        let score = 0;

     const questions = [
    { 
        question: "Doa apa yang dibaca ketika bangun tidur?", 
        options: [
            "Alhamdulillahil ladzi ahyana ba’da ma amatana wa ilaihin nusyur",
            "Bismillahi tawakkaltu ‘alallah la hawla wa la quwwata illa billah",
            "Rabbi yassir wa la tu’assir, Rabbi tammim bil khair",
            "Allahumma inni as’aluka ilman nafian wa rizqan thayyiban wa ‘amalan mutaqabbalan"
        ],
        answer: 0
    },
    { 
        question: "Apa doa yang dianjurkan sebelum tidur?", 
        options: [
            "Bismika Allahumma amutu wa ahya",
            "Allahumma inni as’aluka ‘afiyah",
            "Rabbi zidni ilma",
            "Allahumma barik lana fi ma razaqtana waqina ‘adzabannar"
        ],
        answer: 0
    },
    { 
        question: "Apa doa yang dibaca ketika masuk kamar mandi?", 
        options: [
            "Allahumma inni as’aluka khairal mawlaji wa khairal makhraji",
            "Allahumma inni a’udzu bika minal khubutsi wal khaba’its",
            "Astaghfirullah wa atubu ilaih",
            "Allahumma anta rabbuna farzuqna"
        ],
        answer: 1
    },
    { 
        question: "Apa doa keluar dari kamar mandi?", 
        options: [
            "Alhamdulillahilladzi adzhaba ‘annil adza wa ‘afani",
            "Bismillahi tawakkaltu ‘alallah la hawla wa la quwwata illa billah",
            "Allahumma inni as’aluka ilman nafian wa rizqan thayyiban",
            "Allahumma a’ini ‘ala dzikrika wa syukrika wa husni ‘ibadatika"
        ],
        answer: 0
    },
    { 
        question: "Doa apa yang dibaca sebelum makan?", 
        options: [
            "Allahumma barik lana fi ma razaqtana waqina ‘adzabannar",
            "Bismillahirrahmanirrahim",
            "Allahumma inni a’udzu bika minal khubutsi wal khaba’its",
            "Rabbana atina fid dunya hasanah wa fil akhirati hasanah waqina ‘adzabannar"
        ],
        answer: 1
    },
    { 
        question: "Apa doa setelah makan?", 
        options: [
            "Alhamdulillahilladzi ath’amana wa saqana wa ja’alana minal muslimin",
            "Subhanallah walhamdulillah wa la ilaha illallah wallahu akbar",
            "Allahumma inni as’aluka ilman nafian wa rizqan thayyiban wa ‘amalan mutaqabbalan",
            "Rabbana la tuzigh qulubana ba’da idz hadaitana wahablana min ladunka rahmah innaka antal wahhab"
        ],
        answer: 0
    },
    { 
        question: "Apa doa yang dianjurkan saat keluar rumah?", 
        options: [
            "Allahumma barik lana fi ma razaqtana waqina ‘adzabannar",
            "Bismillah, tawakkaltu ‘alallah, la hawla wa la quwwata illa billah",
            "Rabbana atina fid dunya hasanah wa fil akhirati hasanah waqina ‘adzabannar",
            "Allahumma inni as’aluka khairal mawlaji wa khairal makhraji"
        ],
        answer: 1
    },
    { 
        question: "Apa doa ketika naik kendaraan?", 
        options: [
            "Subhanalladzi sakhkhara lana hadza wama kunna lahu muqrinin wa inna ila rabbina lamunqalibun",
            "Astaghfirullah wa atubu ilaih",
            "Rabbighfir li wa tub ‘alayya innaka anta at-tawwabur-rahim",
            "Allahumma inni as’aluka ilman nafian wa rizqan thayyiban"
        ],
        answer: 0
    },
    { 
        question: "Apa doa ketika turun hujan?", 
        options: [
            "Allahumma shayyiban nafi’an",
            "Allahumma inni as’aluka ‘afiyah",
            "Allahumma ajirni minan naar",
            "Rabbana la tuzigh qulubana ba’da idz hadaitana"
        ],
        answer: 0
    },
    { 
        question: "Apa doa ketika bercermin?", 
        options: [
            "Allahumma anta hassanta khalqi fahassin khuluqi",
            "Allahumma inni a’udzu bika minal khubutsi wal khaba’its",
            "Rabbana atina fid dunya hasanah wa fil akhirati hasanah waqina ‘adzabannar",
            "Bismillah, tawakkaltu ‘alallah, la hawla wa la quwwata illa billah"
        ],
        answer: 0
    },
    { 
        question: "Apa doa yang dianjurkan sebelum masuk masjid?", 
        options: [
            "Allahumma inni as’aluka min fadhlika",
            "Bismillah, tawakkaltu ‘alallah, la hawla wa la quwwata illa billah",
            "Allahummaftah li abwaba rahmatik",
            "Rabbighfir li wa tub ‘alayya innaka anta at-tawwabur-rahim"
        ],
        answer: 2
    },
    { 
        question: "Apa doa yang dianjurkan saat keluar masjid?", 
        options: [
            "Bismillah, tawakkaltu ‘alallah, la hawla wa la quwwata illa billah",
            "Allahumma inni as’aluka min fadhlika",
            "Rabbana atina fid dunya hasanah wa fil akhirati hasanah waqina ‘adzabannar",
            "Allahumma ajirni minan naar"
        ],
        answer: 1
    },
    { 
        question: "Apa doa sebelum belajar?", 
        options: [
            "Allahummaftah ‘alayya hikmataka wansyur ‘alayya min khoza’ini rahmatika",
            "Rabbi yassir wa la tu’assir, Rabbi tammim bil khair",
            "Allahumma inni as’aluka ilman nafian wa rizqan thayyiban wa ‘amalan mutaqabbalan",
            "Rabbighfir li wa tub ‘alayya innaka anta at-tawwabur-rahim"
        ],
        answer: 2
    },
    { 
        question: "Apa doa setelah belajar?", 
        options: [
            "Allahumma inni as’aluka ‘ilman nafian wa rizqan thayyiban",
            "Rabbana atina fid dunya hasanah wa fil akhirati hasanah waqina ‘adzabannar",
            "Subhanaka Allahumma wa bihamdika, asyhadu alla ilaha illa anta, astaghfiruka wa atubu ilaik",
            "Allahumma inni as’aluka khairal mawlaji wa khairal makhraji"
        ],
        answer: 2
    },
    { 
        question: "Apa doa ketika masuk rumah?", 
        options: [
            "Bismillahi walajna, wa bismillahi kharajna, wa ‘ala rabbina tawakkalna",
            "Bismillahirrahmanirrahim",
            "Allahumma inni as’aluka khairal mawlaji wa khairal makhraji",
            "Allahummaftah li abwaba rahmatik"
        ],
        answer: 0
    },
    { 
        question: "Apa doa ketika hujan deras agar tidak menjadi bencana?", 
        options: [
            "Allahumma shayyiban nafi’an",
            "Allahumma hawalayna wa la ‘alayna",
            "Allahumma inni a’udzu bika minal khubutsi wal khaba’its",
            "Allahumma ajirni minan naar"
        ],
        answer: 1
    },
    { 
        question: "Apa doa ketika mendengar petir?", 
        options: [
            "Subhanalladzi yusabbihur ra’du bihamdihi walmala’ikatu min khifatih",
            "Allahumma ajirni minan naar",
            "Allahumma barik lana fi ma razaqtana waqina ‘adzabannar",
            "Rabbighfir li wa tub ‘alayya innaka anta at-tawwabur-rahim"
        ],
        answer: 0
    },
    { 
        question: "Apa doa ketika melihat sesuatu yang menakjubkan?", 
        options: [
            "Subhanallah",
            "Allahu Akbar",
            "Masha Allah la quwwata illa billah",
            "La ilaha illallah"
        ],
        answer: 2
    },
    { 
        question: "Apa doa ketika tertimpa musibah?", 
        options: [
            "Inna lillahi wa inna ilaihi raji’un",
            "Allahumma ajirni minan naar",
            "Astaghfirullah wa atubu ilaih",
            "Hasbunallah wa ni’mal wakil"
        ],
        answer: 0
    },
    { 
        question: "Apa doa ketika melihat orang yang sakit?", 
        options: [
            "Allahumma rabban naas adzhibil ba’sa, isyfi anta syafi, la syifa’a illa syifa’uka syifa’an la yughadiru saqama",
            "Allahumma inni a’udzu bika minal khubutsi wal khaba’its",
            "Bismillah, tawakkaltu ‘alallah, la hawla wa la quwwata illa billah",
            "Subhanaka Allahumma wa bihamdika, asyhadu alla ilaha illa anta, astaghfiruka wa atubu ilaik"
        ],
        answer: 0
    }
];

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        let feedback = "";
        if (score === questions.length * 5) {
            feedback = "Pemahamanmu tentang Doa Sehari-hari sangat baik sekali!";
        } else if (score >= (questions.length * 4)) {
            feedback = "Pemahamanmu tentang Doa Sehari-hari baik!";
        } else if (score >= (questions.length * 3)) {
            feedback = "Pemahamanmu tentang Doa Sehari-hari cukup.";
        } else if (score >= (questions.length * 2)) {
            feedback = "Pemahamanmu tentang Doa Sehari-hari kurang.";
        } else {
            feedback = "Pemahamanmu tentang Doa Sehari-hari sangat kurang.";
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
</body> -->