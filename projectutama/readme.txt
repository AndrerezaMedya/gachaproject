========================================= README - Proyek Utama: Formulir Coaching
Folder ini berisi seluruh source code untuk aplikasi "Formulir Coaching Interaktif".
Aplikasi ini dirancang sebagai Single Page Application (SPA) yang mandiri, dengan frontend dan backend yang terpisah namun terintegrasi.

Struktur File
index.html

Tipe: Frontend

Deskripsi: Ini adalah satu-satunya file untuk sisi klien (client-side). File ini berisi semua struktur (HTML), styling (CSS), dan logika interaktif (JavaScript).

Fitur Utama:

Tampilan multi-halaman tanpa reload.

Tema dinamis berdasarkan pilihan coach.

Visualisasi data "Circle of Life".

Pemutar audio dan fitur gacha.

Verifikasi suara sebelum submit.

codesatu.js

Tipe: Backend

Platform: Google Apps Script

Deskripsi: Ini adalah script backend serverless yang bertindak sebagai API. Script ini di-deploy sebagai Web App di Google Cloud.

Fungsi Utama:

Menerima data yang dikirim dari index.html melalui metode POST.

Menyimpan data formulir ke dalam Google Sheets.

Meng-handle upload file rekaman suara ke Google Drive.

Arsitektur & Alur Kerja
Pengguna membuka dan berinteraksi dengan index.html.

Setelah semua data diisi, JavaScript di frontend mengumpulkan data tersebut ke dalam sebuah objek JSON.

Frontend mengirimkan objek JSON ini ke URL Web App dari codesatu.js.

codesatu.js menerima request, mem-parsing data, dan menyimpannya ke layanan Google (Sheets & Drive).

Setup & Deployment
Backend (codesatu.js):

Buat proyek baru di Google Apps Script.

Salin isi codesatu.js ke dalamnya.

Konfigurasi ID Google Sheet dan Folder Drive di dalam script.

Deploy script sebagai "Web app" dengan akses "Anyone".

Salin URL Web App yang dihasilkan.

Frontend (index.html):

Buka index.html.

Cari variabel const WEB_APP_URL.

Ganti nilainya dengan URL Web App yang Anda dapatkan dari langkah backend.

Frontend sekarang siap digunakan dan terhubung dengan backend Anda.
