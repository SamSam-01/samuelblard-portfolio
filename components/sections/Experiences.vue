<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";
import ExperienceCard from "~/components/cards/ExperienceCard.vue";
import LoadMore from "~/components/ui/LoadMore.vue";
import { usePortfolioData } from "~/composables/usePortfolioData";

const { experiences, formations } = usePortfolioData();
</script>

<template>
  <UContainer class="pb-10">
    <SectionTitle :title="$t('experiences.title')"/>
    <LoadMore :items="experiences" :initialShow="3" :increment="3">
      <template #default="{ visibleItems }">
        <div v-for="experience in visibleItems" :key="experience.id" class="project-cards" data-aos="fade-up">
          <ExperienceCard :experience="experience" />
        </div>
      </template>
    </LoadMore>
    <SectionTitle :title="$t('formations.title')"/>
    <LoadMore :items="formations" :initialShow="3" :increment="3">
      <template #default="{ visibleItems }">
        <div v-for="formation in visibleItems" :key="formation.id" class="project-cards" data-aos="fade-up">
          <ExperienceCard :experience="formation" />
        </div>
      </template>
    </LoadMore>
  </UContainer>
</template>

<style scoped>

</style>