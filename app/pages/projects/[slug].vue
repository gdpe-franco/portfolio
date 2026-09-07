<script setup lang="ts">
import { findCaseStudy } from '~/data/case-studies'

const route = useRoute()
const { messages, localizedPath } = useSiteLocale()
const caseStudy = findCaseStudy(String(route.params.slug))

if (!caseStudy) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const projectText = computed(() => ({ ...messages.value.projectLabels, ...messages.value.projects[caseStudy.slug as keyof typeof messages.value.projects] }))

const theme = ref<'light' | 'dark'>('dark')
const menuOpen = ref(false)
const hasScrolled = ref(false)
let removeHeaderScroll = () => {}

useLocalizedMetadata(computed(() => `${caseStudy.name} · Guada Franco`), computed(() => projectText.value.description))

onMounted(() => {
  theme.value = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  const updateHeader = () => { hasScrolled.value = window.scrollY > 0 }
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
  removeHeaderScroll = () => window.removeEventListener('scroll', updateHeader)
})

onBeforeUnmount(() => removeHeaderScroll())

watch(theme, (value) => {
  if (import.meta.client) localStorage.setItem('theme', value)
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <main class="case-study-page" :data-theme="theme">
    <nav class="nav wrap" :class="{ 'is-scrolled': hasScrolled }" :aria-label="projectText.navigation">
      <NuxtLink class="wordmark" :to="localizedPath('/')" :aria-label="projectText.home">GF<span>.</span></NuxtLink>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="project-navigation" :aria-label="menuOpen ? messages.copy.closeMenu : messages.copy.openMenu" @click="menuOpen = !menuOpen">☰</button>
      <div id="project-navigation" class="nav-actions" :class="{ 'is-open': menuOpen }">
        <NuxtLink :to="localizedPath('/#projects')">{{ projectText.all }}</NuxtLink>
        <LanguageSwitcher />
        <button class="theme-toggle" type="button" :aria-label="theme === 'dark' ? projectText.light : projectText.dark" @click="toggleTheme">
          {{ theme === 'dark' ? '☼' : '◐' }}
        </button>
      </div>
    </nav>

    <article class="case-study wrap">
      <p class="eyebrow">{{ caseStudy.kind }}</p>
      <h1>{{ caseStudy.name }}<span>.</span></h1>
      <p class="intro">{{ projectText.description }}</p>
      <a class="source-link" :href="caseStudy.repository" target="_blank" rel="noreferrer">{{ projectText.source }}</a>

      <section class="case-study-context">
        <p class="eyebrow">{{ projectText.contextLabel }}</p>
        <p>{{ projectText.context }}</p>
      </section>

      <div class="case-study-details">
        <section><p class="eyebrow">{{ projectText.approachLabel }}</p><p>{{ projectText.approach }}</p></section>
        <section><p class="eyebrow">{{ projectText.decisionsLabel }}</p><p>{{ projectText.decisions }}</p></section>
      </div>

      <figure class="system-diagram" :class="`system-diagram--${caseStudy.slug}`">
        <figcaption><p class="eyebrow">{{ projectText.design }}</p></figcaption>
        <img :src="`/diagrams/${theme}/${caseStudy.slug}.svg`" :alt="caseStudy.diagram.description">
      </figure>

      <section class="case-study-result"><p class="eyebrow">{{ projectText.resultLabel }}</p><p>{{ projectText.result }}</p></section>
      <section class="case-study-technologies" :aria-label="projectText.technologies"><p class="eyebrow">{{ projectText.technologies }}</p><div class="technology-list"><span v-for="[name, icon] in caseStudy.technologies" :key="name"><TechnologyIcon :icon="icon" />{{ name }}</span></div></section>
      <NuxtLink class="quiet-button" :to="localizedPath('/#projects')">{{ projectText.back }}</NuxtLink>
    </article>
  </main>
</template>
