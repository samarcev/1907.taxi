<script setup lang="ts">
import { getCars } from "~/api/requests/cars";
import { CarClass } from "~/api/models/car";
import AppCarsBigSlider from "~/components/app/appCarsBigSlider.vue";

const $route = useRoute();
const carClassParam = (
  $route.params.category as string
).toUpperCase() as keyof typeof CarClass;

const { data } = await getCars(CarClass[carClassParam]);

useSeoMeta({
  title: carClassParam,
});
</script>

<template>
  <div>
    <app-cars-big-slider :items="data!.slice(0, 3)" />
  </div>
</template>

<style scoped></style>
