# 🎄 Feature Specification & Revision Guide: The Christmas Getaway (`new-feature.md`)

> **Document Type:** Feature Specification, Content Diff & Low-Level Implementation Blueprint  
> **Status:** Ready for Implementation  
> **Target Branch:** `feat/content-revision-dresscode-update`  
> **Source Comparison:**  
> - `page-2.txt` ➔ `page-2-rev-1.txt`  
> - `page-3.txt` ➔ `page-3-rev-1.txt`  
> - Visual Assets: `src/assets/image/day-1-dresscode.jpeg` & `src/assets/image/day-2-dresscode.jpeg`  

---

## 1. Executive Summary & Diff Analysis

Berdasarkan perbandingan antara dokumen lama (`page-2.txt`, `page-3.txt`) dan dokumen revisi terbaru (`page-2-rev-1.txt`, `page-3-rev-1.txt`), berikut adalah rincian mendalam mengenai apa yang **ditambahkan**, apa yang **berubah**, serta integrasi **2 aset visual lookbook baru**.

### 1.1 Perubahan pada Halaman 2 (`page-2.txt` vs `page-2-rev-1.txt`)

| Aspek / Bagian | Versi Lama (`page-2.txt`) | Versi Revisi (`page-2-rev-1.txt`) | Status Perubahan |
| :--- | :--- | :--- | :--- |
| **Meeting Point** | *Tidak ada* (hanya ada Location Villa) | `📍 MEETING POINT: McDonald’s Grand Kota Bintang` | **BARU (Added)** |
| **Destination Venue** | `🏡 Location: Villa Nirmala Hills, Ciawi` | `🏡 DESTINATION: Villa Nirmala Hills, Ciawi` | **Diperjelas (Renamed)** |
| **Punctuality Reminder** | *"A little reminder: please arrive on time so we can make the most of every moment together! ❤️"* | *"A LITTLE REMINDER ❤️ Please arrive on time so we can begin our journey together smoothly and without a rush!"* | **Diperbarui (Updated copy)** |
| **Dress Code Day 1** | `🤍 DAY 1 — WHITE` *(Hanya warna putih)* | `🤍🤎❤️💚 DAY 1 — CASUAL & COLORFUL`<br>*"Wear white, brown, red, or green."* | **PERUBAHAN UTAMA (Replaced)** |
| **Dress Code Day 2** | `❤️ DAY 2 — MAROON` | `❤️ DAY 2 — CASUAL MAROON` | **Diperbarui (Refined)** |
| **Aset Lookbook Foto** | *Tidak ada foto outfit* | Tersedia 2 foto moodboard lookbook:<br>1. `src/assets/image/day-1-dresscode.jpeg`<br>2. `src/assets/image/day-2-dresscode.jpeg` | **BARU (Added Assets)** |
| **Christmas Accessories** | *"If you have any, bring along your favorite..."* | *"Bring your favorite Christmas-themed accessories..."* | **Diperhalus (Copy refined)** |
| **Sunglasses Reminder** | *Tidak ada* | `🕶️ DON’T FORGET YOUR SUNGLASSES!`<br>*"Bring your sunglasses for our photo session and to complete your getaway look! 😎"* | **BARU (Added Section)** |
| **Packing / Luggage Rule**| *Tidak ada* | `🧳 PACK LIGHT!`<br>*"No suitcases, please! Bring a backpack or a small bag with your overnight essentials."* | **BARU (Added Section)** |

---

### 1.2 Perubahan pada Halaman 3 (`page-3.txt` vs `page-3-rev-1.txt`)

