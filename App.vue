<script>
import { useGalleryStore } from '@/stores/gallery'
import { mapStores } from 'pinia'

import DataGallery from '@/components/DataGallery.vue'
import NavBtn from './components/NavBtn.vue'
import NavBtnDT from './components/NavBtnDT.vue'

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
    NavBtnDT,
  },
  computed: {
    ...mapStores(useGalleryStore),
  }
}
</script>
<template>
  <body class=" relative flex flex-col items-center text-neo-black font-spartan">
    <header class=" relative w-full max-w-[425px] DT:max-w-[1920px] z-20">
      <nav
        class=" absolute flex justify-center DT:justify-start items-center DT:gap-14 DTL:gap-20 w-full DT:px-16 py-12 select-none">
        <div class=" absolute left-0 flex DT:hidden items-center px-6">
          <button @click="isNavOpen = !isNavOpen" class=" fixed focus:outline-none z-20">
            <img v-show="!isNavOpen" :src="navToOpen" alt="navToOpen">
            <img v-show="isNavOpen" :src="navToClose" alt="navToClose">
          </button>
        </div>
        <img :src="logo" alt="logo">
        <!-- NavBar Desktop -->
        <div class=" hidden DT:flex gap-5 DTL:gap-8">
          <NavBtnDT btn-text="home" />
          <NavBtnDT btn-text="shop" />
          <NavBtnDT btn-text="about" />
          <NavBtnDT btn-text="contact" />
        </div>
        <!-- NavBar Mobile -->
        <div v-show="isNavOpen"
          class=" fixed flex DT:hidden flex-row-reverse items-center gap-8 w-full max-w-[425px] h-[110px] px-6 bg-neo-white">
          <NavBtn btn-text="home" />
          <NavBtn btn-text="shop" />
          <NavBtn btn-text="about" />
          <NavBtn btn-text="contact" />
        </div>
      </nav>
    </header>
    <main class=" relative w-full max-w-[425px] DT:max-w-[1920px]">
      <!-- Dark Layer -->
      <div v-show="isNavOpen" class=" absolute DT:hidden w-full h-full bg-neo-black bg-opacity-50 z-10"></div>
      <section>
        <DataGallery :data-index="galleryStore.counter" />
      </section>
      <section class=" flex flex-col DT:flex-row">
        <img :src="imgDark" alt="imgDark" draggable="false">
        <div class=" relative flex flex-col gap-4 DTL:gap-6 px-8 DT:px-12 DTL:px-24 DT:py-16 pt-12 pb-10">
          <h2 class=" text-[14px] DT:text-[16px] leading-[22px] tracking-[5.83px] font-bold uppercase">
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