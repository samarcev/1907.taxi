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
import {TelegramUserState} from "~/store/telegram_user";

const route = useRoute();
const $env = useRuntimeConfig();
const { SET_TG_USER_DATA } = TelegramUserState();
const showStoriesBlock = ref<boolean>(false);
onMounted(async () => {
  showStoriesBlock.value = !sessionStorage.getItem('showStoriesBlock')
  if (route.query.ref) {
    localStorage?.setItem("referral_code", <string>route.query.ref);
  }
  const TgApp = await import("vue-tg");
  const { initDataUnsafe } = TgApp.useWebApp();
  if (!!initDataUnsafe.user?.id) {
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
onMounted(async () => {
  showStoriesBlock.value = !sessionStorage.getItem('showStoriesBlock')
})
</script>
