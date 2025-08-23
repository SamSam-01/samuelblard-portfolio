// Plugin pour gérer le contenu multilingue
export default defineNuxtPlugin(() => {
  return {
    provide: {
      localizedContent: (frContent, enContent) => {
        // useI18n doit être appelé au début d'une fonction setup
        // Nous créons donc une fonction qui appellera useI18n au moment de l'utilisation
        return computed(() => {
          const { locale } = useI18n();
          return locale.value === 'fr' ? frContent : enContent;
        });
      }
    }
  };
});