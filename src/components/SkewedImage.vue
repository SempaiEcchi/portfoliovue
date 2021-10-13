<template>
  <div class="flex flex-col justify-center">
    <div class="relative py-3 max-w-xl mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-pink-400 to-green-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-yellow-200 shadow-lg rounded-3xl sm:px-20 sm:py-12 ">

        <div class="flex1">
          <img
            class="w-32 mx-auto shadow-xl h-auto rounded-full "
            src="../assets/logo.jpg"
            alt="Nah no portrait image, im a weeb"
          />
        </div>
        <div class="text-center mt-5">
          <p class="text-xl sm:text-2xl font-semibold text-teal-900">
            Leo Radočaj
          </p>
          <p class="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block">
            Professional Freelance Cross-Platform developer with 2 years of experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SkewedImage'
}
</script>
<style scoped>

@keyframes parent-scale {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}

</style>
