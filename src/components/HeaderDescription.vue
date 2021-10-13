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
        <span>HTML5/CSS3/JS/TypeScript</span>
      </li>
      <li class="text-teal-900">
        <span>Tailwind</span>
      </li>
    </ul>
    <div class="flex flex-row space-x-4 pt-4">
      <a target="_blank"
         href="https://www.github.com/SempaiEcchi"> <img
        class=" p-0 m-0 float-right shadow-xl h-auto rounded-full "
        width="50"
        src="../assets/github.png"
        alt="Nah no portrait image, im a weeb"
      /></a>
      <a target="_blank"
         href="https://www.upwork.com/ag/digitalnomadacademy/"> <img
        class=" p-0 m-0 float-right shadow-xl h-auto rounded-full "
        width="50"
        src="../assets/upwork.png"
        alt="Nah no portrait image, im a weeb"
      /></a>
    </div>
  </div>

</template>
<script lang="ts">
export default {
  name: 'HeaderDescription'
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
