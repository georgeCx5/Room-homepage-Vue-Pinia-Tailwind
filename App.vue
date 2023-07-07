<script>
import imgDark from '@/assets/images/image-about-dark.jpg'
import imgLight from '@/assets/images/image-about-light.jpg'

export default {
  data() {
    return {
      imgDark,
      imgLight,
    }
  }
}
</script>
<template>
  <body class=" flex flex-col items-center font-spartan">
    <nav></nav>
    <main class=" w-full max-w-[425px]">
      <section class=" flex flex-col">
        <img :src="imgDark" alt="imgDark">
        <div class=" flex flex-col gap-4 px-8 pt-12 pb-10">
          <h2 class=" text-[14px] leading-[22px] tracking-[5.83px] font-bold uppercase">
            About our furniture</h2>
          <p class=" text-neo-dark-gray text-[16px] leading-[22px] tracking-[-.33px] font-medium">
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <img :src="imgLight" alt="imgLight">
      </section>
    </main>
  </body>
</template>