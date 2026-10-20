# Issue One: Polish Interaktivitas & Copywriting (issue-one.md)

Dokumen ini berisi spesifikasi perbaikan UI, interaktivitas, dan pembersihan copy untuk pengembangan selanjutnya.

---

## 1. Latar Belakang & Masalah

Berdasarkan pengujian user pada versi web terbaru, ditemukan 3 hal yang perlu diperbaiki:
1. **Afordansi Tombol Aksesoris Kurang Jelas**:
   - Pada komponen `EventDetails.vue` di bagian *Festive Goodies / Accessories Checklist*, pengguna tidak menyadari bahwa tombol-tombol aksesoris (misalnya kacamata hitam, pakaian hangat, dll.) bersifat interaktif dan dapat diklik untuk menandai barang yang sudah dipersiapkan.
2. **Redundansi Judul Secret Santa**:
   - Teks `"Secret Santa Tradition"` yang terletak tepat di atas judul utama Secret Santa terasa berlebihan dan membuat tampilan header kurang rapi.
3. **Copy Teks Wrapping Style Terlalu Panjang**:
   - Kalimat `"A rustic vintage aesthetic that looks cozy and unified under the Christmas tree."` pada kartu Rule 02 (Brown Paper Wrapping) perlu dihilangkan agar instruksi lebih ringkas dan fokus langsung ke aturan utama pembungkusan kado.

---

## 2. Rincian Pekerjaan

### Item 1: Penambahan Indikator Interaktif pada Accessories Checklist
* **File Terkait**: `src/components/EventDetails.vue`
* **Lokasi**: Bagian *Christmas Accessories Interactive Callout* / *Your Accessories Checklist*.
* **Solusi**:
  1. Tambahkan pill/badge panduan di samping header checklist:
     ```html
     <span class="inline-flex items-center gap-1 rounded-full bg-festive-sand/60 px-2.5 py-0.5 text-[10px] font-sans font-medium text-festive-crimson">
       <span>👆</span>
       <span>Tap item to check</span>
     </span>
     ```
  2. Berikan cursor pointer yang jelas (`cursor-pointer`), animasi hover lembut (`hover:-translate-y-0.5 hover:shadow-md transition-all`), dan efek *click affordance* (misal checkbox bulat interaktif atau ikon tap kecil).

### Item 2: Hapus Teks "Secret Santa Tradition"
* **File Terkait**: `src/components/GiftExchange.vue`
* **Lokasi**: Baris 25–28 (`<span class="inline-block text-xs font-serif font-bold uppercase tracking-[0.25em] text-festive-crimson mb-2">Secret Santa Tradition</span>`).
* **Tindakan**: Hapus elemen `<span>` tersebut sehingga header section langsung menampilkan ilustrasi kado dan judul utama `🎁 {{ eventData.giftExchange.title }}`.

### Item 3: Hapus Kalimat Estetika pada Wrapping Style
* **File Terkait**: `src/components/GiftExchange.vue`
* **Lokasi**: Kartu Rule 02 (`Wrapping Style`), baris 85–87.
* **Teks Asli**:
  > `Wrap your present using plain <strong>brown craft paper</strong>. A rustic vintage aesthetic that looks cozy and unified under the Christmas tree.`
* **Teks Baru**:
  > `Wrap your present using plain <strong>brown craft paper</strong>.`
* **Tindakan**: Hapus kalimat kedua agar instruksi padat dan tidak bertele-tele.

---

## 3. Kriteria Penerimaan (Acceptance Criteria)

- [ ] Pengguna dengan jelas melihat bahwa kotak aksesoris checklist dapat diklik (tersedia indikator visual "Tap item to check" / cursor & hover effect).
- [ ] Teks "Secret Santa Tradition" sudah tidak muncul di tampilan web.
- [ ] Kalimat "A rustic vintage aesthetic that looks cozy and unified under the Christmas tree." telah dihapus dari kartu Rule 02.
- [ ] Build project berjalan sukses (`npm run build`).
