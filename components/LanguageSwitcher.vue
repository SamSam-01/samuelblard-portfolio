<template>
  <div class="language-switcher">
    <button
      @click="switchLanguage"
      class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
      :aria-label="`Switch to ${nextLanguage.name}`"
    >
      <div class="p-2">
        <!-- Drapeau actuel -->
        <div class="flex items-center justify-center w-6 h-6 rounded-full overflow-hidden">
          <span class="text-sm font-bold">{{ currentLanguage.flag }}</span>
        </div>
      </div>
      
      <!-- Nom de la langue actuelle -->
      <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {{ currentLanguage.name }}
      </span>
      
      <!-- Indicateur de changement -->
      <span class="ml-1 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        → {{ nextLanguage.name }}
      </span>
    </button>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()

// Configuration des langues avec drapeaux
const languages = {
  fr: { name: 'Français', flag: '🇫🇷' },
  en: { name: 'English', flag: '🇬🇧' }
}

// Langue actuelle
const currentLanguage = computed(() => {
  return languages[locale.value] || languages.en
})

// Prochaine langue
const nextLanguage = computed(() => {
  const nextCode = locale.value === 'fr' ? 'en' : 'fr'
  return languages[nextCode]
})

const switchLanguage = () => {
  // Basculer entre français et anglais
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<style scoped>
.language-switcher {
  display: inline-flex;
  align-items: center;
}

/* Version mobile - style différent pour le menu hamburger */
@media (max-width: 768px) {
  .language-switcher button {
    width: auto !important;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.75rem;
  }
  
  .language-switcher .text-white,
  .language-switcher .text-white\/60 {
    opacity: 1 !important;
  }
}
</style>