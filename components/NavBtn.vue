<script>
export default {
   data() {
      return {

      }
   },
   props: {
      btnText: {
         String,
         default: 'Empty',
      }
   }
}
</script>
<template>
   <button
      class=" text-[16px] leading-[15px] tracking-[-.67px] font-semibold decoration-2 hover:underline underline-offset-4">
      {{ btnText }}
   </button>
</template>