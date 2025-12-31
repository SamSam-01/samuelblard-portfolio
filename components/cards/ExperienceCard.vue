<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Experience } from '~/types';
import FlipCard from '~/components/ui/FlipCard.vue';
import GlassCard from '~/components/ui/GlassCard.vue';

const props = defineProps<{
  experience: Experience;
}>();

const isFlipped = ref(false);
const formattedDescription = computed(() => {
  return props.experience.description.replace(/\n/g, '<br>');
});
</script>

<template>
  <div data-aos="zoom-in-up" data-aos-delay="50" class="card-container">
    <FlipCard v-model="isFlipped" class="card-flip-wrapper">
      <template #front>
        <GlassCard class="h-full w-full flex flex-col items-center justify-center relative">
          <h3 class="text-center text-xl font-bold">{{ experience.title }}</h3>
          <NuxtImg v-if="experience.logo" :src="experience.logo" :alt="experience.entreprise" class="max-w-20 my-4" sizes="100vw sm:50vw md:400px"/>
          <h4 v-else class="text-lg my-4">{{ experience.entreprise }}</h4>
          <p class="date">{{ experience.date }}</p>
          <p class="contract">{{ experience.contract }}</p>
        </GlassCard>
      </template>
      <template #back>
        <GlassCard class="h-full w-full flex flex-col items-center relative">
          <h4 class="text-center text-lg font-bold mb-4">{{ experience.title }}</h4>
          <p v-html="formattedDescription" class="description text-left text-sm overflow-y-auto"></p>
        </GlassCard>
      </template>
    </FlipCard>
  </div>
</template>

<style scoped>
.card-container {
  width: 300px;
  height: 400px;
  margin: 20px;
  perspective: 1000px;
}

.card-flip-wrapper {
  transition: transform 0.2s ease-in-out;
}

.card-container:hover .card-flip-wrapper {
  transform: scale(1.1);
}

@media (max-width: 480px) {
  .card-container:hover .card-flip-wrapper {
    transform: scale(1);
  }
}

.date,
.contract {
  font-style: italic;
  margin-top: 0.5rem;
}
</style>
