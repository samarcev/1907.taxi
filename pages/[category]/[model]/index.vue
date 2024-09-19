<script setup lang="ts">
import { getCarsByClassAndModel } from "~/api/requests/cars";
import { CarClass } from "~/api/models/car";
import AppModelsMenu from "~/components/app/appModelsMenu.vue";
const $route = useRoute();
const { category, model } = $route.params as {
  category: string;
  model: string;
};
const { data, meta, models } = await getCarsByClassAndModel(
  CarClass[category.toUpperCase() as keyof typeof CarClass],
  model,
);
const carList = data || [];
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
  title: meta?.title || "",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div>
    <app-models-menu :items="models || []" />
    <div class="container">
      <div class="row">
        <div class="filters-wrapper">
          <app-filters-car-list
            @filtersChange=""
            :current-count="carList.length"
          ></app-filters-car-list>
        </div>
        <div class="car-list-wrapper">
          <app-car-list :items="carList" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
