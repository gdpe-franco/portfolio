// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Guada Franco · Full-Stack Software Engineer',
      meta: [
        {
          name: 'description',
          content:
            'Guada Franco is a full-stack software engineer and independent developer who builds integrations, backend systems, automation, and custom tools.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
