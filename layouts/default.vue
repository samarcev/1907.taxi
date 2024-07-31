<script setup lang="ts">
import AppHeader from "~/components/base/AppHeader.vue";
import AppCategoriesCars from "~/components/base/AppCategoriesCars.vue";

definePageMeta({
  middleware: ["redirect-to-default-path"],
});
</script>

<template>
  <div id="main-wrapper">
    <app-header />
    <app-categories-cars />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
main {
  margin: 0 auto;
}
</style>
