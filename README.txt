=== Dashboard PASIMBUR Final (PWA) ===
Versi lengkap dengan fitur: Filter Periode, Grafik per Bulan, Export PDF, Dark Mode, dan PWA (Installable + Offline).

ISI PAKET:
  1. Dashboard_PASIMBUR_Final.html  - file utama dashboard
  2. manifest.json                  - manifest PWA
  3. service-worker.js              - service worker untuk offline + caching
  4. logo.png                       - logo PASIMBUR (placeholder, ganti dengan file asli Anda)
  5. README.txt                     - file ini

FITUR BARU:
  - Filter Periode    : Pilih rentang tanggal (Semua / Bulan Ini / 3 Bulan Terakhir / Tahun Ini / Custom)
                        Filter mempengaruhi ringkasan, tabel, dan SEMUA grafik.
  - Grafik per Bulan  : Bar chart pemasukan vs pengeluaran per bulan (Jan-Des)
  - Export PDF        : Klik tombol "PDF" untuk mengunduh dashboard sebagai PDF A4
                        (memerlukan internet untuk load library html2pdf pertama kali; setelah itu di-cache)
  - Dark Mode         : Klik tombol "Dark / Light" - preferensi tersimpan otomatis
  - PWA Installable   : Klik tombol "Install" yang muncul di Chrome/Edge untuk pasang sebagai aplikasi
  - Offline           : Service worker meng-cache file dashboard - tetap bisa dibuka tanpa internet
                        Data dari Google Apps Script tetap pakai network-first (selalu fresh saat online)

CARA DEPLOY:
  Opsi A - GitHub Pages (RECOMMENDED untuk PWA):
    1. Buat repository baru di GitHub (mis: pasimbur-dashboard)
    2. Upload SEMUA file (HTML, manifest.json, service-worker.js, logo.png)
    3. Settings -> Pages -> Source: main branch -> Save
    4. Tunggu sekitar 1-2 menit, buka URL: https://<username>.github.io/pasimbur-dashboard/Dashboard_PASIMBUR_Final.html
    5. Saat dibuka di Chrome/Edge HP atau desktop, akan muncul tombol "Install" -> pasang sebagai app
    6. Klik tombol Setup di dashboard, masukkan URL Google Apps Script Anda (/exec)

  Opsi B - Hosting web sendiri:
    Upload semua file di folder yang sama, pastikan diakses lewat HTTPS (PWA tidak jalan di HTTP, kecuali localhost).

  Opsi C - Pengujian Lokal:
    PWA hanya jalan di localhost atau HTTPS. Untuk test lokal:
      cd folder-paket
      python3 -m http.server 8000
      Buka http://localhost:8000/Dashboard_PASIMBUR_Final.html

GANTI LOGO:
  File logo.png yang disertakan hanyalah placeholder.
  Ganti dengan logo asli PASIMBUR (sebaiknya ukuran 512x512 PNG transparan) dengan nama yang sama: logo.png

CATATAN PENTING:
  - PWA TIDAK akan jalan jika file dibuka via file:// (protokol lokal).
    Harus diakses lewat http://localhost atau https://...
  - Service Worker akan auto-update saat file Dashboard_PASIMBUR_Final.html diubah - 
    untuk paksa update, naikkan versi cache di service-worker.js (mis: v1 -> v2)
  - Export PDF memerlukan internet untuk load html2pdf.js dari CDN pertama kali.
    Setelah di-cache, bisa export PDF offline.
  - Tombol "Install" hanya muncul di browser yang mendukung PWA (Chrome, Edge, Brave, Samsung Internet).
    Safari iOS: gunakan Share -> Add to Home Screen.
  - Dark mode preference tersimpan di localStorage browser, akan dipertahankan saat aplikasi dibuka kembali.

TROUBLESHOOTING:
  - "Install button tidak muncul"     -> Pastikan diakses via HTTPS atau localhost, refresh halaman, atau gunakan menu browser.
  - "Service worker gagal terdaftar"  -> Cek console browser. Pastikan service-worker.js berada di root yang sama.
  - "Export PDF gagal"                -> Cek koneksi internet. Coba lagi.
  - "Data tidak muncul"               -> Klik Setup, paste URL Google Apps Script (/exec) yang valid.

Dibuat untuk: PASIMBUR - Parsadaan Sianturi Simangonding Boru Bere Ibebere Indonesia.
