<template>
  <nav
      :class="['z-9999 flex items-center justify-between w-full h-16 px-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white sticky top-0 transition-all duration-150']"
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
            <button @click="toggleTheme" class="block px-4 py-2 text-sm w-full text-left">
              {{ $colorMode.preference === 'dark' ? 'Light Mode' : 'Dark Mode' }}
            </button>
          </li>
          <li class="border-b border-gray-200 dark:border-gray-600">
            <a href="#section1" class="block px-4 py-2 text-sm">
              Section 1
            </a>
          </li>
          <li class="border-b border-gray-200 dark:border-gray-600">
            <a href="#section2" class="block px-4 py-2 text-sm">
              Section 2
            </a>
          </li>
          <li>
            <a href="#section3" class="block px-4 py-2 text-sm">
              Section 3
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
    },
    toggleTheme() {
      this.$colorMode.preference = this.$colorMode.preference === 'dark' ? 'light' : 'dark';
    },
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
    },
    toggleTheme() {
      this.$colorMode.preference = this.$colorMode.preference === 'dark' ? 'light' : 'dark';
    },
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  },
};
</script>

<style scoped>

</style>
