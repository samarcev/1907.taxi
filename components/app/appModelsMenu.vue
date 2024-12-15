<script setup lang="ts">
import type { PropType } from "vue";
const route = useRoute();
defineProps({
  items: {
    type: Array as PropType<{ title: string; slug: string; count: number }[]>,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <nav class="app-models-menu">
      <nuxt-link
        :to="'/rent/' + route.params.category + '/' + model.slug + '/'"
        v-for="(model, idx) in items"
        active-class="active"
        :key="idx"
      >
        <span>{{ model.title }} </span
        ><span class="count">{{ model.count }}</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.app-models-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
  a {
    display: inline-flex;
    padding: 9px;
    border-radius: 1rem;
    border: 1px solid var(--app-grey-color);
    gap: 4px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: inherit;
    line-height: 1;
    text-decoration: none;
    min-width: 113px;
    &.active {
      background-color: var(--app-default-text-color);
      color: white;
      .count {
        color: var(--app-accent-color);
      }
    }
  }
  @media screen and (max-width: 576px) {
    flex-wrap: nowrap;
    overflow: auto;
    width: min-content;
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
