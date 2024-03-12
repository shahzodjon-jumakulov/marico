// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/fonts"],
  css: ["~/assets/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/logo.svg" }],
    },
  },
});
