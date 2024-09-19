<template>
  <NuxtLayout>
    <div class="error">
      <h1>{{ error.statusCode}} - {{ error.statusMessage}}</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
defineProps({
  error: {
    type: Object as () => NuxtError,
    default: null,
  },
});
</script>

<style lang="scss">
.error {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    border: 1px solid var(--app-accent-color);
    color: inherit;
  }
}
</style>
