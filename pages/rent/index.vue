<script setup lang="ts">
import AppCategoriesCars from "~/components/app/appCategoriesCars.vue";
import AppCarsBigSlider, {
  type BigSliderItem,
} from "~/components/app/appCarsBigSlider.vue";
import { getDefaultClass, getSliderItems } from "~/api/requests/cars";

const data = await getDefaultClass();
const sliderData = await getSliderItems(data!.id);
const sliderItems: BigSliderItem[] =
  sliderData?.models.map((m) => {
    const car = m.cars[0];
    return {
      id: m.id,
      rent: car.rent,
      year_release: car.year_of_release,
      model_name: m.name,
      min_cost: car.cost,
      available_count: m.available_count.count,
    };
  }) || [];

useSeoMeta(data!.seo);

useHead({
  title: data?.title,
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div>
    <app-categories-cars />
    <app-cars-big-slider :items="sliderItems" />
    <div class="container">
      <div class="row">
        <div class="filters-wrapper">
          <app-filters-car-list :current-count="0"></app-filters-car-list>
        </div>
        <div class="car-list-wrapper">
          <app-car-list :items="data?.cars" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
