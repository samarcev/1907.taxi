<script setup lang="ts">
import AppHeader from "~/components/base/AppHeader.vue";
</script>

<template>
  <div id="main-wrapper">
    <app-header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss"></style>
