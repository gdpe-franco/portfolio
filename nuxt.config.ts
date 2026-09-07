import { localeCodes, defaultLocale, localePath } from './app/locales'
import { caseStudies } from './app/data/case-studies'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  hooks: {
    'pages:extend'(pages) {
      const originals = [...pages]
      for (const code of localeCodes.filter(code => code !== defaultLocale)) {
        for (const page of originals) {
          pages.push({ ...page, name: `${String(page.name)}-${code}`, path: localePath(page.path, code) })
        }
      }
    },
  },
  nitro: {
    prerender: {
      routes: localeCodes.flatMap(code => ['/', ...caseStudies.map(project => `/projects/${project.slug}`)].map(path => localePath(path, code))),
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=plex-gf' }],
    },
  },
})
