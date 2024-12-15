<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <app-navigation />
  <transition name="modal-fade">
    <app-stories-slider
        v-if="showStoriesBlock"
        @close="showStoriesBlock = false"
    />
  </transition>
</template>
<script setup lang="ts">
import AppStoriesSlider from "~/components/app/appStoriesSlider.vue";
import AppNavigation from "~/components/app/appNavigation.vue";

const showStoriesBlock = ref<boolean>(false);
onMounted(async () => {
  showStoriesBlock.value = !sessionStorage.getItem('showStoriesBlock')
})
</script>
