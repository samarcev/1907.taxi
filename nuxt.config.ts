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
        lang: "ru",
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
        {
          src: "https://telegram.org/js/telegram-web-app.js"
        }
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    rootId: "__root",
  },
  runtimeConfig: {
    public: {
      API_ASSETS: "https://api.autopilot-taxi.tw1.su/assets/",
      API_ENDPOINT: "https://api.autopilot-taxi.tw1.su/",
      defaultHost: "autopilot-taxi.tw1.su",
    },
  },
  apollo: {
    proxyCookies: true,
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "https://api.autopilot-taxi.tw1.su/graphql"
      },
    },
  },
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active'
    }
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ["navigation", "pagination"], // all modules are imported by default
  },
});
