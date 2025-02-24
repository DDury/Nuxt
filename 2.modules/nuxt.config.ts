// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  extends: ["@nuxt/ui-pro"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/ui",
  ],
  tailwindcss: {
    exposeConfig: true, // Tailwind 설정을 UI에서 접근 가능하도록 함
  },
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in", // 기본값
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // 기본값
    },
  },
});
