<template>
  <div class="p-card">
    <div @click="openProjectModal" class="cursor-pointer">
      <img :src="project.image" :alt="project.title" class="rounded-lg shadow-md mb-4"/>
      <h3>{{ project.title }}</h3>
      <p>{{ truncatedDescription }}</p>
    </div>
    <UModal size="xl" v-model="showProjectModal" class="">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="items-end right-0">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showProjectModal = false" />
          </div>
        </template>
        <div class="p-7 w-full flex flex-wrap">
          <div class="w-1/2 p-2">
            <img :src="project.image" :alt="project.title" class="rounded-lg shadow-md mb-4"/>
            <h1>{{ project.title }}</h1>
          </div>
          <div class="w-1/2 p-2">
            <p>{{ project.description }}</p>
            <div class="flex flex-wrap items-center justify-center space-x-2">
              <i v-for="icon in project.technologies" :key="icon" :class="['text-4xl', icon]"></i>
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  project: {
    title: string;
    image: string;
    github: string;
    website: string;
    technologies: string[];
    description: string;
  };
}>();

const showProjectModal = ref(false);

const openProjectModal = () => {
  showProjectModal.value = true;
};

const closeProjectModal = () => {
  showProjectModal.value = false;
};

const truncatedDescription = computed(() => {
  const maxLength = 100; // Ajustez cette valeur selon vos besoins
  if (props.project.description.length > maxLength) {
    return props.project.description.substring(0, maxLength) + '...';
  }
  return props.project.description;
});
</script>

<style scoped>
.p-card {
  width: 300px;
  margin-right: 2rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
}

.p-card:hover {
  transform: scale(1.1);
}

.p-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.p-card h3 {
  margin-bottom: 0.5rem;
}

.p-card p {
  margin-bottom: 1rem;
}
</style>
