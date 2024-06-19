<template>
  <UContainer class="py-12">
    <SectionTitle title="Qui suis-je?" />
    <UCard class="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md mt-10">
      <div class="text-left mb-6">
        <h2 class="text-2xl font-semibold">Samuel BLARD</h2>
        <h3 class="text-xl font-medium text-gray-700 dark:text-gray-300">Développeur FullStack</h3>
      </div>
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
    </UCard>
  </UContainer>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
export default {
  name: "Description",
};
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
