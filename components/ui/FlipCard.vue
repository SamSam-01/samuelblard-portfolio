<template>
  <div class="flip-card-container" :class="{ 'flipped': isFlipped }" @click="toggleFlip">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front" />
      </div>
      <div class="flip-card-back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const internalFlipped = ref(false);

const isFlipped = computed({
  get: () => props.modelValue ?? internalFlipped.value,
  set: (val) => {
    internalFlipped.value = val;
    emit('update:modelValue', val);
  }
});

function toggleFlip() {
  isFlipped.value = !isFlipped.value;
}
</script>

<style scoped>
.flip-card-container {
  perspective: 1000px;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
