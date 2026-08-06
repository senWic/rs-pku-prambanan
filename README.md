# RS PKU Prambanan — Website

Starter website (Next.js 14 + Tailwind) buat RS PKU Prambanan. Struktur section
terinspirasi dari layout umum web rumah sakit (header, hero, jadwal dokter,
layanan, profil, CTA, footer, tombol darurat mengambang), dibangun dari nol
dengan konten & desain sendiri.

## Jalanin lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Push ke GitHub lalu edit di v0

1. `git init && git add . && git commit -m "init"`
2. Buat repo baru di GitHub, lalu push:
   ```bash
   git remote add origin <url-repo-kamu>
   git branch -M main
   git push -u origin main
   ```
3. Di v0.dev → import dari GitHub repo ini, baru mulai edit visual (ganti foto,
   sesuain teks, dsb) tanpa perlu generate dari nol lagi — hemat credit.

## Deploy ke Vercel

Import repo GitHub ini langsung di vercel.com/new. Next.js auto-detect,
tinggal klik Deploy.

## Yang masih perlu kamu isi

- Ganti data dokter contoh di `components/DoctorSearch.tsx` (idealnya nanti
  fetch dari Google Sheets/DB, bukan hardcode)
- Ganti foto placeholder di `components/About.tsx`
- Ganti nomor telepon/WA di `components/Header.tsx` dan `EmergencyFab.tsx`
- Tambah logo asli di `components/Header.tsx`
