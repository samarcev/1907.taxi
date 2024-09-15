<script setup lang="ts">
import type { CarInterface } from "~/api/models/car";
import type { PropType } from "vue";

defineProps({
  items: {
    type: Array as PropType<CarInterface[]>,
  },
});
</script>

<template>
  <div class="app-cars-list">
    <app-car-list-item
        v-for="(item, idx) in items"
        :data="item"
        :key="idx"
    ></app-car-list-item>
  </div>
</template>

<style scoped lang="scss">
.app-cars-list {
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
}
</style>
