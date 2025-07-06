# 🧠 TWKQu 🇮🇩 (Tes Wawasan Kebangsaan Quiz)

![TWKQu](https://github.com/user-attachments/assets/0d18314b-7ad8-41a7-b4aa-dad1f8ae8077)


## 📑 Description
TWKQu merupakan proyek aplikasi kuis interaktif yang berfokus pada pengujian wawasan kebangsaan. Sebagai aplikasi single-page yang berjalan sepenuhnya di sisi klien, TWKQu memanfaatkan kekuatan HTML5 untuk menyusun konten, CSS3 untuk menciptakan antarmuka pengguna yang bersih, modern, dan responsif di berbagai perangkat, serta JavaScript untuk menggerakkan seluruh fungsionalitasnya. Aplikasi ini dirancang untuk memberikan pengalaman belajar yang menarik melalui fitur-fitur seperti pengacakan urutan pertanyaan dan pilihan jawaban, indikator progress yang jelas, penomoran soal, serta umpan balik visual yang instan. Dengan tidak adanya ketergantungan pada backend atau framework yang kompleks, TWKQu menjadi contoh nyata bagaimana konsep dasar pengembangan web dapat diimplementasikan untuk menciptakan aplikasi yang fungsional dan menarik.

## 🛠️ Technologies Used
*   **HTML5**
    *   Berfungsi sebagai **struktur dasar** dan kerangka konten aplikasi kuis.
    *   Digunakan untuk mendefinisikan semua elemen antarmuka pengguna seperti pertanyaan, pilihan jawaban, tombol navigasi, dan area tampilan skor.

*   **CSS3**
    *   Bertanggung jawab penuh atas **tampilan visual dan pengalaman pengguna (UI/UX)** aplikasi.
    *   Mencakup styling modern (misalnya, penggunaan font Poppins), responsivitas untuk berbagai ukuran layar, efek visual seperti transparansi (`rgba`), bayangan (`box-shadow`, `text-shadow`), dan animasi transisi (`transition`) untuk pengalaman yang lebih dinamis.

*   **JavaScript**
    *   Merupakan **otak di balik semua interaktivitas dan logika fungsional** aplikasi.
    *   Mengelola alur kuis, implementasi algoritma pengacakan (Fisher-Yates shuffle) untuk pertanyaan dan pilihan jawaban, manipulasi DOM untuk memperbarui konten secara dinamis, penanganan *event* (klik tombol), perhitungan skor, dan validasi input pengguna.
    *   Dipilih untuk menunjukkan pemahaman mendalam tentang dasar-dasar JavaScript tanpa ketergantungan pada *framework* atau *library* pihak ketiga.
      
*   **IBM Granite**
   *   Digunakan untuk mempercepat proses pengembangan, menghasilkan kode otomatis, serta memberi saran perbaikan kode

*   **GitHub**
    *   Digunakan sebagai platform **kontrol versi** dan **hosting repositori** untuk kode proyek.
    *   Memungkinkan pelacakan perubahan, kolaborasi, dan menyediakan akses publik ke kode sumber.

*   **Netlify**
    *   Dimanfaatkan untuk **deployment (penyebaran)** aplikasi web secara cepat dan mudah.
    *   Memungkinkan aplikasi TWKQu diakses secara publik melalui URL yang stabil.


## ✨ Features

*   **Pertanyaan Acak:** Setiap sesi kuis menyajikan pertanyaan dalam urutan acak, memastikan pengalaman yang berbeda setiap kali dimainkan.
*   **Pilihan Jawaban Acak:** Urutan pilihan jawaban juga diacak untuk mencegah hafalan posisi jawaban.
*   **Indikator Progress:** Pengguna dapat melihat progress mereka ("Soal X dari Y soal") untuk mengetahui posisi mereka dalam kuis.
*   **Penomoran Soal:** Setiap pertanyaan diberi nomor urut yang jelas.
*   **Feedback Visual Instan:** Jawaban yang benar ditandai dengan warna hijau, dan jawaban yang salah dengan warna merah, memberikan umpan balik langsung kepada pengguna.
*   **Desain Responsif:** Tampilan aplikasi menyesuaikan dengan baik di berbagai ukuran layar (desktop, tablet, dan smartphone).
*   **UI/UX Modern:** Menggunakan font Poppins, efek transparansi, dan `text-shadow` untuk meningkatkan keterbacaan dan estetika.
*   **Pesan Validasi Interaktif:** Mengganti `alert()` browser dengan pesan error di dalam UI untuk pengalaman pengguna yang lebih mulus.
*   **Animasi Transisi Pertanyaan:** Transisi halus saat memuat pertanyaan baru untuk pengalaman yang lebih dinamis.

## 🚀 Setup Instructions

1. Akses pada link https://twkqu.netlify.app

   Atau
   
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

## 🤖 AI Support Explanation

Meskipun proyek ini dikembangkan dengan fokus pada pemahaman dasar teknologi web (HTML, CSS, JavaScript), penting untuk memahami bagaimana alat AI modern, seperti **IBM Granite**, dapat mendukung dan mempercepat proses pengembangan aplikasi serupa.

IBM Granite adalah serangkaian model AI generatif yang kuat, dirancang untuk berbagai tugas, termasuk pemrosesan bahasa alami (NLP), pembuatan teks, dan bahkan pembuatan kode. Model-model ini tersedia melalui platform seperti IBM watsonx.ai dan juga sebagai *open-source*.

Berikut adalah beberapa cara bagaimana AI seperti IBM Granite dapat berkontribusi pada pengembangan proyek ini:

*   **Generasi Konten Otomatis:**
    *   Model bahasa dapat dilatih atau di-*prompt* untuk menghasilkan pertanyaan kuis baru, pilihan jawaban, dan kunci jawaban berdasarkan topik tertentu (misalnya, Wawasan Kebangsaan). Ini sangat mempercepat proses pengisian data kuis.
*   **Bantuan Pembuatan Kode (Code Generation) & Debugging:**
    *   Model seperti Granite Code dapat membantu dalam menulis *snippet* kode JavaScript untuk fungsionalitas tertentu (misalnya, algoritma pengacakan, fungsi manipulasi DOM).
 
      ![AI IBM Granite](https://github.com/user-attachments/assets/ebafbfd8-08b5-4a12-979c-b90fef7bfbf0)

    *   Dapat memberikan penjelasan tentang bagian kode yang kompleks atau menyarankan perbaikan untuk *bug* yang mungkin terjadi.
*   **Saran Desain UI/UX:**

      ![IBM_Granite_AI](https://github.com/user-attachments/assets/7a9cfd6a-1425-4bdf-a5d4-923030d4c90a)

*
    *   AI dapat menganalisis deskripsi atau *mockup* desain dan menyarankan perbaikan CSS untuk responsivitas, estetika, atau aksesibilitas, membantu menciptakan antarmuka yang lebih menarik dan *user-friendly*.
*   **Penyusunan Dokumentasi Proyek:**
    *   Model bahasa dapat membantu menyusun bagian-bagian dari `README.md`, seperti deskripsi proyek, daftar fitur, atau instruksi *setup*, memastikan dokumentasi yang jelas dan komprehensif.
*   **Eksplorasi Fitur & Ide Baru:**
    *   AI dapat memberikan ide-ide untuk fitur tambahan yang relevan dengan aplikasi kuis (misalnya, sistem poin, *leaderboard*, kategori soal), serta membantu dalam merencanakan langkah-langkah implementasinya.

**Kesimpulan:**

AI berfungsi sebagai **asisten cerdas** yang dapat mempercepat, meningkatkan kualitas, dan memberikan ide-ide inovatif dalam proses pengembangan perangkat lunak. Meskipun AI adalah alat yang sangat kuat, **keputusan akhir, kreativitas, dan pemahaman kontekstual tetap berada di tangan pengembang.** AI melengkapi keahlian manusia, bukan menggantikannya.


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
