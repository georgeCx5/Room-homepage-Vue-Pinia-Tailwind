<script>
import { useGalleryStore } from '@/stores/gallery'
import { mapStores } from 'pinia'

import DataGallery from '@/components/DataGallery.vue'

import logo from '@/assets/images/logo.svg?url'
import imgDark from '@/assets/images/image-about-dark.jpg'
import imgLight from '@/assets/images/image-about-light.jpg'

export default {
  data() {
    return {
      logo,
      imgDark,
      imgLight,
    }
  },
  components: {
    DataGallery,
  },
  computed: {
    ...mapStores(useGalleryStore),
  }
}
</script>
<template>
  <body class=" relative flex flex-col items-center text-neo-black font-spartan">
    <!-- <button @keydown.left="galleryStore.decrement()" @keydown.right="galleryStore.increment()" class=" absolute w-full h-full focus:outline-none cursor-default">
    </button> -->
    <nav class=" flex gap-28 w-full max-w-[425px]">
      <img :src="logo" alt="">
    </nav>
    <main class=" w-full max-w-[425px]">
      <section>
        <DataGallery :data-index="galleryStore.counter" />
      </section>
      <section class=" flex flex-col">
        <img :src="imgDark" alt="imgDark" draggable="false">
        <div class=" relative flex flex-col gap-4 px-8 pt-12 pb-10">
          <h2 class=" text-[14px] leading-[22px] tracking-[5.83px] font-bold uppercase">
            About our furniture</h2>
          <p class=" text-neo-dark-gray text-[16px] leading-[22px] tracking-[-.33px] font-medium">
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <img :src="imgLight" alt="imgLight" draggable="false">
      </section>
    </main>
  </body>
</template>