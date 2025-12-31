// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate",
    'nuxt-aos',
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@nuxtjs/i18n",
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'en',
      cookieSecure: false,

    }
  },

  compatibilityDate: "2025-03-15",
})