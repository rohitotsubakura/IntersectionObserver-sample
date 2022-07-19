import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    app: {
        baseURL: '/IntersectionObserver-sample'
    },
    head: {
    title: 'IntersectionObserverAPIサンプル',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IntersectionObserverAPIのサンプルです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'IntersectionObserverAPIサンプルサイト' },
      { hid: 'og:url', property: 'og:url', content: 'https://rohitotsubakura.github.io/IntersectionObserver-sample' },  //絶対パスで指定
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://rohitotsubakura.github.io/IntersectionObserver-sample/ogp.png' },  //絶対パスで指定
      { hid: 'og:title', property: 'og:title', content: 'IntersectionObserverAPIサンプルサイト' },
      { hid: 'og:description', property: 'og:description', content: 'IntersectionObserverAPIのサンプルです。' },
      { name: 'twitter:card', content: 'summary' }
    ],
  },
})
