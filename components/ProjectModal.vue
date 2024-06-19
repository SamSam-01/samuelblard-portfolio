<template>

</template>

<script setup lang="ts">
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
</script>

<style scoped>
</style>
