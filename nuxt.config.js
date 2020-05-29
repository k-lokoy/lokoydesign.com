
export default {
  mode: 'universal',

  server: {
    port: 8000,
    host: "0.0.0.0"
  },

  head: {
    title: 'Lokøy Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Graphic design, UI/UX Design, Logo design, branding, programming, JavaScript, React, Electron, Vue JS. Check out my portfolio for examples.' },
      { name: 'title', content: 'Lokøy Design | Graphic design, UI/UX Design, Logo design and programming' },
      { name: 'msapplication-TileColor', content: 'da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest'},
      { rel: 'stylesheet', type: 'text/css', href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,300&display=swap' }
    ]
  },

  loading: { color: '#fff' },

  build: {
    extend (config, ctx) {
    }
  },

  generate: {
    dir: 'docs'
  }
}
