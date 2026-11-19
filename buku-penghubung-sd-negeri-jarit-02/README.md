# Buku Penghubung Digital SDN Jarit 02

Aplikasi komunikasi guru–wali murid Kelas 1 SD Negeri Jarit 02.

## Struktur

- `index.html` — Landing page
- `guru.html` — Portal Guru (butuh login)
- `wali.html` — Portal Wali (butuh link token)
- `css/style.css` — Semua tampilan
- `js/config.js` — Konfigurasi URL backend
- `js/guru.js` — Logika portal guru
- `js/wali.js` — Logika portal wali

## Backend

Backend: Google Apps Script (Spreadsheet + Drive).
URL backend diatur di `js/config.js`.

## Deployment

Website ini di-host di GitHub Pages:
https://[username].github.io