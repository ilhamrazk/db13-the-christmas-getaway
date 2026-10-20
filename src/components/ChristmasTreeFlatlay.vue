<script setup>
// Christmas Tree Flatlay (Knolling Style)
// Rendered from authentic studio-grade holiday photography inspired by reference/web design.jfif
</script>

<template>
  <div class="relative mx-auto flex flex-col items-center justify-center select-none py-2 max-w-sm sm:max-w-md">
    
    <!-- Warm Ambient Halo Glow behind the Tree -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-festive-sand/60 blur-3xl pointer-events-none"></div>

    <!-- Seamless Tree Container (No borders, blends directly into background) -->
    <div class="relative group flex flex-col items-center transition-all duration-500">
      
      <!-- Top Star Twinkle Accent -->
      <div class="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <img src="/images/figma/christmas-star.svg" alt="Star" class="w-7 h-7 animate-pulse drop-shadow-md" />
      </div>

      <!-- Vector Christmas Tree from Figma Library -->
      <div class="relative z-10 pt-2 pb-1 transition-transform duration-700 ease-out group-hover:scale-105">
        <img
          src="/images/figma/christmas-tree-decorated.svg"
          alt="Decorated Christmas Tree Illustration"
          class="w-64 sm:w-76 md:w-84 h-auto object-contain drop-shadow-lg"
          loading="eager"
        />
      </div>

      <!-- Festive Gift Stack & Ornaments at the Base of the Tree -->
      <div class="relative z-10 -mt-6 sm:-mt-8 flex items-center justify-center gap-3 w-full">
        <img
          src="/images/figma/dolty-presents.svg"
          alt="Presents under tree"
          class="h-16 sm:h-20 w-auto object-contain drop-shadow-md transition-transform duration-500 hover:scale-110"
        />
        <img
          src="/images/figma/gingerbread-man.svg"
          alt="Gingerbread Man"
          class="h-10 sm:h-12 w-auto object-contain drop-shadow-sm -rotate-6 transition-transform duration-500 hover:rotate-6"
        />
        <img
          src="/images/figma/candy-canes.svg"
          alt="Candy Canes"
          class="h-12 sm:h-14 w-auto object-contain drop-shadow-sm rotate-12 transition-transform duration-500 hover:-rotate-6"
        />
      </div>

    </div>

  </div>
</template>
