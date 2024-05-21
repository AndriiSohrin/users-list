// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      "@nuxtjs/tailwindcss",
      "@pinia/nuxt",
      '@pinia-plugin-persistedstate/nuxt',
  ],
    // @ts-ignore
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    }
})