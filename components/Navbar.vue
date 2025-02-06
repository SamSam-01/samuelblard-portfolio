<template>
  <nav class="hidden md:flex fixed top-4 left-4 bottom-4 z-50">
    <div class="flex flex-col justify-between h-full p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg">
      <div class="w-full flex justify-center">
        <div
          class="text-white text-xl font-bold uppercase"
          style="writing-mode: vertical-lr; text-orientation: upright;"
        >
          Samuel Blard
        </div>
      </div>
      <div class="flex flex-col items-start space-y-6">
        <a
          href="#whoami"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.894 5.657 2.343M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            A propos de moi
          </span>
        </a>

        <a
          href="#competences"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01-6.16 0" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7.5" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Compétences
          </span>
        </a>

        <a
          href="#projects"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Projects
          </span>
        </a>

        <a
          href="#experiences"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V5a4 4 0 018 0v2h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1z" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Experiences
          </span>
        </a>
      </div>
    </div>
  </nav>

  <nav class="md:hidden fixed top-4 left-4 right-4 z-50">
    <div class="flex items-center justify-between p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg">
      <div class="text-white text-xl font-bold uppercase">
        Samuel Blard
      </div>
      <button @click="menuOpen = !menuOpen" class="p-2 text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div v-if="menuOpen" class="mt-2 p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg flex justify-around">
        <a href="#whoami" class="flex flex-col items-center text-white hover:text-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.894 5.657 2.343M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-xs">Whoami</span>
        </a>

        <a href="#competences" class="flex flex-col items-center text-white hover:text-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01-6.16 0" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7.5" />
          </svg>
          <span class="text-xs">Compétences</span>
        </a>

        <a href="#projects" class="flex flex-col items-center text-white hover:text-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
          </svg>
          <span class="text-xs">Projects</span>
        </a>

        <a href="#experiences" class="flex flex-col items-center text-white hover:text-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V5a4 4 0 018 0v2h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1z" />
          </svg>
          <span class="text-xs">Experiences</span>
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
