import * as FontAwesome from "./icon/fontawesome";

// extend(config, ctx) {
//   if (ctx.isDev && ctx.isClient) {
//     config.module.rules.push({
//       enforce: "pre",
//       test: /\.(js|vue)$/,
//       loader: "eslint-loader",
//       exclude: /(node_modules)/
//     });
//   }
// }```

export default {

  // extend(config, ctx) {
  //   if (ctx.isDev && ctx.isClient) {
  //     config.module.rules.push({
  //       enforce: "pre",
  //       test: /\.(js|vue)$/,
  //       loader: "eslint-loader",
  //       exclude: /(node_modules)/
  //     });
  //   }
  // }```

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DEAR BOOKS : 당신이 사랑한 문장들 📖",
    link: [
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' }
    ],
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
    ["@nuxtjs/fontawesome", { component: "fontAwesome", suffix: true }],
    "@nuxtjs/google-fonts",
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      // a simple name
      Roboto: true,

      // a name with spaces
      "Josefin+Sans": true,

      // specific font weights
      Lato: [100, 300],
    },
  },

  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },
};
