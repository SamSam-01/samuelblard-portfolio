<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    class="group inline-flex items-center overflow-hidden transition-all duration-300 w-10 hover:w-40 bg-white/20 hover:bg-white/30 rounded-full hover:shadow-lg hover:scale-105 relative"
    @click="handleClick"
  >
    <div class="p-2 flex items-center justify-center shrink-0">
      <slot name="icon">
        <Icon v-if="icon" :name="icon" class="w-6 h-6 transition-transform duration-300 group-hover:scale-110 text-white" />
      </slot>
    </div>
    <span class="ml-2 text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-medium pr-4">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  href?: string
  icon?: string
  label?: string
  type?: 'button' | 'submit' | 'reset'
}>()

const emit = defineEmits(['click'])

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<style scoped>
/* Effet de brillance au survol */
.group:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
  pointer-events: none;
}

.group:hover::before {
  left: 100%;
}
</style>
