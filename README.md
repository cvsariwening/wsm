
# 📦 Next.js Project

Proyek ini dibuat menggunakan [Next.js](https://nextjs.org/), sebuah framework React modern untuk membuat aplikasi web yang cepat, skalabel, dan mudah dikelola.

## 🛠️ Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (disarankan versi LTS, minimal v14.0.0)
- [npm](https://www.npmjs.com/) atau [Yarn](https://yarnpkg.com/) (opsional)

Cek versi dengan perintah:

```bash
node -v
npm -v
```

## 🚀 Cara Menjalankan Proyek

1. **Clone repositori ini**:

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```

2. **Instal dependensi**:

Menggunakan npm:

```bash
npm install
```

Atau menggunakan Yarn:

```bash
yarn
```

3. **Jalankan server pengembangan**:

```bash
npm run dev
```

Atau:

```bash
yarn dev
```

4. **Buka di browser**:

Akses [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi Anda.

## 📦 Script Tambahan

- `npm run build` – Membangun aplikasi untuk produksi.
- `npm start` – Menjalankan aplikasi dalam mode produksi.
- `npm run lint` – Mengecek kualitas kode menggunakan ESLint (jika tersedia).

## 🧾 Struktur Folder

Contoh struktur folder sederhana:

```
/pages         # Halaman aplikasi
/components    # Komponen yang dapat digunakan ulang
/public        # File statis (gambar, ikon, dll)
/styles        # File CSS/SCSS
```

## ⚙️ Konfigurasi Lingkungan

Jika menggunakan variabel lingkungan, buat file `.env.local` di root proyek:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

> Jangan lupa untuk menambahkan `.env.local` ke dalam file `.gitignore`.

## ☁️ Deployment

Proyek ini dapat dengan mudah dideploy ke [Vercel](https://vercel.com/) — platform resmi dari tim pembuat Next.js.

1. Push repositori ini ke GitHub/GitLab/Bitbucket.
2. Login ke [vercel.com](https://vercel.com/), dan hubungkan ke repositori.
3. Vercel akan secara otomatis membangun dan mendeploy proyek Anda.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Selamat ngoding! 🎉
