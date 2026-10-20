# Spesifikasi Revisi Website: Integrasi Aset Figma & Estetika Natal (revision.md)

Dokumen ini merinci rencana revisi antarmuka (UI/UX) website **DATE BEKASI 13: THE CHRISTMAS GETAWAY** berdasarkan aset grafis dari 3 project Figma yang telah terhubung:
1. `Christmas trees and normal trees Illustration` (`9YxgXIqfFrAZH7SN6OtRwh`)
2. `Christmas Dolty illustrations` (`EytiTSkchcYXf8WkfNfig2`)
3. `Free Christmas design assets by Iconfinder` (`6vLQAewGGqu2aulaSrY8gp`)

---

## 1. Ringkasan Kebutuhan User & Catatan Utama

1. **Perbaikan Monogram Logo Navbar**:
   - Kotak merah di kiri atas saat ini menampilkan huruf `"H"` (dari referensi newsletter).
   - **Harus dikembalikan menjadi `"DB13"`** dengan font serif tebal dan warna putih/emas.
2. **Hapus Gambar Pohon Natal Awal**:
   - Hapus foto flatlay pohon natal lama (`/images/christmas-tree-flatlay.jpg`).
   - Ganti dengan pohon natal ilustrasi vector / aset premium dari project Figma.
3. **Meriahkan Tampilan Web dengan Aset Figma**:
   - Mengambil ilustrasi bertema natal (pohon cemara, tumpukan kado, gingerbread man, lentera, ornamen gantung, snowman, kaus kaki natal, permen tongkat).
   - Menata aset secara estetik dan proporsional di seluruh section web.

---

## 2. Pemetaan & Kurasi Aset dari 3 Project Figma

Aset akan diekspor via Figma REST API ke format **SVG** (dan PNG resolusi tinggi) dan disimpan ke `public/images/figma/`:

### A. Project 1: Christmas Trees & Normal Trees (`9YxgXIqfFrAZH7SN6OtRwh`)
* **Kegunaan**:
  - Pohon natal utama untuk **Hero Section** (pohon berhias ornamen bintang dan lampu).
  - Pohon pinus kecil/sedang untuk dekorasi latar belakang dan pemisah antar-section.
* **Nodes**:
  - `3:34696`, `3:34967`, `5:38217` (Pohon natal berdekorasi lengkap & pohon salju).

### B. Project 2: Christmas Dolty Illustrations (`EytiTSkchcYXf8WkfNfig2`)
* **Karakter Visual**: Ilustrasi karakter hangat, gaya modern editorial, warna festive selaras dengan palet hangat.
* **Aset yang Diambil**:
  1. `Decorating the tree` (`1:133`) & `Presents` (`1:80`): Cocok untuk header atau pendamping hero section.
  2. `Christmas sock` (`1:361`) & `Cookies` (`1:424`): Dekorasi aksen di section Itinerary & Secret Santa.
  3. `Christmas decorations` (`1:924` / `1:733`): Ornamen gantung pita, lonceng, dan bola baubles.

### C. Project 3: Free Christmas Design Assets by Iconfinder (`6vLQAewGGqu2aulaSrY8gp`)
* **Karakter Visual**: Vector icons & badges natal tajam berkualitas tinggi.
* **Aset yang Diambil**:
  1. `Christmas tree` (`10:25864` / `10:35782`) — Pohon natal vektor berornamen bintang.
  2. `Gifts` (`2:3184` / `10:42479`) — Tumpukan kado natal untuk Secret Santa.
  3. `Candy canes` (`10:35851`), `Gingerbread man` (`10:36126`), `Ornament` (`10:36026`), `Bell` (`10:42455`).
  4. `Reindeer` / `Snowman` (`10:36068`) untuk sentuhan ceria di sudut section.

---

## 3. Rincian Perubahan per Komponen

### A. Header & Navigation Bar (`src/components/NavigationBar.vue`)
* **Perubahan Logo Monogram**:
  - Ganti teks `"H"` menjadi **`"DB13"`**.
  - Background box tetap warna merah festive (`bg-festive-crimson`) dengan border halus.
* **Aksen Tambahan**:
  - Berikan ikon dekorasi holly mini di samping teks brand "DATE BEKASI 13".

### B. Hero Invitation (`src/components/HeroInvitation.vue`)
* **Pohon Natal Baru**:
  - Hapus komponen foto lama `ChristmasTreeFlatlay.vue` (`/images/christmas-tree-flatlay.jpg`).
  - Pasang komponen ilustrasi pohon natal baru (`FigmaHeroTree.vue` atau SVG langsung) yang berpadu serasi dengan tema *Warm Festive Editorial*.
  - Lengkapi dengan ornamen kado di bawah kaki pohon natal (dari Figma aset `Presents`).
* **Dekorasi Sudut & Garland**:
  - Perkaya sudut bingkai dengan garland cemara + lonceng emas & pita merah hasil vektor Figma.
  - Tambahkan aksen bintang berkelap-kelip halus (*subtle twinkling stars*).

### C. Countdown Timer (`src/components/CountdownTimer.vue`)
* Tambahkan ornamen ranting cemara natal dan pita merah dari Figma di atas timer container.
* Berikan sentuhan baubles kecil di samping label hari, jam, menit, detik.

### D. Itinerary & Schedule (`src/components/EventDetails.vue`)
* Di samping judul "SAVE THE DATE!": Tambahkan ilustrasi kalender natal / lonceng natal dari Figma.
* Di atas kartu Dress Code Day 1 & Day 2:
  - Day 1 (Casual Colorful): Aksen ornamen topi rajut natal / lentera hangat.
  - Day 2 (Casual Maroon): Aksen pita beludru merah maroon dan dedaunan cemara.
* Di area Checklist Aksesoris: Tambahkan ilustrasi koper/kado natal dari Figma.

### E. Secret Santa (`src/components/GiftExchange.vue`)
* **Header Section**:
  - Tambahkan ilustrasi tumpukan kado berbungkus pita merah dan kertas cokelat dari Figma `Gifts` (`2:3184`).
* **3 Arched Cards**:
  - Card 1 (Budget): Sematkan ikon koin/kado emas vektor dari Figma.
  - Card 2 (Brown Paper): Tambahkan ilustrasi kado berpita rami dan tag kartu natal.
  - Card 3 (Unisex Rules): Tambahkan ornamen netral (bintang/snowglobe).

### F. Footer Section (`src/FooterSection.vue`)
* Tambahkan ilustrasi pemandangan desa musim dingin atau jajaran pohon cemara bersalju di atas garis divider footer.

---

## 4. Rencana Alur Eksekusi Teknis (Setelah Persetujuan)

1. **Download Skrip Aset**:
   - Menjalankan Python script menggunakan token `token-figma.txt` untuk mengekspor daftar node SVG yang dipilih ke direktori `public/images/figma/`.
2. **Koreksi Navbar**:
   - Edit `NavigationBar.vue` mengubah logo menjadi `"DB13"`.
3. **Pemasangan Pohon Natal & Aset Hero**:
   - Integrasikan pohon natal vektor baru ke `HeroInvitation.vue`.
4. **Pemasangan Aset Dekorasi di Section Lain**:
   - Memasukkan ornamen dan ilustrasi Figma ke `EventDetails.vue` dan `GiftExchange.vue`.
5. **Verifikasi Build & Tampilan**:
   - Jalankan `npm run build` dan review live preview di `http://localhost:5173/`.
