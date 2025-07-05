// --- BAGIAN 1: DATA PERTANYAAN KUIS ---
// Anda bisa menambahkan, mengedit, atau menghapus pertanyaan di sini.
// Pastikan format setiap objek pertanyaan sama:
// {
//     question: "Teks pertanyaan Anda di sini?",
//     options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"], // Array pilihan jawaban
//     correctAnswer: "Pilihan C" // Pastikan ini sama persis dengan salah satu 'options' di atas
// }
const questions = [
    {
        question: "Selat yang terletak di antara Pulau Kalimantan dan Sulawesi adalah Selat?",
        options: ["Malaka", "Madara", "Makassar", "Mitoma"],
        correctAnswer: "Makassar"
    },
    {
        question: "Kepala daerah di tingkat provinsi adalah?",
        options: ["Wali kota", "Camat", "Gubernur", "Bupati"],
        correctAnswer: "Gubernur"
    },
    {
        question: "Lambang dari Pancasila sila ke-2 adalah?",
        options: ["Pohon Beringin", "Rantai", "Kepala Banteng", "Bintang"],
        correctAnswer: "Rantai"
    },
    {
        question: "Jumlah Provinsi di indonesia sampai saat ini berjumlah?",
        options: ["39", "34", "36", "38"],
        correctAnswer: "38"
    },
    {
        question: "Secara astronomi, letak wilayah Indonesia antara?",
        options: ["11 derajat LU - 6 derajat LU", "6 derajat LU - 18 derajat LS", "6 derajat LU - 11 derajat LS", "18 derajat LU - 6 derajat LS"],
        correctAnswer: "6 derajat LU - 11 derajat LS"
    },
    {
        question: "Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal?",
        options: ["16 Agustus 1945", "17 Agustus 1945", "18 Agustus 1945", "19 Agustus 1945"],
        correctAnswer: "17 Agustus 1945"
    },
    {
        question: "Makna dari Bhineka Tunggal Ika adalah?",
        options: ["Berbeda-beda tetapi tetap satu", "Bersatu dalam keberagaman", "Berbeda tetapi bersatu", "Semua jawaban benar"],
        correctAnswer: "Berbeda-beda tetapi tetap satu"
    },
    {
        question: "Setiap warga negara berhak mendapatkan pendidikan. Hal ini diatur dalam Pasal ... UUD 1945",
        options: ["28A", "28C ayat (1)", "31 ayat (1)", "34 ayat (2)"],
        correctAnswer: "31 ayat (1)"
    },
    {
        question: "Sistem pemerintahan di Indonesia adalah?",
        options: ["Parlementer", "Presidensial", "Federal", "Semi-presidensial"],
        correctAnswer: "Presidensial"
    },
    {
        question: "Letak geografis Indonesia berada di antara dua benua, yaitu?",
        options: ["Asia dan Australia", "Asia dan Afrika", "Eropa dan Asia", "Australia dan Amerika"],
        correctAnswer: "Asia dan Australia"
    },
    {
        question: "Upaya bela negara adalah tanggung jawab?",
        options: ["Presiden", "Pemerintah pusat", "Seluruh warga negara", "Aparat keamanan"],
        correctAnswer: "Seluruh warga negara"
    },
    {
        question: "Sumpah Pemuda diikrarkan pada tanggal?",
        options: ["28 Oktober 1928", "17 Agustus 1945", "1 Juni 1945", "20 Mei 1908"],
        correctAnswer: "28 Oktober 1928"
    }
    // Tambahkan pertanyaan Anda di sini
];

// --- BAGIAN 2: VARIABEL GLOBAL UNTUK STATUS KUIS ---
let currentQuestionIndex = 0; // Melacak pertanyaan yang sedang ditampilkan
let score = 0; // Melacak skor pengguna
let selectedOption = null; // Melacak pilihan jawaban yang dipilih pengguna
let shuffledQuestions = []; // Array untuk menyimpan pertanyaan yang sudah diacak

// --- BAGIAN 3: MENGAMBIL ELEMEN HTML ---
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-button');

// --- BAGIAN 4: FUNGSI UTAMA KUIS ---

// Fungsi untuk mengacak array (algoritma Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Tukar elemen
    }
    return array;
}

