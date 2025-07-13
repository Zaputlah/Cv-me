---
title: "Sahabat Nabi Muhammad ﷺ: Kenali Mereka Lebih Dekat"
description: "Kuis interaktif tentang sahabat Nabi untuk mengenal mereka lebih dalam."
pubDate: "2025-03-20"
heroImage: " "
tags: ["Islam", "Sahabat Nabi", "Kuis Islam", "Sejarah Islam", "Hadis", "Al-Qur'an", "Kisah Sahabat", "Sirah Nabawiyah", "Belajar Islam", "Zaputlah", "20 Maret", "2025", "Maret 2025", "Siroh", "Kuis Keislaman", "Ilmu Agama"]
---
<script>
        let currentQuestion = 0;
        let score = 0;

        const questions = [
    { 
        question: "Siapakah sahabat yang dijuluki 'As-Siddiq' karena selalu membenarkan Nabi Muhammad ﷺ?", 
        options: ["Umar bin Khattab رضي الله عنه", "Ali bin Abi Thalib رضي الله عنه", "Abu Bakar Ash-Shiddiq رضي الله عنه", "Utsman bin Affan رضي الله عنه"],
        answer: 2
    },
    { 
        question: "Siapakah khalifah ketiga dalam Khulafaur Rasyidin?", 
        options: ["Ali bin Abi Thalib رضي الله عنه", "Umar bin Khattab رضي الله عنه", "Abu Bakar Ash-Shiddiq رضي الله عنه", "Utsman bin Affan رضي الله عنه"],
        answer: 3
    },
    { 
        question: "Siapakah sahabat yang pertama kali memeluk Islam dari kalangan anak-anak?", 
        options: ["Zaid bin Haritsah رضي الله عنه", "Ali bin Abi Thalib رضي الله عنه", "Bilal bin Rabah رضي الله عنه", "Abdullah bin Mas’ud رضي الله عنه"],
        answer: 1
    },
    { 
        question: "Siapakah sahabat yang dikenal sebagai penulis wahyu?", 
        options: ["Mu'awiyah bin Abi Sufyan رضي الله عنه", "Abdullah bin Abbas رضي الله عنه", "Zaid bin Tsabit رضي الله عنه", "Ali bin Abi Thalib رضي الله عنه"],
        answer: 2
    },
    { 
        question: "Siapakah sahabat yang dijuluki 'Pedang Allah'?", 
        options: ["Khalid bin Walid رضي الله عنه", "Sa’ad bin Abi Waqqas رضي الله عنه", "Hamzah bin Abdul Muttalib رضي الله عنه", "Thalhah bin Ubaidillah رضي الله عنه"],
        answer: 0
    },
    { 
        question: "Siapakah sahabat yang paling banyak meriwayatkan hadits?", 
        options: ["Abdullah bin Umar رضي الله عنه", "Anas bin Malik رضي الله عنه", "Abu Hurairah رضي الله عنه", "Aisyah binti Abu Bakar رضي الله عنها"],
        answer: 2
    },
    { 
        question: "Siapakah sahabat yang pertama kali memeluk Islam dari kalangan wanita?", 
        options: ["Hafshah binti Umar رضي الله عنها", "Fatimah binti Muhammad رضي الله عنها", "Aisyah binti Abu Bakar رضي الله عنها", "Khadijah binti Khuwailid رضي الله عنها"],
        answer: 3
    },
    { 
        question: "Siapakah sahabat yang menemani Rasulullah dalam hijrah ke Madinah?", 
        options: ["Umar bin Khattab رضي الله عنه", "Ali bin Abi Thalib رضي الله عنه", "Abu Bakar Ash-Shiddiq رضي الله عنه", "Utsman bin Affan رضي الله عنه"],
        answer: 2
    },
    { 
        question: "Siapakah sahabat yang dikenal sebagai juru bicara kaum Muslimin?", 
        options: ["Bilal bin Rabah رضي الله عنه", "Abu Musa Al-Asy'ari رضي الله عنه", "Amr bin Ash رضي الله عنه", "Tsabit bin Qais رضي الله عنه"],
        answer: 3
    },
    { 
        question: "Siapakah sahabat yang mendapat gelar 'Dzul Nurain' karena menikahi dua putri Nabi?", 
        options: ["Ali bin Abi Thalib رضي الله عنه", "Utsman bin Affan رضي الله عنه", "Abdurrahman bin Auf رضي الله عنه", "Sa’ad bin Abi Waqqas رضي الله عنه"],
        answer: 1
    },
    { 
        question: "Siapakah sahabat yang disebut sebagai 'Penerjemah Al-Qur'an'?", 
        options: ["Abdullah bin Abbas رضي الله عنه", "Abdullah bin Mas’ud رضي الله عنه", "Zaid bin Tsabit رضي الله عنه", "Umar bin Khattab رضي الله عنه"],
        answer: 0
    },
    { 
        question: "Siapakah sahabat yang dikenal dengan keberanian dan dijuluki 'Singa Allah'?", 
        options: ["Khalid bin Walid رضي الله عنه", "Hamzah bin Abdul Muttalib رضي الله عنه", "Sa’ad bin Abi Waqqas رضي الله عنه", "Thalhah bin Ubaidillah رضي الله عنه"],
        answer: 1
    },
    { 
        question: "Siapakah sahabat yang ditugaskan Rasulullah untuk menjadi panglima perang di Perang Mu'tah?", 
        options: ["Ja'far bin Abi Thalib رضي الله عنه", "Khalid bin Walid", "Zaid bin Haritsah", "Amr bin Ash"],
        answer: 2
    },
    { 
        question: "Siapakah sahabat yang terkenal sebagai muazin pertama dalam Islam?", 
        options: ["Abdullah bin Ummi Maktum", "Bilal bin Rabah", "Abu Musa Al-Asy'ari", "Zaid bin Tsabit"],
        answer: 1
    },
    { 
        question: "Siapakah sahabat yang dijuluki 'Pemilik Dua Sabuk' karena keberaniannya dalam hijrah?", 
        options: ["Asma' binti Abu Bakar", "Aisyah binti Abu Bakar", "Fatimah binti Muhammad", "Hafshah binti Umar"],
        answer: 0
    },
    { 
        question: "Siapakah sahabat yang menggantikan Rasulullah saat beliau berhijrah dan tidur di tempat tidurnya?", 
        options: ["Umar bin Khattab", "Ali bin Abi Thalib", "Abu Bakar Ash-Shiddiq", "Utsman bin Affan"],
        answer: 1
    },
    { 
        question: "Siapakah sahabat yang dikenal sebagai orang pertama yang menulis Mushaf Al-Qur'an?", 
        options: ["Zaid bin Tsabit", "Abdullah bin Mas’ud", "Utsman bin Affan", "Ali bin Abi Thalib"],
        answer: 0
    },
    { 
        question: "Siapakah sahabat yang terkenal dengan kedermawanannya dan dijuluki 'Juru Dagang Allah'?", 
        options: ["Abdurrahman bin Auf", "Utsman bin Affan", "Ali bin Abi Thalib", "Sa’ad bin Abi Waqqas"],
        answer: 0
    },
    { 
        question: "Siapakah sahabat yang dikenal sebagai ahli strategi perang kaum Muslimin?", 
        options: ["Khalid bin Walid", "Amr bin Ash", "Sa’ad bin Abi Waqqas", "Zubair bin Awwam"],
        answer: 0
    },
    { 
        question: "Siapakah sahabat yang pertama kali memimpin shalat menggantikan Nabi saat beliau sakit?", 
        options: ["Abu Bakar Ash-Shiddiq", "Umar bin Khattab", "Ali bin Abi Thalib", "Utsman bin Affan"],
        answer: 0
    }
];

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        let feedback = "";
        if (score === questions.length * 5) {
            feedback = "Pemahamanmu tentang sahabat Nabi sangat baik sekali!";
        } else if (score >= (questions.length * 4)) {
            feedback = "Pemahamanmu tentang sahabat Nabi baik!";
        } else if (score >= (questions.length * 3)) {
            feedback = "Pemahamanmu tentang sahabat Nabi cukup.";
        } else if (score >= (questions.length * 2)) {
            feedback = "Pemahamanmu tentang sahabat Nabi kurang.";
        } else {
            feedback = "Pemahamanmu tentang sahabat Nabi sangat kurang.";
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

