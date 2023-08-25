export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    head: {
    script: [
        {
            src:"https://scriptstaging.cookieyes.com/client_data/2daa7fffffb054d3619d1ef7/script.js",
            hid: "cookieyes",
            type: "text/javascript",
          },
    ],
  },
})