// Fungsi untuk memulai kuis
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    shuffledQuestions = shuffleArray([...questions]); // Acak pertanyaan dan simpan di shuffledQuestions
    
    quizContainer.classList.remove('hidden'); // Tampilkan bagian kuis
    resultContainer.classList.add('hidden'); // Sembunyikan bagian hasil
    nextButton.textContent = 'Selanjutnya'; // Reset teks tombol
    nextButton.disabled = true; // Nonaktifkan tombol selanjutnya sampai ada pilihan
    loadQuestion(); // Muat pertanyaan pertama
}

// Fungsi untuk memuat pertanyaan dan pilihan jawaban
function loadQuestion() {
    // Hapus semua tombol pilihan sebelumnya
    optionsContainer.innerHTML = '';
    selectedOption = null; // Reset pilihan yang dipilih
    nextButton.disabled = true; // Nonaktifkan tombol selanjutnya

    // Gunakan shuffledQuestions, bukan questions asli
    if (currentQuestionIndex < shuffledQuestions.length) {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        // --- START: Penambahan untuk nomor pertanyaan ---
        questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`; // Tampilkan nomor dan pertanyaan
        // --- END: Penambahan ---

        // Buat tombol untuk setiap pilihan jawaban
        const shuffledOptions = shuffleArray([...currentQuestion.options]); // Acak pilihan jawaban
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            button.addEventListener('click', () => selectOption(button, option)); // Tambahkan event listener
            optionsContainer.appendChild(button);
        });
    } else {
        // Jika semua pertanyaan sudah dijawab, tampilkan hasil
        showResult();
    }
}

// Fungsi untuk menangani pilihan jawaban
function selectOption(button, option) {
    // Hapus kelas 'selected' dari semua tombol
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Tambahkan kelas 'selected' ke tombol yang diklik
    button.classList.add('selected');
    selectedOption = option; // Simpan pilihan yang dipilih
    nextButton.disabled = false; // Aktifkan tombol selanjutnya
}

// Fungsi untuk memeriksa jawaban dan melanjutkan
function checkAnswer() {
    if (selectedOption === null) {
        alert('Silakan pilih jawaban terlebih dahulu!');
        return;
    }

    // Gunakan shuffledQuestions, bukan questions asli
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const allOptionButtons = document.querySelectorAll('.option-button');

    // Nonaktifkan semua tombol pilihan setelah jawaban dipilih
    allOptionButtons.forEach(btn => {
        btn.disabled = true;
    });

    // Beri umpan balik visual (hijau untuk benar, merah untuk salah)
    allOptionButtons.forEach(btn => {
        if (btn.textContent === currentQuestion.correctAnswer) {
            btn.classList.add('correct'); // Tandai jawaban yang benar
        } else if (btn.classList.contains('selected')) {
            btn.classList.add('incorrect'); // Tandai jawaban yang salah jika itu yang dipilih
        }
    });

    // Periksa apakah jawaban yang dipilih benar
    if (selectedOption === currentQuestion.correctAnswer) {
        score++; // Tambah skor jika benar
    }

    // Lanjutkan ke pertanyaan berikutnya setelah jeda singkat untuk melihat umpan balik
    setTimeout(() => {
        currentQuestionIndex++; // Pindah ke pertanyaan berikutnya
        loadQuestion(); // Muat pertanyaan baru atau tampilkan hasil
    }, 1000); // Jeda 1 detik
}

// Fungsi untuk menampilkan hasil akhir kuis
function showResult() {
    quizContainer.classList.add('hidden'); // Sembunyikan bagian kuis
    resultContainer.classList.remove('hidden'); // Tampilkan bagian hasil
    scoreElement.textContent = score; // Tampilkan skor akhir
    totalQuestionsElement.textContent = questions.length; // Tampilkan total pertanyaan (tetap dari array asli untuk total)
}

// --- BAGIAN 5: EVENT LISTENERS ---

// Ketika tombol 'Selanjutnya' diklik
nextButton.addEventListener('click', checkAnswer);

// Ketika tombol 'Mulai Ulang Kuis' diklik
restartButton.addEventListener('click', startQuiz);

// --- BAGIAN 6: INISIALISASI (MULAI KUIS SAAT HALAMAN DIMUAT) ---
document.addEventListener('DOMContentLoaded', startQuiz); // Pastikan DOM sudah dimuat
