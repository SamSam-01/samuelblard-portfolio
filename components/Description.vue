<template>
  <UContainer class="py-12">
    <SectionTitle title="Qui suis-je?" />
    <div class="flex flex-col md:flex-row items-center md:items-stretch pt-10 pb-20">
      <div class="hidden md:flex md:w-1/3 md:p-4 about-image  items-center justify-center" data-aos="fade-right" data-aos-duration="2000">
        <img class="hidden md:block" src="/images/Me.jpeg" alt="Photo de profil" />
      </div>
      <div class="md:w-2/3 md:p-4 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="2000">
        <div class="text-left mb-6">
          <h2 class="text-4xl md:text-7xl font-bold font-sans uppercase">Samuel BLARD</h2>
          <h3 class="text-2xl md:text-3xl font-medium text-gray-300">Développeur Fullstack - React | Vue | Node</h3>
        </div>
        <p class="text-white text-lg leading-relaxed">
          Passionné par les nouvelles technologies, j'ai commencé à explorer la programmation à 11 ans avec une carte Arduino.
          Autodidacte et à l'affût des nouveautés, j'ai développé des projets extra scolaires et appris à programmer en Python.
          Constamment à la recherche de challenge, je n'ai pas peur de sortir de ma zone de confort pour m'améliorer et pour travailler sur mes défauts.
        </p>
      </div>
    </div>
  </UContainer>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
export default {
  name: "Description",
};
</script>

<style scoped>
.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  width: 100%;
  max-width: 20rem;
  height: auto;
  border-radius: 69% 31% 27% 73% / 45% 49% 51% 55%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
