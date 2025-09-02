Formulir Coaching & Studi Kasus Gacha - Asrama Salman
Repositori ini adalah sebuah sandbox untuk dua proyek dengan satu tujuan akhir: mengintegrasikan mekanisme gacha yang canggih ke dalam sebuah aplikasi web interaktif.

📝 Tentang Proyek
Repositori ini menampung dua basis kode yang berbeda:

Aplikasi Utama: Formulir Coaching Interaktif
Sebuah Single Page Application (SPA) yang fungsional dan kaya fitur, dirancang untuk program pendampingan di Asrama Salman. Dibangun dengan Vanilla JavaScript dan backend serverless Google Apps Script.

Studi Kasus: Mirror Genshin Wish Simulator
Sebuah salinan (mirror) dari source code aplikasi Genshin Wish Simulator yang populer. Kode ini disimpan di sini murni untuk tujuan studi, analisis, dan pembelajaran.

🎯 Tujuan Utama & Tantangan Rekayasa
Tujuan utama dari repositori ini adalah untuk mengeksplorasi dan mengimplementasikan fitur, animasi, dan logika dari Genshin Wish Simulator ke dalam Formulir Coaching Interaktif.

Dengan menyandingkan kedua proyek, tantangannya adalah:

Mempelajari bagaimana aplikasi simulator yang kemungkinan dibangun dengan framework modern (seperti React/Vue) menangani state management, rendering dinamis, dan animasi yang kompleks.

Mengadaptasi dan merekayasa ulang konsep-konsep tersebut agar dapat berjalan secara efisien di dalam aplikasi utama yang berbasis Vanilla JavaScript.

Meminta kontribusi dan analisis (baik dari developer maupun kecerdasan buatan/AI) untuk menemukan solusi integrasi terbaik.

✨ Fitur (Formulir Coaching Interaktif)
🎨 Tema Dinamis: Antarmuka berubah sesuai "coach" yang dipilih.

📊 Visualisasi "Circle of Life": Data divisualisasikan secara real-time dengan Chart.js.

🎙️ Verifikasi Suara: Pengguna merekam suara singkat sebelum mengirim data.

🎵 Pemutar Audio Latar: Kontrol penuh untuk musik latar dan murottal.

☀️ Mode Terang & Gelap: Tombol toggle dengan preferensi yang tersimpan.

✨ Gacha Semangat: Fitur gacha sederhana yang sudah ada sebagai bukti konsep awal.

🚀 Navigasi Mulus: Transisi halaman yang halus menggunakan GSAP.

📱 Desain Responsif: Tampilan yang dioptimalkan untuk semua ukuran layar.

🛠️ Tumpukan Teknologi (Formulir Coaching)
Frontend: Vanilla JavaScript (ES6), HTML5, CSS3, Chart.js, GSAP, FingerprintJS.

Backend: Google Apps Script, Google Sheets, Google Drive.

(Catatan: Tumpukan teknologi untuk Gacha Simulator berbeda dan perlu dianalisis dari source code-nya).

🏗️ Arsitektur (Formulir Coaching)
Frontend (index.html): Pengguna berinteraksi dengan antarmuka web.

API Call: JavaScript melakukan fetch POST request ke URL Web App Google Apps Script.

Backend (code.gs): Script menerima data, menyimpan file audio ke Google Drive, dan mencatat data formulir ke Google Sheets.

🚀 Cara Menjalankan (Formulir Coaching)
Bagian Frontend
Buka file index.html di browser Anda.

Penting: Cari konstanta WEB_APP_URL di dalam tag <script> dan ganti nilainya dengan URL deployment Google Apps Script Anda.

Bagian Backend
Siapkan Google Services: Buat 2 Google Sheets (publik & privat) dan 1 folder Google Drive. Catat semua ID-nya.

Buat Google Apps Script:

Buka script.google.com dan buat proyek baru.

Salin konten dari codesatu.js ke dalamnya.

Update variabel FOLDER_ID dan PRIVATE_SHEET_ID dengan ID yang sudah Anda catat.

Deploy sebagai Web App:

Klik "Deploy" > "New deployment".

Pilih tipe "Web app" dan atur akses ke "Anyone".

Salin URL Web app yang dihasilkan dan masukkan ke WEB_APP_URL di frontend.

Dibuat dengan semangat dan secangkir kopi. ☕
