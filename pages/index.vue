<script setup lang="ts">
import AppCarsBigSlider from "~/components/app/appCarsBigSlider.vue";
import { getCars } from "~/api/requests/cars";
import { CarClass } from "~/api/models/car";
import AppModelsMenu from "~/components/app/appModelsMenu.vue";

const { data } = await getCars(CarClass.COMFORT_PLUS);
const carList = data?.cars || [];

useSeoMeta({
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  title: data?.meta?.title || "",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div>
    <app-models-menu :items="data.models || []" />
    <app-cars-big-slider :items="carList?.slice(0, 3)" />
    <div class="container">
      <app-car-list :items="carList" />
    </div>
  </div>
</template>

<style scoped></style>
