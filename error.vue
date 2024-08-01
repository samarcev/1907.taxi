<template>
  <NuxtLayout>
    <div class="errorSection">
      <p>ERROR DETAILS: {{ error.statusCode }} {{ error.statusMessage }}</p>
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
