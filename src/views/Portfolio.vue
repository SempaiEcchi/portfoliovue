<template>

  <div class="max-w-screen-xl m-auto">
    <div
      class="bg-gray-100 shadow-xl container m-auto mx-auto mt-8 p-14 rounded-3xl text-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      <HeaderDescription/>
      <SkewedImage/>
    </div>
    <StatsWidget/>
    <YoutubeVideos/>
  </div>

</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import SkewedImage from '@/components/SkewedImage.vue'
import HeaderDescription from '@/components/HeaderDescription.vue'
import animatef from '@/components/animation.ts'
import StatsWidget from '@/components/StatsWidget.vue'
import YoutubeVideos from '@/components/YoutubeVideos.vue'

function extracted() {
  const duration = 1777
  animatef(document.getElementById('projects_count'), 0, 10, duration)
  animatef(document.getElementById('clients_count'), 0, 4, duration)
  animatef(document.getElementById('suicide_attempts'), 0, 10000, duration)
  animatef(document.getElementById('animes_watched'), 0, 1000, duration)
}

@Options({
  components: {YoutubeVideos, StatsWidget, HeaderDescription, SkewedImage},
  mounted: () => {
    console.log('mounted')
    extracted()
  }
})
export default class Portfolio extends Vue {

}
</script>
<style scoped>
.about {
  width: 100%;
}

.parentScale {
  image-rendering: auto; /* Firefox */

  will-change: transform;
  animation: parent-scale 2s ease-in-out;
  animation-fill-mode: forwards;

}

@keyframes parent-scale {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}

</style>
