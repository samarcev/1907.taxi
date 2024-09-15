<script setup lang="ts">
import AppCarsBigSlider from "~/components/app/appCarsBigSlider.vue";
import { getDefaultClassCars } from "~/api/requests/cars";

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
      <div class="row">
        <div>
          <app-filters-car-list
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

<style scoped lang="scss">
</style>
