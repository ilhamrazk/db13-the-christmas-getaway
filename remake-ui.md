# Rencana Perombakan UI (Remake UI) - DATE BEKASI 13: THE CHRISTMAS GETAWAY
Berdasarkan Referensi Visual: `reference/web design.jfif`

Dokumen ini berisi panduan teknis dan visual komprehensif untuk merombak total antarmuka (UI/UX) website agar beralih dari gaya *dark-heavy maroon* ke gaya **Warm Festive Editorial / Organic Christmas Knolling** seperti pada `reference/web design.jfif`.

---

## 1. Analisis Desain Referensi (`reference/web design.jfif`)

Desain referensi mengusung tema **Warm Festive Editorial / Neo-Traditional Minimalism**:
1. **Background & Atmosphere**:
   - Dominan krem hangat (*warm beige/cream paper*) `#FAF4EB` / `#E8D3B9`.
   - Memberikan kesan majalah cetak natal (*holiday print editorial*), bersih, lapang, dan ramah.
2. **Focal Point - Knolling Christmas Tree**:
   - Terletak di posisi teratas sebagai visual jangkar.
   - Pohon natal dibentuk dari susunan flatlay objek nyata: ranting cemara hijau, pita merah beludru/satin, ornamen bola (baubles) merah & emas, biskuit jahe (*gingerbread man*), permen tongkat (*candy cane*), biji pinus (*pinecones*), dan puncak bintang kayu putih.
3. **Arched Cards (Bentuk Jendela Lengkung)**:
   - Komponen kartu menggunakan siluet lengkungan setengah lingkaran (*arch top* `rounded-t-full` atau `border-radius: 9999px 9999px 24px 24px`).
   - Kartu menampilkan visual dengan background warna solid natal (merah, hijau pinus) dan teks tipografi serif yang elegan.
