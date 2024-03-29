import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    app: {
        baseURL: '/IntersectionObserver-sample'
    },
    vite: {
      server: {
        watch: {
          usePolling: true, 
        },
      },
    },
})
