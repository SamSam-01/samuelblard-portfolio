<template>
  <div class="glass-card" :class="[padding, { 'hover-effect': hoverEffect }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hoverEffect?: boolean;
  padding?: string;
}

withDefaults(defineProps<Props>(), {
  hoverEffect: false,
  padding: 'p-5'
});
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.hover-effect:hover {
  transform: scale(1.02);
}
</style>
