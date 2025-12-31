<template>
  <div ref="mainContainer" class="main-container">
    <Link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <SpeedInsights />
    <Navbar />
    <div>
      <Description id="whoami" />
      <Competences id="competences" />
      <Projects id="projects" />
      <Experiences id="experiences" />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

const { locale } = useI18n()

useHead({
  title: 'Samuel BLARD',
  htmlAttrs: {
    lang: locale
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ]
})

useSeoMeta({
  description: () => locale.value === 'fr' 
    ? 'Samuel BLARD est un développeur Fullstack spécialisé dans le développement VueJS, ReactJS et NodeJS' 
    : 'Samuel BLARD is a Fullstack developer specialized in VueJS, ReactJS and NodeJS development',
})

// Mouse Gradient Logic
const { mainContainer } = useMouseGradient()
// Note: handleMouseMove is automatically attached via the composable's onMounted/event listener
// We can remove the @mousemove from the template as usage of window event listener in composable is cleaner for global effects
// UPDATE: The original code used @mousemove on the div. The composable I wrote uses window listener.
// However, the transparency/gradient effect seems to rely on the container.
// Let's stick to the composable's window listener which is generally better for this "spotlight" effect.
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(101, 255, 133, 0.66), rgba(14, 120, 0, 0.21) 20%);
  transition: background 0.2s;
}

@media (max-width: 768px) {
  .main-container {
    background: rgba(14, 120, 0, 0.21); /* Retire le radial-gradient pour les appareils mobiles */
  }
}
</style>

<style>
:root {
  --mouse-x: 50%;
  --mouse-y: 50%;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #000000;
  margin: 0;
  padding: 0;
}
</style>
