// https://nuxt.com/docs/api/configuration/nuxt-config
import i18nConfig from './i18n.config'

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

  i18n: i18nConfig as any,

  compatibilityDate: "2025-03-15",
})