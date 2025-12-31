export default {
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
        cookieSameSite: 'lax',
        cookieMaxAge: 365 * 24 * 60 * 60 // 1 an
    }
}
