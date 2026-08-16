// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Guada Franco — Software Engineer',
      meta: [{ name: 'description', content: 'Backend software engineer focused on systems architecture and AI workflows.' }],
    },
  },
})
