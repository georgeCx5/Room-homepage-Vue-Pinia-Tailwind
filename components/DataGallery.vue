<script>
import { useGalleryStore } from '@/stores/gallery'
import { mapStores } from 'pinia'

import imgOne from '@/assets/images/mobile-image-hero-1.jpg'
import imgOneDT from '@/assets/images/desktop-image-hero-1.jpg'
import imgTwo from '@/assets/images/mobile-image-hero-2.jpg'
import imgTwoDT from '@/assets/images/desktop-image-hero-2.jpg'
import imgThree from '@/assets/images/mobile-image-hero-3.jpg'
import imgThreeDT from '@/assets/images/desktop-image-hero-3.jpg'
import arrow from '@/assets/images/icon-arrow.svg?url'
import arrowLeft from '@/assets/images/icon-angle-left.svg?url'
import arrowRight from '@/assets/images/icon-angle-right.svg?url'

export default {
   data() {
      return {
         data: [
            {
               img: imgOne,
               imgDT: imgOneDT,
               header: 'Discover innovative ways to decorate',
               main: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
            },
            {
               img: imgTwo,
               imgDT: imgTwoDT,
               header: 'We are available all across the globe',
               main: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today."
            },
            {
               img: imgThree,
               imgDT: imgThreeDT,
               header: 'Manufactured with the best materials',
               main: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
            },
         ],
         arrow,
         arrowLeft,
         arrowRight,
      }
   },
   computed: {
      ...mapStores(useGalleryStore),
   },
   props: {
      dataIndex: {
         Number,
         default: 0,
      }
   }
}
</script>
<template>
   <div>
      <div class=" relative">
         <img class=" DT:hidden w-full" :src="data[dataIndex].img" :alt="`image ${dataIndex + 1}`">
         <img class=" hidden DT:block w-full" :src="data[dataIndex].imgDT" :alt="`image ${dataIndex + 1}`">
         <div class=" absolute bottom-0 right-0 flex justify-center items-center w-[112px] h-[56px]">
            <button @click="galleryStore.decrement()"
               class=" flex flex-col justify-center items-center h-full w-1/2 bg-neo-black hover:bg-neo-very-dark-gray">
               <img class=" h-[18px]" :src="arrowLeft" alt="arrowLeft">
            </button>
            <button @click="galleryStore.increment()"
               class=" flex flex-col justify-center items-center h-full w-1/2 bg-neo-black hover:bg-neo-very-dark-gray">
               <img class=" h-[18px]" :src="arrowRight" alt="arrowRight">
            </button>
         </div>
      </div>
      <div class=" flex flex-col gap-10 px-8 pt-[60px] pb-[72px]">
         <div class=" flex flex-col gap-4">
            <h1 class=" text-[40px] leading-[37px] tracking-[-1.67px] font-semibold">
               {{ data[dataIndex].header }}</h1>
            <p class=" text-neo-dark-gray text-[16px] leading-[22px] tracking-[-.33px] font-medium">{{
               data[dataIndex].main
            }}
            </p>
         </div>
         <button class=" flex items-center gap-8 hover:opacity-50">
            <span class=" text-[15px] leading-[16px] tracking-[12.5px] font-medium uppercase">
               Shop now</span>
            <img class=" w-10" :src="arrow" alt="arrow">
         </button>
      </div>
   </div>
</template>