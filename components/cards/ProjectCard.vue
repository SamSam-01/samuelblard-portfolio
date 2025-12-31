<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Project } from '~/types';

const props = defineProps<{
  project: Project;
}>();

const showProjectModal = ref(false);

const openProjectModal = () => {
  showProjectModal.value = true;
};

const truncatedDescription = computed(() => {
  const maxLength = 100;
  if (props.project.description.length > maxLength) {
    return props.project.description.substring(0, maxLength) + '...';
  }
  return props.project.description;
});
</script>

<template>
  <div class="w-[300px] mr-8 text-center transition-all duration-200 ease-in-out hover:scale-110 max-[480px]:hover:scale-100 mx-auto">
    <div @click="openProjectModal" class="cursor-pointer">
      <NuxtImg :src="project.image" :alt="project.title" class="w-full h-auto rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.5)] mb-4 max-h-[172px] object-cover object-top" sizes="100vw sm:50vw md:400px"/>
      <h3 class="font-bold mb-2">{{ project.title }}</h3>
      <p class="mb-4">{{ truncatedDescription }}</p>
    </div>
    <UModal v-model="showProjectModal">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-end">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showProjectModal = false" />
          </div>
        </template>
        <div class="p-7 w-full">
          <div class="flex flex-col items-center justify-center">
            <NuxtImg :src="project.image" :alt="project.title" class="mx-auto h-[172px] w-[300px] object-cover object-top rounded-lg shadow-md mb-4" sizes="100vw sm:50vw md:400px"/>
            <h1 class="text-center font-bold">{{ project.title }}</h1>
          </div>
          <div class="text-left mt-4">
            <p>{{ project.description }}</p>
          </div>
          <div class="pt-5 flex flex-wrap items-center justify-center space-x-2">
            <i v-for="icon in project.technologies" :key="icon" :class="['text-4xl', icon]"></i>
          </div>
        </div>
        <template #footer>
          <div class="flex flex-wrap items-center justify-center space-x-2">
            <a v-if="project.github != null" :href="project.github" target="_blank" class="bg-green-500 p-1 rounded-3xl flex items-center"><i class="devicon-github-original p-1 mr-1"></i>{{ $t('projects.viewCode') }}</a>
            <a v-if="project.website != null" :href="project.website" target="_blank" class="bg-green-500 p-1 rounded-full flex items-center" >{{ $t('projects.visitSite') }} →</a>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
