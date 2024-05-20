// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      "@pinia/nuxt",
      "@nuxtjs/tailwindcss",

  ],
    // @ts-ignore
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    }
})