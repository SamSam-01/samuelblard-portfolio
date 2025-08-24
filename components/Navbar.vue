<template>
  <nav class="hidden md:flex fixed top-4 left-4 bottom-4 z-50">
    <div class="flex flex-col justify-between h-full p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg hover:bg-white/40 transition-all duration-500">
      <!-- Logo/Titre -->
      <div class="w-full flex justify-center">
        <div
          class="text-white text-xl font-bold uppercase cursor-pointer hover:text-green-300 transition-colors duration-300"
          style="writing-mode: vertical-lr; text-orientation: upright;"
          @click="scrollToTop"
        >
          Samuel Blard
        </div>
      </div>
      
      <!-- Navigation Links -->
      <div class="flex flex-col items-start space-y-6">
        <a
          href="#whoami"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full hover:shadow-lg hover:scale-105"
          @click="handleNavClick"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.894 5.657 2.343M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-medium">
            {{ $t('navbar.about') }}
          </span>
        </a>

        <a
          href="#competences"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full hover:shadow-lg hover:scale-105"
          @click="handleNavClick"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01-6.16 0" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7.5" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-medium">
            {{ $t('navbar.competences') }}
          </span>
        </a>

        <a
          href="#projects"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full hover:shadow-lg hover:scale-105"
          @click="handleNavClick"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-medium">
            {{ $t('navbar.projects') }}
          </span>
        </a>

        <a
          href="#experiences"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full hover:shadow-lg hover:scale-105"
          @click="handleNavClick"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V5a4 4 0 018 0v2h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1z" />
            </svg>
          </div>
          <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-medium">
            {{ $t('navbar.experiences') }}
          </span>
        </a>
        
        <!-- Language Switcher avec le même style -->
        <!--
        <div class="mt-4">
          <LanguageSwitcher />
        </div>
        -->
      </div>
    </div>
  </nav>

  <!-- Mobile Navigation -->
  <nav class="md:hidden fixed top-4 left-4 right-4 z-50">
    <div class="flex items-center justify-between p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg hover:bg-white/40 transition-all duration-500">
      <div 
        class="text-white text-xl font-bold uppercase cursor-pointer hover:text-green-300 transition-colors duration-300"
        @click="scrollToTop"
      >
        Samuel Blard
      </div>
      <button @click="menuOpen = !menuOpen" class="p-2 text-white focus:outline-none hover:text-green-300 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    <transition 
      name="slide-fade"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="menuOpen" class="mt-2 p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <a href="#whoami" class="flex flex-col items-center text-white hover:text-green-300 transition-all duration-300 p-3 rounded-xl hover:bg-white/20" @click="handleMobileNavClick">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.894 5.657 2.343M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-xs font-medium">{{ $t('navbar.about') }}</span>
          </a>

          <a href="#competences" class="flex flex-col items-center text-white hover:text-green-300 transition-all duration-300 p-3 rounded-xl hover:bg-white/20" @click="handleMobileNavClick">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01-6.16 0" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7.5" />
            </svg>
            <span class="text-xs font-medium">{{ $t('navbar.competences') }}</span>
          </a>

          <a href="#projects" class="flex flex-col items-center text-white hover:text-green-300 transition-all duration-300 p-3 rounded-xl hover:bg-white/20" @click="handleMobileNavClick">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            <span class="text-xs font-medium">{{ $t('navbar.projects') }}</span>
          </a>

          <a href="#experiences" class="flex flex-col items-center text-white hover:text-green-300 transition-all duration-300 p-3 rounded-xl hover:bg-white/20" @click="handleMobileNavClick">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V5a4 4 0 018 0v2h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1z" />
            </svg>
            <span class="text-xs font-medium">{{ $t('navbar.experiences') }}</span>
          </a>
        </div>
        
        <div class="flex justify-center">
          <LanguageSwitcher />
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

const menuOpen = ref(false);

// Fonction pour faire défiler vers le haut
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Fonction pour gérer les clics sur la navigation
const handleNavClick = () => {
  // Optionnel : ajouter des effets sonores ou des animations
  console.log('Navigation clicked');
};

// Fonction pour gérer les clics sur la navigation mobile
const handleMobileNavClick = () => {
  menuOpen.value = false; // Fermer le menu mobile après un clic
};
</script>

<style scoped>
/* Animation pour le menu mobile */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Effet de brillance au survol */
.group:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.group:hover::before {
  left: 100%;
}
</style>
