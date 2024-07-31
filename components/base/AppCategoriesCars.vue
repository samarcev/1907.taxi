<script setup lang="ts">
import { getCategoriesCarsCount } from "~/api/requests/cars";
import { CarClass } from "~/api/models/car";

const { data } = await getCategoriesCarsCount()
const categories = CarClass;
const categoriesAliases = {
  [categories.ECONOMY]: "Эконом",
  [categories.COMFORT]: "Комфорт",
  [categories.COMFORT_PLUS]: "Комфорт+",
  [categories.BUSINESS]: "Бизнес",
  [categories.DELIVERY]: "Доставка",
};
</script>

<template>
  <nav class="app-categories-cars">
    <nuxt-link
      v-for="(category, idx) of data"
      :href="
        category.class.toString() === categories.COMFORT_PLUS.toString()
          ? '/'
          : categories[category.class].toLowerCase()
      "
      :key="category.class"
      active-class="active"
    >
      <span class="badge">{{ category.count }}</span>
      <span>
        {{ categoriesAliases[category.class] }}
      </span>
    </nuxt-link>
  </nav>
</template>

<style scoped lang="scss">
.app-categories-cars {
  display: flex;
  gap: 52px;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    position: relative;
    line-height: 1;
    font-weight: 300;
    &.active {
      text-decoration: underline;
      font-weight: 400;
    }
    .badge {
      position: absolute;
      left: 100%;
      bottom: 100%;
      font-size: 12px;
      font-weight: 700;
    }
  }
}
</style>
