<template>
  <div
    class="bg-gray-100 shadow-xl container m-auto mx-auto mt-12 p-14 rounded-3xl text-center flex flex-col  ">
    <p class="text-4xl font-bold">Portfolio</p>
    <!--    <div class="bg-yellow-200">-->
    <!--      <carousel :items-to-show="1">-->
    <!--        <slide v-for="slide in 10" :key="slide">-->
    <!--          {{ slide }}-->
    <!--        </slide>-->

    <!--        <template #addons>-->
    <!--          <navigation/>-->
    <!--          <pagination/>-->
    <!--        </template>-->
    <!--      </carousel>-->
    <!--    </div>-->

    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-8">

        <a target="_blank"
           href="https://www.upwork.com/ag/digitalnomadacademy/">
          <div class="flex justify-center flex-col text-6xl   p-6 bg-gray-100">
            <img class="rounded-2xl" src="../assets/kindred.png">
            <p class="text-2xl pt-4">Kindred</p>

          </div>
        </a>
        <a target="_blank"
           href="https://apps.apple.com/hr/app/intentions/id1554437550">
          <div class="flex justify-center flex-col text-6xl     p-6 bg-gray-100">
            <img class="rounded-2xl" src="../assets/intentions.jpg">
            <p class="text-2xl pt-4">Intentions</p>

          </div>
        </a>
        <a target="_blank"
           href="https://app.upmycontent.com">
          <div class="flex justify-center flex-col text-6xl     p-6 bg-gray-100">
            <img class="rounded-2xl" src="../assets/umc.png">
            <p class="text-2xl pt-4">Up My Content</p>
          </div>
        </a>
        <a target="_blank"
           href="https://www.youtube.com/watch?v=8puoToFn-b0">
          <div class="flex justify-center flex-col text-6xl     p-6 bg-gray-100">
            <img class="rounded-2xl" src="../assets/mathboss.png">
            <p class="text-2xl pt-4">Math Boss</p>
          </div>
        </a>
      </div>
    </div>
    <p>And much much more...</p>

  </div>
</template>
<script lang="ts">
// import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  name: 'YoutubeVideos'
  // components: {
  //   Carousel,
  //   Slide,
  //   Pagination,
  //   Navigation
  // }
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
