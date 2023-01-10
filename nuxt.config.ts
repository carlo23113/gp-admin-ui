// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo"],
  ssr: false,
  app: {
    keepalive: true
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.NUXT_APP_API_BASE_URL + '/graphql',
      },
    },
  },
  css: ["vuetify/lib/styles/main.css", "~/assets/css/main.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    ssr: {
      noExternal: ["vuetify"], // add the vuetify vite plugin
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_APP_API_BASE_URL,
    },
  },
});
