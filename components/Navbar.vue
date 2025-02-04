<template>
  <nav class="fixed top-4 left-4 bottom-4 z-50">
    <div class="flex flex-col justify-between h-full p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg">
      <div class="w-full flex justify-center">
        <div
          class="text-white text-xl font-bold uppercase"
          style="writing-mode: vertical-lr; text-orientation: upright;"
        >
          Samuel Blard
        </div>
      </div>

      <div class="flex flex-col items-start space-y-6">
        <a
          href="#whoami"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.894 5.657 2.343M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <span
            class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >
            Whoami
          </span>
        </a>

        <a
          href="#competences"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01-6.16 0"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14v7.5"
              />
            </svg>
          </div>
          <span
            class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >
            Compétences
          </span>
        </a>

        <a
          href="#projects"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
              />
            </svg>
          </div>
          <span
            class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >
            Projects
          </span>
        </a>

        <a
          href="#experiences"
          class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full"
        >
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>            
          </div>
          <span
            class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >
            Experiences
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
</style>
