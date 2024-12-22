// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/all.scss'],
  // runtimeConfig: {
  //   public: {
  //     API_URL: "",
  //   }
  // },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000/api",
    },
  },
})
