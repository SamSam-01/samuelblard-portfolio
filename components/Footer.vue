<template>
  <footer
      :class="['footer flex items-center justify-center w-full h-16 px-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white']"
  >
    <div class="text-sm font-semibold text-center">
      © {{ currentYear }} Samuel BLARD. {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>

<script setup>
const { locale } = useI18n()

// Année actuelle dynamique
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<style scoped>
.footer {
  bottom: 0;
}
</style>
