// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/content'
  ], 
  build: {
    transpile: ['html2canvas']
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/dw_logo.png' }
      ]
    }
  }
})