<template>
  <div class="container mx-auto mt-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div class="bg-yellow-200 shadow-xl justify-center h-48 rounded-3xl flex flex-col justify-around p-5">
        <h3 class="text-4xl mb-5 font-bold text-teal-900 text-center">Projects created</h3>
        <p class="text-3xl font-bold text-teal-900" id="projects_count">0</p>
        <p class="text-3xl"></p>
      </div>

      <div class="bg-yellow-200 shadow-xl justify-center h-48 rounded-3xl flex flex-col justify-around p-5">
        <h3 class="text-4xl mb-5 font-bold text-teal-900 text-center">Satisfied clients</h3>
        <p class="text-3xl font-bold text-teal-900" id="clients_count">10</p>
        <p class="text-3xl"></p>
      </div>
      <div class=" bg-yellow-200 shadow-xl  justify-center h-48 rounded-3xl flex flex-col justify-around p-5">
        <h3 class="text-4xl mb-5 font-bold text-teal-900 text-center">Animes watched</h3>
        <p class="text-3xl font-bold text-teal-900" id="animes_watched">1000</p>
        <p class="text-3xl"></p>
      </div>
      <div class="bg-yellow-200 shadow-xl justify-center h-48 rounded-3xl flex flex-col justify-around p-5">
        <h3 class="text-4xl mb-5 font-bold text-teal-900 text-center">Energy drinks consumed</h3>
        <p class="text-3xl font-bold text-teal-900" id="suicide_attempts">0</p>
        <p class="text-3xl"></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'StatsWidget'
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
