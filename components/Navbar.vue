<template>
  <nav
      :class="['navbar flex items-center justify-between w-full h-16 px-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white sticky top-0 transition-all duration-150']"
  >
    <div class="text-lg font-bold">
      Samuel BLARD
    </div>

    <div class="text-md font-semibold">
      Développeur FullStack
    </div>

    <div class="relative">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
        <ul>
          <li class="border-b border-gray-200 dark:border-gray-600">
            <a href="#whoami" class="block px-4 py-2 text-sm">
              Qui suis-je ?
            </a>
          </li>
          <li class="border-b border-gray-200 dark:border-gray-600">
            <a href="#competences" class="block px-4 py-2 text-sm">
              Mes Compétences
            </a>
          </li>
          <li class="border-b border-gray-200 dark:border-gray-600">
            <a href="#projects" class="block px-4 py-2 text-sm">
              Mes Projets
            </a>
          </li>
          <li>
            <a href="#experiences" class="block px-4 py-2 text-sm">
              Mes Experiences
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        document.addEventListener('click', this.closeMenu);
      } else {
        document.removeEventListener('click', this.closeMenu);
      }
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu(event) {
      if (!this.$el.contains(event.target)) {
        this.isMenuOpen = false;
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  },
};
</script>

<style scoped>
.navbar {
  z-index: 999;
}
</style>