| Aspek / Bagian | Versi Lama (`page-3.txt`) | Versi Revisi (`page-3-rev-1.txt`) | Status Perubahan |
| :--- | :--- | :--- | :--- |
| **Judul Utama** | `A LITTLE GIFT, A LOT OF LOVE ❤️` | `🎁 CHRISTMAS GIFT EXCHANGE` | **Diperbarui (Updated Headline)** |
| **Sub-headline** | *"It’s time for our Christmas Gift Exchange! Here’s the plan:"* | *"It’s time to share a little love through our Christmas Gift Exchange! ✨ Here’s how it works:"* | **Diperbarui (Updated copy)** |
| **Gift Budget** | `🎁 Gift budget: Rp100.000` | `💰 Gift Budget: Rp100,000` | **Format Standar** |
| **Wrapping Style** | `🎀 Wrapping: Wrapped in brown paper` | `🎀 Wrapping: Brown paper wrapping` | **Penyelarasan Teks** |
| **Gift Rules** | `💌 Gift rules: Unisex and not food` | `🎁 Gift Rules: Unisex gifts only — no food items, please!` | **Dipertegas (More explicit)** |
| **Closing Message** | *"Let’s make this moment thoughtful, joyful, and full of love. It’s not about how much the gift costs, but the heart and thought behind it! ✨"* | *"Remember, it’s not about how much the gift costs, but the heart and thought behind it. A little gift can go a long way in making someone feel special! ❤️"* | **Pesan Diperdalam** |
| **Call To Action** | *Tidak ada ajakan akhir* | *"So, get creative, choose something meaningful, and let’s spread some Christmas joy! 🎄🎁"* | **BARU (Added CTA)** |

---

## 2. Analisis Mendalam Aset Visual Lookbook Baru

### 2.1 `src/assets/image/day-1-dresscode.jpeg`
- **Header Lookbook:** *"Day 1 - CASUAL VIBES (Staycation & Explore ♡)"*
- **Karakter & Vibe:** *"COMFY • RELAXED • LOOK GOOD"*  
  *"Casual, comfy, and effortless. Perfect for walking around, exploring the area, and enjoying a chill staycation day."*
- **4 Palet Warna Wajib:**
  1. 🤍 **White** (`#F4F1EA`)
  2. 🤎 **Brown** (`#5C3D2E`)
  3. ❤️ **Red** (`#8C1D24`)
  4. 💚 **Green** (`#5E7058`)
- **Panduan Gaya (Style Notes):**
  - No overly tight or revealing clothes
  - Comfortable fabrics (cotton, linen, knit, etc.)
  - Layering is okay (cardigan, jacket, shirt)
  - Sneakers / comfy shoes / sandals
  - Bags that fit your essentials
  - Minimal accessories
  - Easy to mix & match
  - Feel good and confident!
  - Quote: *"Good outfit = Good mood ♡"*

### 2.2 `src/assets/image/day-2-dresscode.jpeg`
- **Header Lookbook:** *"Day 2 - DRESSCODE MAROON (Casual Vibes ♡)"*
- **Karakter & Vibe:** *"COMFY • STYLISH • READY FOR FUN"*  
  *"Laid-back, effortless, and fun. Maroon as the main statement, styled casually for a day of exploring, eating, and making memories together!"*
- **5 Palet Warna Kombinasi:**
  1. ❤️ **Maroon** (`#731822`) — *Warna Utama (Main Statement)*
  2. 🤍 **White** (`#F4F1EA`)
  3. 🤎 **Beige** (`#967D68`)
  4. 🤎 **Brown** (`#4D382B`)
  5. 🖤 **Black** (`#1F1F1F`)
- **Panduan Gaya (Style Notes):**
  - Maroon as the main color (top, dress, cardigan, or outerwear)
  - Pair with neutral bottoms (white, beige, brown, black, or denim)
  - Comfortable and breathable fabrics (cotton, linen, knit, etc.)
  - Sneakers, sandals, or comfy shoes
  - Layering is okay (cardigan, shirt, jacket)
  - Accessories like tote bag, cap, or sunglasses to complete the look
  - Feel free to mix & match!
  - Quote: *"Same place, new stories ♡"* & *"Maroon days ♡"*

---

## 3. Rencana Desain & Interaksi Pengguna (UI/UX)

### 3.1 Integrasi Foto Lookbook pada Kartu Dress Code
Alih-alih sekadar menampilkan teks, kartu dress code pada `src/components/DressCodeCard.vue` kini akan memiliki tampilan ganda (*dual layout*):
1. **Thumbnail Foto Lookbook Interaktif**:
   - Menampilkan gambar visual model outfit dengan rasio aspek editorial yang rapi.
   - Terdapat tombol zoom / *"View Full Lookbook"* yang membuka gambar resolusi penuh di dalam modal pop-up agar teman-teman DATE 13 bisa membaca inspirasi outfit secara detail.
