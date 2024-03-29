export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "museums-nuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "normalize.css",
    "./assets/scss/global.scss",
    "./assets/scss/mixins.scss"
  ],

  styleResources: {
    scss: ["./assets/scss/mixins.scss", "./assets/scss/variables.scss"], // alternative: scss
    less: [],
    stylus: []
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios", "lodash"],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
