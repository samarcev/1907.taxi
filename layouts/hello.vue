<script setup lang="ts">

</script>

<template>
  <div id="main-wrapper">
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
#main-wrapper {
  background-color: var(--app-accent-color);
}
</style>
