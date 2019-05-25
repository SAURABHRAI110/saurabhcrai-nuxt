import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }, {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,600,700"
      },

      {
        rel: 'stylesheet',
        href: 'https://daneden.github.io/animate.css/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: '~/assets/css/menu.css'
      },

    ],



    script: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js'
      },
    ],


  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#000",
    throttle: 0,
    height: '2px',
  },
  /*
   ** Global CSS
   */
  css: [
    '@assets/css/main.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/rellax',
      ssr: false
    },
    {
      src: "~/plugins/aos",
      ssr: false
    }

  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
