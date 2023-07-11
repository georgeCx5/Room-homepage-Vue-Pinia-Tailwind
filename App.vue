<script>
import { useGalleryStore } from '@/stores/gallery'
import { mapStores } from 'pinia'

import DataGallery from '@/components/DataGallery.vue'
import NavBtn from './components/NavBtn.vue'

import logo from '@/assets/images/logo.svg?url'
import navToOpen from '@/assets/images/icon-hamburger.svg?url'
import navToClose from '@/assets/images/icon-close.svg?url'
import imgDark from '@/assets/images/image-about-dark.jpg'
import imgLight from '@/assets/images/image-about-light.jpg'

export default {
  data() {
    return {
      logo,
      navToOpen,
      navToClose,
      imgDark,
      imgLight,
      isNavOpen: false,
    }
  },
  components: {
    DataGallery,
    NavBtn,
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
    <header class=" relative w-full max-w-[425px]">
      <nav class=" absolute flex justify-center items-center w-full py-12 select-none z-10">
        <div class=" absolute left-0 flex items-center px-6">
          <button @click="isNavOpen = !isNavOpen" class=" fixed focus:outline-none z-20">
            <img v-show="!isNavOpen" :src="navToOpen" alt="navToOpen">
            <img class=" z-20" v-show="isNavOpen" :src="navToClose" alt="navToClose">
          </button>
        </div>
        <img :src="logo" alt="logo">
        <div v-show="isNavOpen"
          class=" fixed flex flex-row-reverse items-center gap-8 w-full max-w-[425px] h-[110px] px-6 bg-neo-white">
          <NavBtn btn-text="Home" />
          <NavBtn btn-text="Shop" />
          <NavBtn btn-text="About" />
          <NavBtn btn-text="Contact" />
        </div>
      </nav>
    </header>
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