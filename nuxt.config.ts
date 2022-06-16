import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/index.css'],
  buildModules: ['@intlify/nuxt3'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  intlify: {
    localeDir: './locales',
    vueI18n: 'i18n.config.mjs',
  },
});