4. **Tipografi & Hirarki**:
   - Judul & Subjudul: Serif klasik berkarakter (*Playfair Display* / *Cormorant Garamond*).
   - Body & Metadata: Sans-serif / Serif halus, tracking renggang, center-aligned.
   - Warna teks: Charcoal / dark espresso `#1F1A17` (bukan hitam pekat #000).

---

## 2. Perbandingan: Desain Saat Ini vs Arah Baru

| Aspek | Tampilan Saat Ini (`screenshot-web/`) | Target Remake Baru (`reference/web design.jfif`) |
|---|---|---|
| **Warna Dominan Latar** | Cokelat tua gelap / Dark Maroon (`#1A0508`) pekat | Warm Paper Cream / Oatmeal Beige (`#FAF4EB` & `#E8D3B9`) |
| **Elemen Natal** | Terbatas pada emoji teks (`🎄`, `✨`) | Komposisi visual utuh: Knolling flatlay tree, garland, candy cane, pita merah |
| **Bentuk Card** | Kotak bersudut rounded standar (`rounded-3xl`) | **Arched Frame** (jendela lengkung di bagian atas kartu) |
| **Gaya Desain** | Dark luxury digital invite | Warm festive holiday editorial print |
| **Keseimbangan Warna** | Sangat dominan maroon-emas | Seimbang: Warm Cream + Pine Green + Festive Crimson + Gold Accent |

---

## 3. Rincian Perubahan per Komponen

### A. Layout Global & Background (`src/App.vue`)
* **Latar Belakang Website**:
  - Ganti warna dasar dari `bg-maroon-950` ke `bg-cream-100` atau gradien lembut `bg-gradient-to-b from-[#F7EFE3] via-[#FAF4EB] to-[#F1E5D3]`.
  - Warna teks default diubah ke `text-maroon-950` atau espresso charcoal `#231815`.
* **Efek Salju (`SnowCanvas.vue`)**:
  - Sesuaikan partikel salju agar tetap terlihat lembut di atas background terang (misalnya salju semi-transparan putih dengan soft shadow atau partikel keemasan halus).

---

### B. Navbar (`src/NavigationBar.vue`)
* **Desain Header Editorial**:
  - Mengadopsi header referensi: Monogram logo (misal "DB13" dengan aksen pita atau ranting pinus) di tengah atau kiri.
  - Link navigasi horizontal bergaya editorial: `Invitation | Itinerary | Secret Santa`.
  - Teks bernuansa klasik dengan garis pemisah tipis (*pipe separator* `|`) atau dot divider.

---

### C. Hero Section (`src/HeroInvitation.vue`) - Perombakan Total
1. **Christmas Tree Flatlay Anchor (Atas)**:
   - Tambahkan komponen grafis flatlay pohon natal di bagian paling atas hero section.
   - Komposisi segitiga pohon:
     - Topper: Bintang kayu emas/putih.
     - Badan: Daun cemara hijau pinus (`pine-700`), diselingi pita merah, ornamen bola natal, permen tongkat (*candy canes*), dan biskuit jahe (*gingerbread*).
2. **Tipografi & Ucapan Hangat**:
   - Format salam personal sesuai referensi:
     - Badge/Kicker: `DATE BEKASI 13 ANNUAL RETREAT`
     - Headline Utama (H1 Serif Besar): `THE CHRISTMAS GETAWAY`
     - Subtitle Script/Serif: *"Anniversary & Christmas Celebration"*
     - Paragraf Pengantar Editorial: Box kutipan dengan padding lega dan tipografi italic yang hangat.
3. **Highlight Date & Destination**:
   - Dibuat minimalis elegan dengan border tipis bertinta merah tua (*crimson hairline border*) atau aksen emas.

---

### D. Countdown Timer (`src/CountdownTimer.vue`)
* Ubah kotak timer dari background gelap menjadi gaya **Paper Block / Arched Block**:
  - Background kotak: Warm white (`#FFFFFF`) atau Kraft Paper dengan bayangan lembut (*soft shadow*).
  - Angka hitung mundur: Tipografi Serif tebal warna `maroon-800` atau `pine-800`.
  - Label (Days, Hours, Mins, Secs): Huruf kapital kecil dengan tracking lebar.
  - Tambahkan aksen ornamen ranting cemara kecil di sisi kiri dan kanan wadah timer.

---

### E. Itinerary & Dress Code Section (`src/EventDetails.vue`)
* **Penerapan Arched Window Cards**:
  - Ubah kartu informasi (Schedule, Venue, Day 1 Dresscode, Day 2 Dresscode) menjadi siluet **Arched Cards** (bagian atas melengkung setengah lingkaran seperti kartu 1–4 pada referensi).
  - Pada kartu dress code:
    - Masukkan foto/ilustrasi dresscode di bagian atas lengkung.
    - Judul dan ketentuan warna (Casual Colorful / Casual Maroon) ditaruh di bawahnya dengan tipografi serif tegas.
    - Label warna menggunakan swatch bulat yang rapi.

---

### F. Secret Santa Section (`src/GiftExchange.vue`)
* **Penerapan 3 Arched Rule Cards**:
  - Rombak 3 aturan kado (Budget Rp 100k, Brown Paper Wrapping, Unisex Non-Food) menjadi 3 kartu bergaya jendela lengkung (*Arched Cards*):
    - **Card 1 (Budget)**: Lengkungan atas dengan ilustrasi/foto bertema kado & pita emas, diikuti judul dan deskripsi Rp 100.000.
    - **Card 2 (Brown Paper)**: Visual kado dibungkus kertas cokelat kraft dengan tali rami (*twine*) dan daun cemara.
    - **Card 3 (Unisex Rules)**: Visual ornamen natal netral dengan panduan unisex & no food.

---

### G. Footer Section (`src/FooterSection.vue`)
* Background footer menggunakan aksen warna hijau pinus tua (`bg-pine-900`) atau merah maroon pekat (`bg-maroon-900`) sebagai penutup kontras yang elegan.
* Berisi ucapan penutup hangat, kredit komunitas Date Bekasi 13, dan ornamen garland natal di bagian atas footer.

---

## 4. Palet Warna & Token Tailwind yang Digunakan

```javascript
// Konfigurasi warna penyesuaian (tailwind.config.js)
colors: {
  festive: {
    cream: '#FAF4EB',      // Background utama website
    sand: '#E8D3B9',       // Background kartu & aksen hangat
    espresso: '#231815',   // Teks utama (kontras tinggi, lembut)
    crimson: '#9B1B28',    // Merah natal pita & aksen
    pine: '#1B4332',       // Hijau cemara natal
    gold: '#D4AF37',       // Emas bintang & baubles
    kraft: '#A77B56',      // Cokelat kertas kado kraft
  }
}
```

---

## 5. Rencana Tahapan Eksekusi (Roadmap Pengerjaan)

1. **Tahap 1: Setup Foundation & Tokens**
   - Perbarui `tailwind.config.js` untuk token warna krem editorial (`festive.cream`, `festive.sand`, dsb).
   - Terapkan base background terang di `src/App.vue`.

2. **Tahap 2: Komponen Pohon Natal Flatlay (Knolling Tree)**
   - Buat komponen baru `src/components/ChristmasTreeKnolling.vue` (berisi ilustrasi SVG / image flatlay susunan pinus, pita merah, permen, bintang).
   - Pasang di bagian atas `HeroInvitation.vue`.

3. **Tahap 3: Re-skin Hero Invitation & Countdown**
   - Ubah layout dan tema warna kartu hero menjadi editorial elegan latar cerah.
   - Modifikasi kotak `CountdownTimer.vue` ke gaya arched/paper block.

4. **Tahap 4: Transformasi Cards ke Arched Shape**
   - Update `DressCodeCard.vue` dan kartu aturan `GiftExchange.vue` menggunakan siluet jendela lengkung (*arch cut*).
   - Rapikan responsivitas (1 kolom di mobile, 2 atau 3 kolom di desktop).

5. **Tahap 5: Finishing & Testing**
   - Uji kontras keterbacaan teks dan responsivitas layar (mobile, tablet, desktop).
   - Verifikasi build produksi (`npm run build`).
