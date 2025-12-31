<template>
  <div class="w-full">
    <div class="flex flex-wrap justify-center gap-4">
      <slot :visibleItems="displayedItems"></slot>
    </div>
    <div v-if="items.length > itemsToShow" class="flex justify-center mt-4">
      <slot name="loadMore" :loadMore="showMoreItems">
        <button @click="showMoreItems" class="text-xl font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
          ↓ {{ $t('common.loadMore') }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{
  items: T[];
  initialShow?: number;
  increment?: number;
}>(), {
  initialShow: 3,
  increment: 3
});

const itemsToShow = ref(props.initialShow);

const displayedItems = computed(() => props.items.slice(0, itemsToShow.value));

const showMoreItems = () => {
  itemsToShow.value += props.increment;
};
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
