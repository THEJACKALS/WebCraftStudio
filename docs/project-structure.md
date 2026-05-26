# Dokumentasi Struktur Project

## Gambaran Umum

WebCraft Studio adalah versi baru dari repository praktikum web lama yang difokuskan menjadi project portfolio frontend dasar. Project ini tetap statis, ringan, dan bisa dibuka langsung dari file `index.html` tanpa backend.

## Struktur Baru

```text
WebCraft-Studio/
├── README.md
├── index.html
├── pages/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
├── docs/
│   └── project-structure.md
└── screenshots/
```

## Perubahan Dari Versi Lama

### HTML

- Mengganti markup hasil export Figma yang masih penuh `div` generik menjadi elemen semantik seperti `header`, `nav`, `main`, `section`, `article`, `figure`, dan `footer`.
- Menambahkan hierarchy heading yang lebih rapi.
- Menambahkan alt text pada gambar dan label pada form.

### CSS

- Memisahkan gaya dasar dan responsive breakpoint.
- Menghapus kebutuhan lebar tetap layar penuh yang dulu membuat layout sulit dibaca di layar kecil.
- Menambahkan variabel warna, radius, shadow, dan container agar style lebih konsisten.

### JavaScript

- Menambahkan navigasi mobile.
- Menambahkan pengisian tahun otomatis pada footer.
- Menambahkan validasi form sederhana tanpa dependency eksternal.

## Asset

Asset lama dipertahankan dan dipindahkan ke lokasi yang lebih jelas:

- `assets/images/` untuk logo dan hero image
- `assets/icons/` untuk ikon sosial
- `assets/fonts/` disiapkan untuk kebutuhan font lokal jika nanti diperlukan

## Screenshot

Folder `screenshots/` disiapkan sebagai tempat menyimpan tangkapan layar dokumentasi. Jika ingin melengkapi portfolio, simpan file seperti berikut:

- `screenshots/home-desktop.png`
- `screenshots/home-tablet.png`
- `screenshots/home-mobile.png`

Jika screenshot belum tersedia, file `.gitkeep` tetap menjaga folder ini ada di repository.

## Catatan Implementasi

- Tidak ada backend, database, atau framework besar.
- Project dibuat tetap ringan agar cocok untuk pembelajaran dasar dan demo portfolio.