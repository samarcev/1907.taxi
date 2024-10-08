<script setup lang="ts">
import AppHeader from "~/components/base/AppHeader.vue";
import AppCategoriesCars from "~/components/app/appCategoriesCars.vue";

const route = useRoute();
const $env = useRuntimeConfig();

onMounted(() => {
  if (route.query.ref) {
    localStorage?.setItem('referral_code', <string>route.query.ref)
  }
})
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: "https://" + $env.public.defaultHost + route.path,
    },
  ],
}));
</script>

<template>
  <div id="main-wrapper">
    <app-header />
    <app-categories-cars />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
#main-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  main {
    flex: 1;
    padding-bottom: 50px;
  }
}
</style>
