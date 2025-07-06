# 🧠 TWKQu 🇮🇩 (Tes Wawasan Kebangsaan Quiz)

![TWKQu](https://github.com/user-attachments/assets/0d18314b-7ad8-41a7-b4aa-dad1f8ae8077)


Aplikasi kuis interaktif sederhana yang dirancang untuk menguji dan meningkatkan wawasan kebangsaan pengguna. Dibangun menggunakan HTML, CSS, dan JavaScript, aplikasi ini menawarkan pengalaman kuis yang responsif dan dinamis tanpa memerlukan backend.

## ✨ Fitur Utama

*   **Pertanyaan Acak:** Setiap sesi kuis menyajikan pertanyaan dalam urutan acak, memastikan pengalaman yang berbeda setiap kali dimainkan.
*   **Pilihan Jawaban Acak:** Urutan pilihan jawaban juga diacak untuk mencegah hafalan posisi jawaban.
*   **Indikator Progress:** Pengguna dapat melihat progress mereka ("Soal X dari Y soal") untuk mengetahui posisi mereka dalam kuis.
*   **Penomoran Soal:** Setiap pertanyaan diberi nomor urut yang jelas.
*   **Feedback Visual Instan:** Jawaban yang benar ditandai dengan warna hijau, dan jawaban yang salah dengan warna merah, memberikan umpan balik langsung kepada pengguna.
*   **Desain Responsif:** Tampilan aplikasi menyesuaikan dengan baik di berbagai ukuran layar (desktop, tablet, dan smartphone).
*   **UI/UX Modern:** Menggunakan font Poppins, efek transparansi, dan `text-shadow` untuk meningkatkan keterbacaan dan estetika.
*   **Pesan Validasi Interaktif:** Mengganti `alert()` browser dengan pesan error di dalam UI untuk pengalaman pengguna yang lebih mulus.
*   **Animasi Transisi Pertanyaan:** Transisi halus saat memuat pertanyaan baru untuk pengalaman yang lebih dinamis.

## 🚀 Cara Menggunakan

1. Akses pada link https://twkqu.netlify.app atau https://twkqu.vercel.app
2. Menjalan secara Lokal :
    1).  **Kloning Repositori:**
        ```bash
        git clone https://github.com/ferryfarhan14/twkqu.git
        ```
    2).  **Buka Folder Proyek:**
        ```bash
        cd twkqu
        ```
    3).  **Buka `index.html`:**
        Cukup buka file `index.html` di browser web pilihan Anda (misalnya Chrome, Firefox, Edge ) dengan mengklik dua kali file tersebut.

## 🛠️ Struktur Proyek

Proyek ini terdiri dari tiga file utama:

*   `index.html`: Struktur dasar halaman web dan elemen-elemen UI.
*   `style.css`: Styling untuk tampilan aplikasi, termasuk responsivitas dan efek visual.
*   `script.js`: Logika inti aplikasi kuis, termasuk manajemen pertanyaan, pengacakan, perhitungan skor, dan interaksi UI.

## 💡 Kustomisasi

Anda dapat dengan mudah menyesuaikan kuis ini:

*   **Menambah/Mengedit Soal:** Buka `script.js` dan edit array `questions` di `// --- BAGIAN 1: DATA PERTANYAAN KUIS ---`. Pastikan format setiap objek pertanyaan sesuai.
*   **Mengubah Tampilan:** Edit `style.css` untuk mengubah warna, font, ukuran, atau menambahkan efek visual lainnya.
*   **Mengganti Background:** Ganti `bg.png` dengan gambar Anda sendiri dan perbarui `url()` di `style.css`.

## 🤝 Kontribusi

Jika Anda memiliki saran atau ingin berkontribusi pada proyek ini, silakan:

1.  Fork repositori ini.
2.  Buat branch baru (`git checkout -b feature/nama-fitur-baru`).
3.  Lakukan perubahan Anda.
4.  Commit perubahan Anda (`git commit -m 'Tambahkan fitur baru'`).
5.  Push ke branch Anda (`git push origin feature/nama-fitur-baru`).
6.  Buat Pull Request.