2. **Color Palette Swatches Bar**:
   - **Day 1**: 4 lingkaran warna interaktif (*White, Brown, Red, Green*) dengan kode hex dan nama warna.
   - **Day 2**: 5 lingkaran warna interaktif (*Maroon, White, Beige, Brown, Black*) yang menunjukkan kombinasi warna maroon dengan bawahan netral.
3. **Style Notes Bullets**:
   - Menampilkan poin-poin anjuran pakaian santai (*comfortable fabrics, sneakers, layering*).

### 3.2 Pembaruan Sesi Meeting Point & Destinasi
Pada bagian `EventDetails.vue`:
- Memisahkan informasi menjadi 2 kartu lokasi yang jelas:
  1. **Meeting Point (Titik Kumpul Awal)**:
     - 🕒 **Time:** 6:30 AM WIB
     - 📍 **Place:** McDonald’s Grand Kota Bintang, Bekasi
     - 💡 **Catatan:** Titik temu sebelum keberangkatan bersama/konvoi.
  2. **Destination (Tempat Tujuan)**:
     - 🏡 **Place:** Villa Nirmala Hills, Ciawi, Bogor
     - 🗺️ **Aksi:** Tombol buka Google Maps menuju Villa Nirmala Hills ([https://maps.app.goo.gl/SPWzPxfBonoh9Rin9](https://maps.app.goo.gl/SPWzPxfBonoh9Rin9)).
- Menampilkan pesan *"A Little Reminder ❤️: Please arrive on time so we can begin our journey together smoothly and without a rush!"* dengan styling kartu hangat.

### 3.3 Penambahan 2 Kartu Info Penting Baru (Tips & Essentials)
Tepat di bawah Dress Code dan Aksesoris Natal, tambahkan grid 2 kolom info esensial:
1. **Card 1: 🕶️ Don’t Forget Your Sunglasses!**
   - Icon kacamata hitam dengan desain festive.
   - Teks: *"Bring your sunglasses for our photo session and to complete your getaway look! 😎"*
2. **Card 2: 🧳 Pack Light!**
   - Icon koper silang / tas ransel.
   - Teks: *"No suitcases, please! Bring a backpack or a small bag with your overnight essentials."*
   - Menjelaskan agar mobilisasi efisien dan bagasi kendaraan tidak penuh sesak.

### 3.4 Penyesuaian Bagian Tukar Kado (`GiftExchange.vue`)
- Mengganti headline menjadi **"🎁 CHRISTMAS GIFT EXCHANGE"**.
- Mempertegas aturan: **"Unisex gifts only — no food items, please!"**.
- Menyisipkan kutipan penutup baru yang menyentuh hati:
  > *"Remember, it’s not about how much the gift costs, but the heart and thought behind it. A little gift can go a long way in making someone feel special! ❤️"*
- Menambahkan CTA card: *"So, get creative, choose something meaningful, and let’s spread some Christmas joy! 🎄🎁"*

---

## 4. Spesifikasi Data Model Teknis (`src/data/eventData.js`)

Pengembang/model harus memperbarui `src/data/eventData.js` dengan struktur data berikut:

```javascript
export const eventData = {
  community: {
    name: "DATE BEKASI 13",
    shortName: "DB13",
    tagline: "Anniversary & Christmas Celebration",
    invitationBadge: "YOU’RE INVITED!",
    description: "Celebrating how far we’ve come, the joy of Christmas, and the beautiful family God has brought together. ❤️",
    subDescription: "Ready for a little getaway?",
    footerTribute: "Can’t wait to celebrate with you, DATE fam! 🎄✨"
  },
  schedule: {
    eventTitle: "THE CHRISTMAS GETAWAY",
    startDate: "2026-11-07T06:30:00+07:00", // November 7, 2026 06:30 WIB
    endDate: "2026-11-08T15:00:00+07:00",
    displayDate: "November 7–8, 2026",
    gatheringTime: "6:30 AM",
    timeReminderHeadline: "A LITTLE REMINDER ❤️",
    timeReminder: "Please arrive on time so we can begin our journey together smoothly and without a rush!",
    meetingPoint: {
      name: "McDonald’s Grand Kota Bintang",
      city: "Bekasi Barat",
      note: "Meeting point for gathering, roll call, and convoy departure"
    },
    venue: {
      name: "Villa Nirmala Hills, Ciawi",
      city: "Ciawi, Bogor",
      mapsUrl: "https://maps.app.goo.gl/SPWzPxfBonoh9Rin9",
      addressNote: "Villa Nirmala Hills, Jl. Alternatif Ciawi - Megamendung, Ciawi, Bogor, Jawa Barat"
    }
  },
  travelTips: [
    {
      id: "sunglasses",
      icon: "Glasses",
      emoji: "🕶️",
      title: "DON’T FORGET YOUR SUNGLASSES!",
      text: "Bring your sunglasses for our photo session and to complete your getaway look! 😎"
    },
    {
      id: "pack_light",
      icon: "Luggage",
      emoji: "🧳",
      title: "PACK LIGHT!",
      text: "No suitcases, please! Bring a backpack or a small bag with your overnight essentials."
    }
  ],
  dressCode: {
    title: "DRESS CODE",
    subtitle: "Coordinate in harmony for our photos, memories, and celebrations!",
    days: [
      {
        dayNumber: 1,
        dayLabel: "DAY 1",
        themeName: "CASUAL & COLORFUL",
        colorInstruction: "Wear white, brown, red, or green.",
        imageSrc: "/images/day-1-dresscode.jpeg",
        vibe: "Casual, comfy, and effortless. Perfect for walking around, exploring the area, and enjoying a chill staycation day.",
        tagline: "Good outfit = Good mood ♡",
        palette: [
          { name: "White", hex: "#F4F1EA", border: "border-slate-300" },
          { name: "Brown", hex: "#5C3D2E", border: "border-[#402A1F]" },
          { name: "Red", hex: "#8C1D24", border: "border-[#5E1217]" },
          { name: "Green", hex: "#5E7058", border: "border-[#3F4D3B]" }
        ],
        styleNotes: [
          "No overly tight or revealing clothes",
          "Comfortable fabrics (cotton, linen, knit, etc.)",
          "Layering is okay (cardigan, jacket, shirt)",
          "Sneakers / comfy shoes / sandals",
          "Bags that fit your essentials",
          "Feel good and confident!"
        ]
      },
      {
        dayNumber: 2,
        dayLabel: "DAY 2",
        themeName: "CASUAL MAROON",
        colorInstruction: "Maroon as the main statement paired with neutral bottoms.",
        imageSrc: "/images/day-2-dresscode.jpeg",
        vibe: "Laid-back, effortless, and fun. Maroon as the main statement, styled casually for a day of exploring, eating, and making memories together!",
        tagline: "Same place, new stories ♡",
        palette: [
          { name: "Maroon", hex: "#731822", isMain: true, border: "border-red-950" },
          { name: "White", hex: "#F4F1EA", border: "border-slate-300" },
          { name: "Beige", hex: "#967D68", border: "border-[#6E5948]" },
          { name: "Brown", hex: "#4D382B", border: "border-[#33241C]" },
          { name: "Black", hex: "#1F1F1F", border: "border-black" }
        ],
        styleNotes: [
          "Maroon as the main color (top, dress, cardigan, or outerwear)",
          "Pair with neutral bottoms (white, beige, brown, black, or denim)",
          "Comfortable and breathable fabrics (cotton, linen, knit)",
          "Sneakers, sandals, or comfy shoes",
          "Accessories like tote bag, cap, or sunglasses to complete the look",
          "Feel free to mix & match!"
        ]
      }
    ],
    accessories: {
      title: "CHRISTMAS ACCESSORIES",
      badge: "🎅 Festive Goodies",
      text: "Bring your favorite Christmas-themed accessories, such as Santa hats, Christmas headbands, reindeer antlers, or any other festive goodies! ✨",
      options: [
        { id: "santa_hat", label: "Santa Hat", icon: "🎅", desc: "Classic red & white fluffy hat" },
        { id: "reindeer_antlers", label: "Reindeer Antlers", icon: "🦌", desc: "Cute Rudolph antlers" },
        { id: "xmas_headband", label: "Christmas Headband", icon: "🎄", desc: "Festive tree or bell headband" },
        { id: "festive_goodies", label: "Festive Accessories", icon: "✨", desc: "Holiday glasses, brooch, or bows" }
      ]
    }
  },
  giftExchange: {
    title: "CHRISTMAS GIFT EXCHANGE",
    subtitle: "It’s time to share a little love through our Christmas Gift Exchange! ✨",
    headline: "Here’s how it works:",
    philosophy: "Remember, it’s not about how much the gift costs, but the heart and thought behind it. A little gift can go a long way in making someone feel special! ❤️",
    callToAction: "So, get creative, choose something meaningful, and let’s spread some Christmas joy! 🎄🎁",
    rules: [
      {
        id: "budget",
        icon: "CircleDollarSign",
        tag: "Rule 01",
        label: "Gift Budget",
        value: "Rp 100,000",
        detail: "Keep it fair and thoughtful! Please aim as close to Rp 100,000 as possible so all members receive something of equal value."
      },
      {
        id: "wrapping",
        icon: "Package",
        tag: "Rule 02",
        label: "Wrapping Style",
        value: "Brown paper wrapping",
        detail: "Wrap your gift in plain brown craft paper with rustic twine or festive ribbon for vintage holiday charm."
      },
      {
        id: "guidelines",
        icon: "HeartHandshake",
        tag: "Rule 03",
        label: "Gift Rules",
        value: "Unisex gifts only — no food items, please!",
        detail: "Must be universally loved by anyone (boy or girl) and non-perishable. No perishable food, snacks, or drinks."
      }
    ],
    ideaSuggestions: [
      {
        category: "Home & Cozy Living",
        items: [
          "Scented Candle / Reed Diffuser (Warm vanilla, sandalwood, or cedar)",
          "Stainless Insulated Tumbler / Travel Mug (350ml - 500ml)",
          "Mini Ultrasonic Desk Humidifier with LED light"
        ]
      },
      {
        category: "Productivity & Lifestyle",
        items: [
          "Undated Hardcover Journal / Planner with Premium Pen",
          "Compact Card Game (e.g., Uno Flip, The Mind, Monopoly Deal)",
          "Minimalist Metal Phone & Tablet Desktop Stand"
        ]
      },
      {
        category: "Everyday Carry & Practical",
        items: [
          "Compact Automatic UV Protection Travel Umbrella",
          "Heavy-duty Canvas Tote Bag with zipper compartment",
          "Fast-charging Braided Multi-cable (Type-C & Lightning)"
        ]
      }
    ]
  }
};
```

---

## 5. Rincian Implementasi Komponen (Low-Level Blueprint)

### 5.1 Penanganan Aset Foto Lookbook
Salin kedua foto dari `src/assets/image/` ke `public/images/` agar dapat diakses melalui static URL path tanpa isu bundler Vite:
- `src/assets/image/day-1-dresscode.jpeg` ➔ `public/images/day-1-dresscode.jpeg`
- `src/assets/image/day-2-dresscode.jpeg` ➔ `public/images/day-2-dresscode.jpeg`

### 5.2 Desain Ulang `src/components/DressCodeCard.vue`
Komponen kartu dress code akan menampilkan:
1. **Badges & Header**:
   - Badge pill: `DAY 1` / `DAY 2`.
   - Title: `CASUAL & COLORFUL` (Day 1) / `CASUAL MAROON` (Day 2).
   - Subtitle instruction: *"Wear white, brown, red, or green"* (Day 1) / *"Maroon as the main statement paired with neutral bottoms"* (Day 2).
2. **Tampilan Foto Lookbook Preview**:
   - Gambar lookboard bergaya majalah editorial dengan border emas tipis.
   - Tombol overlay *"Tap to Enlarge Lookbook 🔍"* yang membuka modal popup resolusi penuh.
3. **Color Palette Swatches Bar**:
   - Menampilkan bulatan warna interaktif dengan tooltip/label nama warna.
4. **Vibe & Style Notes**:
   - Penjelasan *"The Vibe"* dan bullet checklist *"Style Notes"* langsung dari poster.

### 5.3 Modal Zoom Lookbook (`src/components/LookbookModal.vue`)
Komponen modal pop-up baru untuk menampilkan gambar lookbook secara penuh ketika teman-teman DATE 13 ingin melihat inspirasi pakaian dan membaca teks detail yang ada di poster.

### 5.4 Penambahan Meeting Point & Destination pada `EventDetails.vue`
Grid 2 kolom yang membedakan:
1. **Gathering & Meeting Point**:
   - `⏰ Gathering Time: 6:30 AM WIB`
   - `📍 Meeting Point: McDonald’s Grand Kota Bintang`
2. **Destination Venue**:
   - `🏡 Destination: Villa Nirmala Hills, Ciawi`
   - Tombol Google Maps langsung menuju lokasi villa.

### 5.5 Penambahan Sesi Tips Perjalanan (Sunglasses & Pack Light)
Tepat di bawah Dress Code:
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <!-- Sunglasses Card -->
  <div class="rounded-2xl border border-gold-400/30 bg-maroon-900/80 p-5 backdrop-blur-sm">
    <div class="flex items-center gap-3">
      <span class="text-2xl">🕶️</span>
      <div>
        <h4 class="font-serif font-bold text-cream-50 text-sm">DON’T FORGET YOUR SUNGLASSES!</h4>
        <p class="text-xs text-cream-200/80 mt-1">Bring your sunglasses for our photo session and to complete your getaway look! 😎</p>
      </div>
    </div>
  </div>

  <!-- Pack Light Card -->
  <div class="rounded-2xl border border-gold-400/30 bg-maroon-900/80 p-5 backdrop-blur-sm">
    <div class="flex items-center gap-3">
      <span class="text-2xl">🧳</span>
      <div>
        <h4 class="font-serif font-bold text-cream-50 text-sm">PACK LIGHT!</h4>
        <p class="text-xs text-cream-200/80 mt-1">No suitcases, please! Bring a backpack or a small bag with your overnight essentials.</p>
      </div>
    </div>
  </div>
</div>
```

---

## 6. Action Plan & Eksekusi Pengerjaan

1. **Step 1:** Salin gambar lookbook ke folder `public/images/`.
2. **Step 2:** Perbarui `src/data/eventData.js` dengan data model lengkap dari `page-2-rev-1.txt` dan `page-3-rev-1.txt`.
3. **Step 3:** Buat komponen `src/components/LookbookModal.vue` untuk popup tampilan lookbook resolusi tinggi.
4. **Step 4:** Perbarui `src/components/DressCodeCard.vue` untuk menampilkan foto preview lookbook, swatches warna, dan style notes.
5. **Step 5:** Perbarui `src/components/EventDetails.vue` untuk menyertakan Meeting Point (McDonald’s Grand Kota Bintang), reminder baru, kartu Sunglasses, dan kartu Pack Light.
6. **Step 6:** Perbarui `src/components/GiftExchange.vue` sesuai revisi judul, aturan tegas unisex & non-food, dan pesan penutup baru.
7. **Step 7:** Uji build produksi via `npm run build` dan verifikasi tampilan di browser lokal.

---

## 7. Checklist Penerimaan (Acceptance Criteria)

- [ ] Dress Code Day 1 diganti dari Putih polos menjadi **Casual & Colorful (White, Brown, Red, Green)**.
- [ ] Foto `day-1-dresscode.jpeg` dan `day-2-dresscode.jpeg` terpasang di website secara elegan dan dapat dilihat dengan jelas.
- [ ] Titik kumpul **McDonald’s Grand Kota Bintang** tercantum jelas terpisah dari destinasi **Villa Nirmala Hills, Ciawi**.
- [ ] Pengingat kacamata hitam (**Sunglasses**) dan aturan bawaan (**Pack Light**) tampil rapi di bagian event details.
- [ ] Aturan tukar kado ter-update: **Unisex gifts only — no food items, please!** beserta quote baru.
- [ ] Seluruh teks menggunakan bahasa Inggris konsisten (*full English*).
- [ ] Build project sukses tanpa error (`npm run build`).
