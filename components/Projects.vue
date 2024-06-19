<template>
  <UContainer>
    <SectionTitle title="Mes Projets" />
    <div class="project-wrapper">
      <div v-for="project in projects" :key="project.id" class="project-cards" data-aos="fade-up">
        <ProjectCard :project="project" />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import ProjectCard from '~/components/ProjectCard.vue';

import project_list from '~/data/projects.json';

const projects = project_list.projects;
</script>

<style scoped>
.project-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3rem;
  gap: 2rem;
}

.project-cards {
  -webkit-overflow-scrolling: touch;
  margin-top: 3rem;
}
</style>
