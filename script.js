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
        question: "Apa ibu kota negara Indonesia?",
        options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
        correctAnswer: "Jakarta"
    },
    {
        question: "Siapakah penemu bola lampu pijar?",
        options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Isaac Newton"],
        correctAnswer: "Thomas Edison"
    },
    {
        question: "Planet manakah yang dikenal sebagai 'Planet Merah'?",
        options: ["Venus", "Mars", "Jupiter", "Saturnus"],
        correctAnswer: "Mars"
    },
    {
        question: "Berapakah hasil dari 7 x 8?",
        options: ["49", "54", "56", "63"],
        correctAnswer: "56"
    },
    {
        question: "Apa nama samudra terbesar di dunia?",
        options: ["Samudra Atlantik", "Samudra Hindia", "Samudra Arktik", "Samudra Pasifik"],
        correctAnswer: "Samudra Pasifik"
    }
    // Tambahkan pertanyaan Anda di sini
];

// --- BAGIAN 2: VARIABEL GLOBAL UNTUK STATUS KUIS ---
let currentQuestionIndex = 0; // Melacak pertanyaan yang sedang ditampilkan
let score = 0; // Melacak skor pengguna
let selectedOption = null; // Melacak pilihan jawaban yang dipilih pengguna

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

// Fungsi untuk memulai kuis
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
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

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question; // Tampilkan pertanyaan

        // Buat tombol untuk setiap pilihan jawaban
        currentQuestion.options.forEach(option => {
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

    const currentQuestion = questions[currentQuestionIndex];
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
    totalQuestionsElement.textContent = questions.length; // Tampilkan total pertanyaan
}

// --- BAGIAN 5: EVENT LISTENERS ---

// Ketika tombol 'Selanjutnya' diklik
nextButton.addEventListener('click', checkAnswer);

// Ketika tombol 'Mulai Ulang Kuis' diklik
restartButton.addEventListener('click', startQuiz);

// --- BAGIAN 6: INISIALISASI (MULAI KUIS SAAT HALAMAN DIMUAT) ---
document.addEventListener('DOMContentLoaded', startQuiz); // Pastikan DOM sudah dimuat
