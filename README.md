# Markdown API Talking

Markdown API Talking adalah sebuah proyek API yang dikembangkan menggunakan Elysia dan Express. API ini menyediakan layanan untuk menyimpan dan merender catatan dalam format markdown.

## Deskripsi Fungsi Penggunaan

1. **Menyimpan Catatan**
    
    - Fungsi: Menyimpan catatan dalam format markdown.
    - Cara Kerja: Pengguna mengirimkan teks catatan dalam format markdown melalui endpoint yang ditentukan. Server menyimpan catatan tersebut dan mengembalikan ID unik sebagai pengenal catatan.

2. **Merender Catatan:**

    - Fungsi: Mengambil dan merender catatan markdown menjadi HTML.
    - Cara Kerja: Pengguna meminta catatan dengan ID tertentu. Server membaca catatan markdown yang sesuai dari penyimpanan, merendernya menjadi HTML, dan mengembalikan HTML tersebut kepada pengguna.

## Contoh penggunaan

- Simpan Catatan Markdown: Gunakan endpoint POST /save-note untuk menyimpan catatan baru. Kirim teks markdown, dan dapatkan kembali ID catatan.

- Dapatkan dan Render Catatan: Gunakan endpoint GET /get-note/:id untuk mendapatkan versi HTML dari catatan yang disimpan. Kirimkan ID catatan sebagai parameter URL, dan dapatkan HTML yang dirender.

## Teknologi yang Digunakan

- Node.js
- TypeScript
- Elysia
- Express
- Markdown-it

## Instalasi

Untuk memulai proyek ini, pastikan Anda telah menginstal [Node.js](https://nodejs.org/) dan [bun](https://bun.sh/). Kemudian ikuti langkah-langkah berikut:

1. Clone repositori ini:

   ```bash
   git clone https://github.com/username/markdown-api-talking.git
   cd markdown-api-talking

2. Instal dependensi:

    ```bash
    bun install
    ```
3. Jalankan Server:

    ```bash
    bun run src/server.ts
    ```

## Struktur Folder

```scss
/project-root
├── /node_modules
├── /src
│   ├── /controllers
│   │   ├── grammarController.ts
│   │   └── noteController.ts
│   ├── /middlewares
│   │   └── uploadMiddleware.ts
│   ├── /routes
│   │   ├── grammarRoutes.ts
│   │   └── noteRoutes.ts
│   ├── /services
│   │   ├── grammarService.ts
│   │   └── markdownService.ts
│   ├── /utils
│   │   └── utils.ts
│   ├── app.ts
│   └── server.ts
├── bun.lockb
├── bunfig.toml
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Penggunaan

Menyimpan Catatan
Endpoint: POST /save-note

Request Body:

```json
{
  "text": "Isi catatan dalam format markdown"
}
```

Response:
```json
{
  "noteId": "ID dari catatan yang disimpan"
}
```

Mengambil dan Merender Catatan
Endpoint: GET /get-note/:id

Response:

```json
{
  "html": "Isi catatan dalam format HTML"
}
```


