<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
  competences: string[];
}>();
</script>

<template>
  <UCard class="flex-1" data-aos="fade-up">
    <template #header>
      <h2 class="text-center">
        {{ props.title }}
      </h2>
    </template>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="competence in competences" :key="competence" class="flex flex-col items-center justify-center">
        <i :class="['text-5xl', competence]"></i>
        <span class="text-center">test</span>
      </div>
    </div>
  </UCard>
</template>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
