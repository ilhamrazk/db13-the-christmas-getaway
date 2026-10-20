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
      emoji: "🕶️",
      title: "DON’T FORGET YOUR SUNGLASSES!",
      text: "Bring your sunglasses for our photo session and to complete your getaway look! 😎"
    },
    {
      id: "pack_light",
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
          { name: "White", hex: "#F4F1EA", border: "border-slate-300", textDark: true },
          { name: "Brown", hex: "#5C3D2E", border: "border-[#402A1F]", textDark: false },
          { name: "Red", hex: "#8C1D24", border: "border-[#5E1217]", textDark: false },
          { name: "Green", hex: "#5E7058", border: "border-[#3F4D3B]", textDark: false }
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
          { name: "Maroon", hex: "#731822", isMain: true, border: "border-red-950", textDark: false },
          { name: "White", hex: "#F4F1EA", border: "border-slate-300", textDark: true },
          { name: "Beige", hex: "#967D68", border: "border-[#6E5948]", textDark: false },
          { name: "Brown", hex: "#4D382B", border: "border-[#33241C]", textDark: false },
          { name: "Black", hex: "#1F1F1F", border: "border-black", textDark: false }
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
  },
  quotes: [
    {
      text: "Christmas isn’t a season. It’s a feeling.",
      author: "Edna Ferber"
    }
  ]
};
