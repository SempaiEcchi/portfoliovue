<template>
  <div class="flex flex-col justify-center text-left">
    <h1 class="text-5xl mb-5 font-bold text-teal-900 text-center">Web App & Mobile App Software Developer</h1>
    <p class="text-xl">I live in Pula, Croatia where I study Information Technology. For the past two and
      a half
      years
      I've taken programming as a hobby and got experienced in following technologies: </p>
    <ul class='list-outside list-disc mt-2 ml-3.5 font-bold '>
      <li class="text-teal-900">
        <span>Flutter/Dart</span>
      </li>
      <li class="text-teal-900">
        <span>Android Development</span>
      </li>
      <li class="text-teal-900">
        <span>Kotlin, Ktor</span>
      </li>
      <li class="text-teal-900">
        <span>Node.js</span>
      </li>
      <li class="text-teal-900">
        <span>Firebase</span>
      </li>
      <li class="text-teal-900">
        <span>Bitrise CI/CD</span>
      </li>
      <li class="text-teal-900">
        <span>HTML5/CSS3/JS/TypeScript</span>
      </li>
      <li class="text-teal-900">
        <span>Tailwind</span>
      </li>
    </ul>
    <p class="text-xl mt-2">Im versed in creating pixel perfect apps that use Firebase as a backend solution, but I can
      deploy a
      custom ktor backend with ease.</p>
    <SocialMediaIconsWidget/>
  </div>

</template>
<script lang="ts">
import SocialMediaIconsWidget from '@/components/SocialMediaIconsWidget.vue'

export default {
  name: 'HeaderDescription',
  components: {SocialMediaIconsWidget}
}
</script>
<style scoped>

span {
  font-family: Avenir, Helvetica, Arial, sans-serif, sans-serif;
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
