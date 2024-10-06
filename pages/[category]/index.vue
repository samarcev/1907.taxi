<script setup lang="ts">
import AppCarsBigSlider, {
  type BigSliderItem,
} from "~/components/app/appCarsBigSlider.vue";
import AppModelsMenu from "~/components/app/appModelsMenu.vue";
import { getCarsBySlugClass, getSliderItems } from "~/api/requests/cars";

const $route = useRoute();
const carClassParam = $route.params.category as string;
const { cars, classesCars } = await getCarsBySlugClass(carClassParam);
const classCar = classesCars[0];
const sliderData = await getSliderItems(classCar.id);
const modelsData = sliderData?.models.map((m) =>({title: m.name, slug: m.slug, count: m.available_count.count }))
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
const carList = cars || [];
useSeoMeta({
  ogTitle: classCar.title,
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  title: classCar.title,
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div>
    <app-models-menu :items="modelsData || []" />
    <app-cars-big-slider :items="sliderItems || []" />
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
