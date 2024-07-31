<script setup lang="ts">
import { getCars } from "~/api/requests/cars";
import { CarClass } from "~/api/models/car";
import AppCarsBigSlider from "~/components/app/appCarsBigSlider.vue";
const { data } = await getCars(CarClass.COMFORT_PLUS);

useSeoMeta({
  title: 'COMFORT_PLUS',
});
</script>

<template>
  <div>
    <app-cars-big-slider :items="data!.slice(0, 3)" />
  </div>
</template>

<style scoped></style>
