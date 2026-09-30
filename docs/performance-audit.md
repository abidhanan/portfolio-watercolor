# Audit portfolio — 30 September 2026

Production: https://www.abidhanan.my.id

## Perubahan

- Buffer dan Supabase ditambahkan di Tools & Tech Stack.
- Judul tab, Open Graph, dan Twitter menjadi Abid Hanan - DevRel.
- 35 gambar dikonversi dari JPEG/PNG ke WebP: 6.05 MB menjadi 2.94 MB, hemat 51.4%.
- Logo di bawah layar dimuat secara lazy; ukuran gambar responsif diperbaiki.
- Heading section, daftar tools, kartu sertifikat, navigasi mobile, dan skip link dirapikan.
- Metadata viewport, theme color, referrer, locale, serta structured data ProfilePage dilengkapi.
- Next.js diperbarui ke 16.3.7; npm audit melaporkan 0 kerentanan.

## Lighthouse production

Mobile, run konfirmasi: performance: 84, accessibility: 100, best-practices: 100, seo: 100.

Desktop: performance: 93, accessibility: 100, best-practices: 100, seo: 100.

| Metrik | Mobile, run konfirmasi | Desktop |
| --- | --- | --- |
| First Contentful Paint | 2.3 s | 0.9 s |
| Largest Contentful Paint | 4.0 s | 1.0 s |
| Total Blocking Time | 40 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 3.5 s | 2.2 s |

LCP mobile 4.0 detik masih di atas target baik 2.5 detik. CLS stabil di 0 pada kedua viewport. TBT mobile 40 ms dan desktop 0 ms.

Audit mobile pertama mencatat skor 32, LCP 5.5 detik, dan TBT 5570 ms dengan peringatan CPU perangkat lebih lambat dari perkiraan Lighthouse (benchmark 609). Pengujian diulang ketika benchmark pulih: run konfirmasi 2119 dan desktop 1743.5, keduanya tanpa peringatan CPU. Run pertama tetap disimpan untuk transparansi. Angka merupakan data lab; hasil production tidak dibandingkan langsung dengan baseline localhost karena jaringan berbeda.

INP belum tersedia: audit navigasi Lighthouse menggunakan TBT sebagai indikator interaktivitas dan tidak mengukur interaksi pengguna nyata. Karena belum ada pengukuran INP pengguna, situs belum dapat dinyatakan lulus seluruh Core Web Vitals. Referensi: [Google Web Vitals](https://web.dev/articles/vitals).

## Validasi

Build production, TypeScript, ESLint, pemeriksaan referensi file gambar, dan validasi struktur HTML lolos. Validasi HTML menonaktifkan aturan gaya yang tidak sesuai keluaran React/Next.js (casing atribut, self-closing void tags, style inline, format atribut boolean, dan gaya ID), sambil mempertahankan aturan struktur dan aksesibilitas.

Lighthouse menyimpan laporan lengkap sebelum gagal membersihkan direktori sementara Windows dengan EPERM. Tidak ada runtimeError pada laporan; hasil audit dan screenshot berhasil dibaca. Laporan mentah tersedia sebagai lh-production-*.json pada workspace dan tidak dikirim ke GitHub.

## Cloudflare

CDN aset **belum aktif**. Konfigurasi Worker, generator varian WebP, URL berversi, dan loader tersedia. Otorisasi API Wrangler kedaluwarsa; upload dashboard tertahan izin akses file URL ekstensi dan koneksi Chrome kemudian terputus. Production tetap memakai CDN dan image optimization Vercel.

Langkah aktivasi ada di README.md: autentikasi Cloudflare, deploy CDN, verifikasi URL aset, atur NEXT_PUBLIC_ASSET_BASE_URL di Vercel, lalu redeploy aplikasi.
