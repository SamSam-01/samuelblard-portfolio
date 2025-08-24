<template>
  <UContainer>
    <SectionTitle :title="$t('projects.title')" />
    <LoadMore :items="projects" :initialShow="3" :increment="3">
      <template #default="{ visibleItems }">
        <div v-for="project in visibleItems" :key="project.id" class="project-cards" data-aos="fade-up">
          <ProjectCard :project="project" />
        </div>
      </template>
      <template #loadMore="{ loadMore }">
        <div class="flex justify-center mt-8">
          <UButton @click="loadMore">{{ $t('projects.loadMore') }}</UButton>
        </div>
      </template>
    </LoadMore>
  </UContainer>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import LoadMore from '~/components/LoadMore.vue';

import project_listFr from '~/content/projects.json';
import project_listEn from '~/content/projects.en.json';

const { locale } = useI18n();

const projects = computed(() => {
  return locale.value === 'fr' ? project_listFr.projects : project_listEn.projects;
});
</script>

<style scoped>
.project-cards {
  width: 100%;
  max-width: 300px;
  margin-top: 3rem;
}
</style>
