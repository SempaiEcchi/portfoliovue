<template>
  <div
    class="bg-gray-100 shadow-xl container m-auto mx-auto mt-12 p-14 rounded-2xl text-center flex flex-col  ">
    <p class="text-4xl font-bold">Projects</p>
    <div class="flex flex-row pt-4 pb-24">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8puoToFn-b0" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8puoToFn-b0" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'YoutubeVideos'
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
