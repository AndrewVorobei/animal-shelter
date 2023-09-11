// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
      pageTransition: { name: 'page', mode: 'out-in'}
  },

  vite: {

    vue: {
      customElement: true
    },
    css: {

      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *; @use "@/assets/main.scss" as *; @use "@/assets/_fonts.scss" as *;'
        }
      }
    }
  }
})

