if (process.env.NODE_ENV !== 'production') require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/style/abstracts/abstracts.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuelidate', ssr: true },
    { src: '~plugins/dragable.js', ssr: false },
    { src: '~plugins/vue-select.js', ssr: false },
    { src: '~/plugins/jspdf', ssr: false },
    { src: '~plugins/key.js', ssr: true },
    { src: '~plugins/modal.js', ssr: false }
  ],
  env: {
    ENVIRONMENT: process.env.NODE_ENV
  },
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': 'http://localhost:3001/'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'http://localhost:3001/api/account/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: 'http://localhost:3001/api/account/me', method: 'get' }
        }
        /* tokenRequired: true,
        tokenType: 'Bearer' */
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      user: false,
      callback: '/'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
