// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  extends: ["@nuxt/ui-pro"],
  uiPro: {
    license: "D0281163-6FB3-45CB-B1B0-30A7881F4D5C",
  },
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
});
