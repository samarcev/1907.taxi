<script setup lang="ts">
import { useCarState } from "~/store/cars";

const store = useCarState();
store.GET_CAR_CLASSES();
</script>

<template>
  <nav class="app-categories-cars">
    <nuxt-link
      v-for="category of store.carClasses.filter((c) => c.cars_count.count)"
      :to="'/' + category.slug"
      :key="category.slug"
      active-class="active"
      exact-active-class="active"
      :class="{
        active: store.getDefaultCategory === category.id
      }"
    >
      <span class="badge">{{ category.cars_count.count }}</span>
      <span>
        {{ category.title }}
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
  @media screen and (max-width: 576px) {
    gap: 34px;
    width: min-content;
    overflow: auto;
    justify-content: flex-start;
    padding: 1em 15px 0;
    margin: 0 auto 25px;
    max-width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
