import colors from "vuetify/es5/util/colors";
require("dotenv").config();

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/vuetify.js", ssr: true },
    { src: "@/plugins/filters/date.js", ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
    ["@nuxtjs/dotenv", { path: "./", filename: ".env" }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: process.env.APIKEY,
          authDomain: process.env.AUTHDOMAIN,
          databaseURL: process.env.DATABASEURL,
          projectId: process.env.PROJECTID,
          storageBucket: process.env.STORAGEBUCKET,
          messagingSenderId: process.env.MESSAGINGSENDERID
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.red.darken2,
          accent: colors.red.accent2,
          secondary: colors.grey.lighten1,
          info: colors.blue.lighten1,
          warning: colors.amber.darken2,
          error: colors.red.accent4,
          success: colors.green.lighten2
        },
        light: {
          primary: colors.red.darken2,
          accent: colors.red.accent2,
          secondary: colors.grey.lighten1,
          info: colors.blue.lighten1,
          warning: colors.amber.darken2,
          error: colors.red.accent4,
          success: colors.green.lighten2
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
