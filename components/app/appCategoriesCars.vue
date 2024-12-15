<script setup lang="ts">
import { useCarState } from "~/store/cars";

const router = useRoute();
const store = useCarState();
store.GET_CAR_CLASSES();
</script>

<template>
  <nav class="app-categories-cars">
    <nuxt-link
      v-for="category of store.carClasses.filter((c) => c.cars_count.count)"
      :to="'/rent/' + category.slug"
      :key="category.slug"
      :class="{
        active:
          (store.getDefaultCategory === category.id && router.path === '/rent') ||
          router.path.includes('/rent' + category.slug + '/'),
      }"
    >
      <span>
        {{ category.title }}
      </span>
      <span class="badge">{{ category.cars_count.count }}</span>
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
    text-decoration: none;
    color: inherit;
    position: relative;
    line-height: 1;
    font-weight: 300;
    padding: 5px 25px;
    border: 1px solid #D9D9D9;
    border-radius: 13px;
    display: inline-flex;
    gap: 5pt;
    &.active {
      font-weight: 400;
      background-color: var(--app-default-text-color);
      color: #FFFFFF;
      .badge {
        display: inline;
        color: var(--app-accent-color);
      }
    }
    .badge {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    gap: 11px;
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
