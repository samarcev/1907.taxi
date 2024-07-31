<script setup lang="ts">

</script>

<template>
  <div class="app-location">
    <i class="fa fa-location-dot fa-xl"></i>
    <span>
      Москва
    </span>
  </div>
</template>

<style scoped lang="scss">
.app-location {
  display: inline-flex;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  .fa {
    color: var(--app-accent-color);
  }
  &:hover {
    span {
      border-bottom: 1px dashed var(--app-grey-color);
    }
  }
}
</style>
