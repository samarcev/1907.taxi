// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/apollo", "nuxt-swiper"],
  css: ["@/assets/styles/main.scss"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - Автопилот Такси",
      script: [
        {
          src: "https://kit.fontawesome.com/4fe3494c81.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  runtimeConfig: {
    publicRuntimeConfig: {
      API_ASSETS: process.env.API_ASSETS,
    },
  },
  apollo: {
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: process.env.API_ROOT as string
      },
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ["navigation", "pagination"], // all modules are imported by default
  },
});
