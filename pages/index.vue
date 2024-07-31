<script setup lang="ts">
import { getCars } from "~/api/requests/cars";
import { CarClass } from "~/api/models/car";
import AppCarsBigSlider from "~/components/app/appCarsBigSlider.vue";
const $env = useRuntimeConfig()
const { data } = await getCars(CarClass.COMFORT_PLUS);

useSeoMeta({
  title: 'COMFORT_PLUS',
});
</script>

<template>
  <div>
    <app-cars-big-slider :items="data!.slice(0, 3)" />
    <pre>{{ $env.API_ASSETS }}</pre>
    <img :src="$env + data[0]?.photos[0].file.id" alt="">
  </div>
</template>

<style scoped></style>
