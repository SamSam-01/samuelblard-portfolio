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
        <NavButton
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          :icon="link.icon"
          :label="$t(link.labelKey)"
          @click="handleNavClick"
        />
        
        <!-- Language Switcher -->
        <div class="mt-4">
          <LanguageSwitcher />
        </div>
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
        <Icon name="heroicons:bars-3" class="w-6 h-6" />
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
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="flex flex-col items-center text-white hover:text-green-300 transition-all duration-300 p-3 rounded-xl hover:bg-white/20" @click="handleMobileNavClick">
            <Icon :name="link.icon" class="w-6 h-6 mb-2 transition-transform duration-300 hover:scale-110" />
            <span class="text-xs font-medium">{{ $t(link.labelKey) }}</span>
          </a>
        </div>
        
        <div class="mt-4">
          <LanguageSwitcher />
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const menuOpen = ref(false)

const navLinks = [
  { href: '#whoami', icon: 'heroicons:user', labelKey: 'navbar.about' },
  { href: '#competences', icon: 'heroicons:cpu-chip', labelKey: 'navbar.competences' },
  { href: '#projects', icon: 'heroicons:folder', labelKey: 'navbar.projects' },
  { href: '#experiences', icon: 'heroicons:briefcase', labelKey: 'navbar.experiences' },
]

// Fonction pour faire défiler vers le haut
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Fonction pour gérer les clics sur la navigation
const handleNavClick = () => {
  // Optionnel : ajouter des effets sonores ou des animations
  console.log('Navigation clicked')
}

// Fonction pour gérer les clics sur la navigation mobile
const handleMobileNavClick = () => {
  menuOpen.value = false // Fermer le menu mobile après un clic
}
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
</style>
