<script setup lang="ts">
import AppCarsBigSlider from "~/components/app/appCarsBigSlider.vue";
import {getCars, getDefaultClassCars} from "~/api/requests/cars";
import AppModelsMenu from "~/components/app/appModelsMenu.vue";

const { data } = await getDefaultClassCars();
const carList = data?.items || [];

useSeoMeta({
  ogTitle: data?.title,
  ogDescription: "",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: data?.title,
  twitterDescription: "",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  title: data?.title,
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div>
    <app-cars-big-slider :items="carList?.slice(0, 3)" />
    <div class="container">
      <app-car-list :items="carList" />
    </div>
  </div>
</template>

<style scoped></style>
