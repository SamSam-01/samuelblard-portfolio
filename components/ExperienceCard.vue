<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  title: string;
  date: string;
  contract: string;
  entreprise: string;
  description: string;
}>();

const formattedDescription = computed(() => {
  return props.description.replace(/\n/g, '<br>');
});
</script>

<template>
  <UCard class="flex-1">
    <div>
      <div class="text-center pb-7">
        <h1 class="font-bold text-xl">{{ title }} ({{ contract }})</h1>
        <h2>{{ entreprise }}</h2>
        <h2>{{ date }}</h2>
      </div>
      <p v-html="formattedDescription"></p>
    </div>
  </UCard>
</template>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
