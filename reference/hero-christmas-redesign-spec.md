# Spesifikasi Desain & Rencana Implementasi: Hero Section Natal

Dokumen ini berisi:
1. Deskripsi mendalam file referensi `reference/web design.jfif`.
2. Analisis gap visual pada halaman saat ini (`screenshot-web/page-1.png`).
3. Action plan dan spesifikasi teknis pengerjaan untuk developer/AI model selanjutnya.

---

## 1. Deskripsi Gambar Referensi (`reference/web design.jfif`)

* **Tipe & Tema**: Mockup UI/Newsletter kampanye donasi Natal (*Warm Festive Editorial / Neo-Traditional Minimalism*).
* **Viewport**: 
  - Kiri: Layout mobile vertikal tunggal.
  - Kanan: Layout desktop/tablet dengan grid 2 kolom.

### Elemen Visual Kunci:
1. **Pohon Natal Flatlay (Knolling Style)**:
   - Terletak di posisi teratas sebagai visual anchor.
   - Bentuk segitiga pohon natal tersusun dari ranting pinus alami, pita merah satin, ornamen bola (baubles), biji pinus emas, permen tongkat (*candy cane*), kue jahe (*gingerbread man*), dan topper bintang kayu putih di puncak.
2. **Kartu Bertema Arch Window (Lengkung Arsitektural)**:
   - Komponen kartu menggunakan siluet jendela lengkung (*arched top*) yang elegan.
   - Menggabungkan foto bertema natal dengan judul serif tegas dan deskripsi singkat.
3. **Palet Warna & Tipografi**:
   - Background krem hangat (`#E8D3B9` / `#FAF4EB`), hijau daun pinus tua, aksen merah festive, serta sentuhan kayu/kraft.
   - Tipografi Serif editorial bergaya majalah klasik (*Playfair Display* / *Cormorant*) berpasangan dengan body copy ringan dan rapi.

---

## 2. Analisis Kondisi Web Saat Ini (`screenshot-web/page-1.png`)

* **File Komponen**: `src/components/HeroInvitation.vue`
* **Permasalahan Visual Saat Ini**:
  1. **Kurang Unsur Grafis Natal**: Nuansa natal baru sebatas emoji teks (🎄 dan ✨) serta partikel salju kecil di canvas background.
  2. **Area Atas Terlalu Kering/Kosong**: Hero section langsung menyajikan teks dan badge pill tanpa titik fokus visual (*focal point*) pohon natal atau ornamen natal.
  3. **Dominasi Warna Maroon/Emas Saja**: Kurang sentuhan rona hijau pinus (*pine green*), pita merah, dan ornamen natal yang membuat suasana liburan terasa hidup.
  4. **Komponen Countdown & Card Polos**: Kotak countdown belum memiliki detail festif (seperti aksen tumpukan salju / ranting / dekorasi natal di sudut bingkai).

---

## 3. Rencana Implementasi & Instruksi Kerja Developer / Model

Developer atau model AI berikutnya harus memodifikasi `src/components/HeroInvitation.vue` (dan komponen pendukung terkait) dengan rincian berikut:

### Task 1: Menambahkan Visual Pohon Natal & Ornamen di Bagian Atas Hero
* **Posisi**: Tempatkan di atas atau tepat di sekitar judul utama/badge pada `HeroInvitation.vue`.
* **Bentuk**:
  - Buat ilustrasi SVG berkualitas tinggi atau susunan grafis pohon natal bergaya editorial (terinspirasi dari *knolling tree* di `reference/web design.jfif`).
  - Dilengkapi ornamen bintang emas bercahaya di puncak (*top star*), untaian baubles merah & emas, dan daun cemara hijau pinus (`text-pine-500` / `text-pine-300`).
  - Alternatif/pelengkap: Tambahkan dekorasi *garland* cemara atau ornamen gantung di bagian atas bingkai emas (*gold double-border frame*).

### Task 2: Dekorasi Garland / Wreath di Sudut Frame Hero
* Tambahkan aksen visual daun pinus cemara + pita merah (*festive ribbon*) di sudut atas frame (kiri & kanan) menggantikan tanda bintang sederhana `✦` yang ada saat ini.
* Menggunakan SVG inline yang ringan atau icon dekoratif sehingga responsive dan tajam di semua resolusi.

### Task 3: Sentuhan Festif pada Kotak Countdown Timer (`CountdownTimer.vue`)
* Berikan aksen dekorasi natal halus:
  - Sentuhan *snow cap* (lapisan salju tipis SVG) di atas masing-masing kotak countdown.
  - Ornamen daun holly kecil atau bel emas di sisi timer.

### Task 4: Harmonisasi Warna & Nuansa Sesuai Referensi
* Manfaatkan token warna `pine` (`pine-800`, `pine-700`, `pine-500`) yang sudah tersedia di `tailwind.config.js` untuk mengimbangi warna `maroon` dan `gold`.
* Pastikan kontras teks tetap tinggi dan mudah dibaca pada perangkat mobile maupun desktop.

---

## 4. Checklist Penerimaan (Acceptance Criteria)

- [ ] Ada elemen pohon natal visual (bukan sekadar emoji) di area hero awal.
- [ ] Sudut bingkai kartu undangan memiliki ornamen dekorasi natal (cemara/pita/bauble).
- [ ] Tampilan tetap responsif di layar mobile (375px) sampai desktop (1440px).
- [ ] Build project berjalan sukses (`npm run build`).
