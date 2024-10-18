<script setup lang="ts">
import AppHeader from "~/components/base/AppHeader.vue";
import AppCategoriesCars from "~/components/app/appCategoriesCars.vue";
import { TelegramUserState } from "~/store/telegram_user";

const route = useRoute();
const $env = useRuntimeConfig();
const { SET_TG_USER_DATA } = TelegramUserState();

onMounted(async () => {
  if (route.query.ref) {
    localStorage?.setItem("referral_code", <string>route.query.ref);
  }
  const TgApp = await import("vue-tg");
  const { initDataUnsafe } = TgApp.useWebApp();
  if (!!initDataUnsafe.user.id) {
    SET_TG_USER_DATA(initDataUnsafe.user);
  }
});
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
  footer {
    text-align: center;
    padding: 30px;
    margin: 0 auto;
  }
}
</style>
