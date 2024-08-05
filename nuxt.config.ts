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
      htmlAttrs: {
        lang: 'ru'
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - Автопилот Такси",
      link: [
        {
          rel: "icon",
          href: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj4KCTxzdHlsZT4KCQljaXJjbGUgewoJCQlmaWxsOiAjRkZENTAyOwoJCX0KCTwvc3R5bGU+CgoJPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiLz4KCgkKPC9zdmc+",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/4fe3494c81.js",
          crossorigin: "anonymous",
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in'},
    rootId: '__root'
  },
  runtimeConfig: {
    public: {
      API_ASSETS: process.env.API_ASSETS,
      defaultHost: process.env.DEFAULT_HOST,
    },
  },
  apollo: {
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: process.env.API_ENDPOINT_GQL as string,
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
