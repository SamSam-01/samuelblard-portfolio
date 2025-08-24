# Samuel BLARD - Portfolio

Portfolio personnel multilingue développé avec Nuxt 3, Vue 3 et Tailwind CSS.

## 🌍 Multilangue

Ce portfolio supporte deux langues :
- 🇫🇷 **Français**
- 🇬🇧 **Anglais** (langue par défaut)

### Fonctionnalités multilingues

- **Navigation** : Tous les éléments de navigation sont traduits
- **Contenu** : Toutes les sections (à propos, projets, expériences, formations) sont traduites
- **Détection automatique** : La langue du navigateur est détectée automatiquement
- **Fallback intelligent** : Si la langue du navigateur n'est pas supportée, l'anglais est utilisé par défaut
- **Persistance** : La langue choisie est sauvegardée dans un cookie
- **Basculement intuitif** : Bouton avec drapeaux et noms de langues dans la navbar

### Structure des traductions

```
i18n/locales/
├── fr.json          # Traductions françaises
└── en.json          # Traductions anglaises

content/
├── aboutme.json     # Contenu "à propos" en français
├── aboutme.en.json  # Contenu "à propos" en anglais
├── projects.json    # Projets en français
├── projects.en.json # Projets en anglais
├── experiences.json # Expériences en français
├── experiences.en.json # Expériences en anglais
├── formations.json  # Formations en français
└── formations.en.json # Formations en anglais
```

## 🛠️ Technologies utilisées

- **Framework** : Nuxt 3 + Vue 3
- **Styling** : Tailwind CSS
- **Internationalisation** : @nuxtjs/i18n
- **Animations** : AOS (Animate On Scroll) + CSS Transitions
- **UI Components** : Nuxt UI
- **Analytics** : Vercel Analytics
- **Performance** : Vercel Speed Insights
- **Icons** : Devicon + Nuxt Icon

## 🎨 Fonctionnalités UI/UX

- **Navigation intuitive** : Effets hover cohérents avec expansion horizontale
- **Bouton de langue** : Même style que la navigation avec drapeaux
- **Animations fluides** : Transitions CSS optimisées
- **Design responsive** : Adaptation parfaite mobile/desktop
- **Effets visuels** : Brillance, scale, et ombres dynamiques
- **Traductions complètes** : Tous les éléments traduits (modales, boutons, footer)
- **Persistance de langue** : Choix conservé pendant 1 an avec cookie sécurisé
- **Footer dynamique** : Copyright centré avec année automatique

## 📚 Documentation

- **[LANGUAGE_FEATURES.md](LANGUAGE_FEATURES.md)** : Fonctionnalités multilingues détaillées
- **[NAVBAR_IMPROVEMENTS.md](NAVBAR_IMPROVEMENTS.md)** : Améliorations de la navigation
- **[TRANSLATION_FIXES.md](TRANSLATION_FIXES.md)** : Corrections de traduction et améliorations

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
