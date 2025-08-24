<script setup lang="ts">
import SectionTitle from "~/components/SectionTitle.vue";
import ExperienceCard from "~/components/ExperienceCard.vue";
import LoadMore from "~/components/LoadMore.vue";
import experiencesFr from "~/content/experiences.json";
import experiencesEn from "~/content/experiences.en.json";
import formationsFr from "~/content/formations.json";
import formationsEn from "~/content/formations.en.json";

const { locale } = useI18n();

const experiences_list = computed(() => {
  return locale.value === 'fr' ? experiencesFr.experiences : experiencesEn.experiences;
});

const formations_list = computed(() => {
  return locale.value === 'fr' ? formationsFr.formations : formationsEn.formations;
});
</script>

<template>
  <UContainer class="pb-10">
    <SectionTitle :title="$t('experiences.title')"/>
    <LoadMore :items="experiences_list" :initialShow="3" :increment="3">
      <template #default="{ visibleItems }">
        <div v-for="experience in visibleItems" :key="experience.id" class="project-cards" data-aos="fade-up">
          <ExperienceCard :experience="experience" />
        </div>
      </template>
    </LoadMore>
    <SectionTitle :title="$t('formations.title')"/>
    <LoadMore :items="formations_list" :initialShow="3" :increment="3">
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