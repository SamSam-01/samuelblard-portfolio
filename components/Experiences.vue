<script setup lang="ts">
import SectionTitle from "~/components/SectionTitle.vue";
import ExperienceCard from "~/components/ExperienceCard.vue";
import LoadMore from "~/components/LoadMore.vue";
import experiences from "~/data/experiences.json";
import formations from "~/data/formations.json";
import ProjectCard from "~/components/ProjectCard.vue";

const experiences_list = experiences.experiences;
const formations_list = formations.experiences;

const description1 = ref(`- Développement de nouvelles fonctionnalités\n- Résoudre des bugs (VueJS, PHP)\n- Optimiser les performances serveur (Django)\n- Organisation de sprints (SCRUM Master)`);

const description2 = ref(`- Aller au contact des clients\n- Se former aux nouvelles technologies de LG et ses concurrents\n- Connaître les produits LG et concurrents`);

const description3 = ref(`- Développer une page de profil pour les Étudiants sur la plateforme d'apprentissage (VueJS)\n- Développer des recommandations de cours à suivre (JS / ElasticSearch)\n- Développer une page de suivi des statistiques des cours pour les auteurs (Drupal)\n- Déployer sur le serveur de pré-production (Kubernetes/Docker/Jenkins)`);

const description4 = ref(`Quelques projets effectués:\n- Page web dynamique (JS)\n- Optimisation d’un site avec Lighthouse\n- Application de location immobilière (REACT)\n- Back-end d’un site de notation de livre (Node - Express)`);

const description5 = ref(`Quelques projets effectués:\n- Jeu Defender en C / CSFML\n- Compresseur de fichier en C\n- Générateur de Makefile en C\n- Project Week 2023`);

const description6 = ref(`- Participation aux 24 heures de l'innovations (3ème place)\n- Développement de plusieurs projets (Extra-Scolaire)\n- Générateur de mot de passe (Python)\n- Domotique (Arduino)\n- Assistant Vocal (Raspberry Pi + Python)`);

</script>

<template>
  <UContainer>
    <SectionTitle title="Expériences"/>
    <LoadMore :items="experiences_list" :initialShow="3" :increment="3">
      <template #default="{ visibleItems }">
        <div v-for="experience in visibleItems" :key="experience.id" class="project-cards" data-aos="fade-up">
          <ExperienceCard :experience="experience" />
        </div>
      </template>
    </LoadMore>
    <!--
    <div class="md:grid md:grid-cols-3 md:gap-4 md:align-middle">
      <ExperienceCard title="Développeur FullStack" contract="Alternance" date="Juillet 2023 - Juin 2024" entreprise="ISAE-SUPAERO" :description="description1" />
      <ExperienceCard title="Conseiller de Vente LG" contract="CDD" date="Mai 2023 - Juillet 2023" entreprise="TechSell" :description="description2" />
      <ExperienceCard title="Développeur FullStack" contract="Stage" date="Juillet 2023 - Juin 2024" entreprise="ISAE-SUPAERO" :description="description3" />
    </div>
    -->
    <SectionTitle title="Formations"/>
    <div class="md:grid md:grid-cols-3 md:gap-4 md:align-middle pb-7">
      <ExperienceCard title="Développeur Intégrateur WEB" contract="Obtenu" date="Juillet 2023 - Juin 2024" entreprise="OpenClassrooms" :description="description4" />
      <ExperienceCard title="Développeur FullStack" contract="Interrompu" date="Septembre 2021 - Juillet 2023" entreprise="EPITECH" :description="description5" />
      <ExperienceCard title="Baccalauréat Général - Mathématiques, NSI, SI" contract="Mention Bien" date="2021" entreprise="CNED" :description="description6" />
    </div>
  </UContainer>
</template>

<style scoped>

</style>