<template>
  <UContainer>
    <SectionTitle title="Mes Projets" />
    <div class="flex flex-col md:flex-row justify-center md:items-start md:mt-3 md:gap-2">
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
.project-cards {
  -webkit-overflow-scrolling: touch;
  margin-top: 3rem;
}
</style>
