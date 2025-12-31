<template>
  <NavButton @click="switchLanguage" :aria-label="`Switch to ${nextLanguage.name}`">
    <template #icon>
      <span class="text-xl leading-none flex items-center justify-center h-6 w-6">{{ currentLanguage.flag }}</span>
    </template>
    <span class="text-lg">→ {{ nextLanguage.flag }}</span>
  </NavButton>
</template>

<script setup lang="ts">
import NavButton from './NavButton.vue' // Explicit import if not auto-imported, though Nuxt usually auto-imports. Keeping it clean.

const { locale, setLocale } = useI18n()

// Configuration des langues avec drapeaux
const languages = {
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
  en: { code: 'en', name: 'English', flag: '🇬🇧' }
}

// Langue actuelle
const currentLanguage = computed(() => {
  return languages[locale.value as keyof typeof languages] || languages.en
})

// Prochaine langue
const nextLanguage = computed(() => {
  const nextCode = locale.value === 'fr' ? 'en' : 'fr'
  return languages[nextCode]
})

const switchLanguage = () => {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>