<script setup lang="ts">
import { CarClass } from "~/api/models/car";
import AppCarsBigSlider from "~/components/app/appCarsBigSlider.vue";
import AppModelsMenu from "~/components/app/appModelsMenu.vue";
import { getCars } from "~/api/requests/cars";

const $route = useRoute();
const carClassParam = (
  $route.params.category as string
).toUpperCase() as keyof typeof CarClass;
const { data } = await getCars(CarClass[carClassParam]);
const carList = data.cars || [];
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
  title: data.meta?.title || "",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div>
    <app-models-menu :items="data.models || []" />
    <app-cars-big-slider :items="carList.slice(0, 3)" />
    <div class="container app-main">
      <div>
        <app-filters-car-list @filtersChange="" :current-count="carList.length"></app-filters-car-list>
      </div>
      <div>
        <app-car-list :items="carList" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-main {
  display: flex;
  gap: 20px;
}
</style>
