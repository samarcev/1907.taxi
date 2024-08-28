<script setup lang="ts">
defineProps({
  currentCount: {
    type: Number,
    required: true
  }
})

defineEmits(['filtersChange'])
</script>

<template>
  <div class="filters-cars">
    <div class="filters-cars_header">
      <i class="fa fa-filter"></i>
      <span>Фильтр</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filters-cars {
  width: 352px;
  border-radius: 28px;
  background: white;
  &_header {
    display: flex;
    padding: 29px 32px;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    i.fa {
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: var(--app-accent-color);
      border-radius: 100%;
      font-size: 14px;
    }
  }
}
</style>
