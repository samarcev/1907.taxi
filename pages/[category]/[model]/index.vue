<script setup lang="ts">
import AppModelsMenu from "~/components/app/appModelsMenu.vue";
import { getCarsBySlugModel, getSliderItems } from "~/api/requests/cars";
const $route = useRoute();
const { category, model } = $route.params as {
  category: string;
  model: string;
};
const { cars, models, classesCars } = await getCarsBySlugModel(category, model);
const sliderData = await getSliderItems(classesCars[0].id);
const modelsData = sliderData?.models.map((m) => ({
  title: m.name,
  slug: m.slug,
  count: m.available_count.count,
}));
const carList = cars || [];
useSeoMeta({
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
  ...models[0].seo,
});

useHead({
  title: models[0].name || "",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div>
    <app-models-menu :items="modelsData || []" />
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
