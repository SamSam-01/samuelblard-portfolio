<template>
  <div @mousemove="handleMouseMove" class="main-container">
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <Navbar></Navbar>
    <div>
      <Description></Description>
      <Competences></Competences>
      <Projects></Projects>
      <Experiences></Experiences>
    </div>
    <SpeedInsights/>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Description from './components/Description.vue';
import Navbar from '~/components/Navbar.vue';
import Competences from '~/components/Competences.vue';
import Experiences from '~/components/Experiences.vue';
import Projects from '~/components/Projects.vue';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

export default {
  setup() {
    const mainContainer = ref(null);

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, scrollY } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = ((clientY + scrollY) / document.documentElement.scrollHeight) * 100;

      if (mainContainer.value) {
        mainContainer.value.style.setProperty('--mouse-x', `${xPercent}%`);
        mainContainer.value.style.setProperty('--mouse-y', `${yPercent}%`);
      }
    };

    onMounted(() => {
      mainContainer.value = document.querySelector('.main-container');
    });

    onBeforeUnmount(() => {
      mainContainer.value = null;
    });

    return {
      handleMouseMove,
    };
  },
  components: {
    Description,
    Navbar,
    Competences,
    Experiences,
  },
};
</script>

<style scoped>
.main-container {
  min-height: 100vh; /* Permettre le défilement si le contenu dépasse la hauteur de la fenêtre */
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(101, 255, 133, 0.66), rgba(14, 120, 0, 0.21) 20%);
  transition: background 0.2s;
}
Navbar {
  z-index: 10000;
}
</style>

<style>
:root {
  --mouse-x: 50%;
  --mouse-y: 50%;
}

body {
  background: #000000; /* couleur de fond par défaut */
  margin: 0;
  padding: 0;
}
</style>
