<script setup lang="ts">
import { findCaseStudy } from '~/data/case-studies'

const route = useRoute()
const caseStudy = findCaseStudy(String(route.params.slug))

if (!caseStudy) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const theme = ref<'light' | 'dark'>('dark')
const hasScrolled = ref(false)
let removeHeaderScroll = () => {}

useHead({
  title: `${caseStudy.name} · Guada Franco`,
  meta: [{ name: 'description', content: caseStudy.description }],
})

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
    <nav class="nav wrap" :class="{ 'is-scrolled': hasScrolled }" aria-label="Project navigation">
      <NuxtLink class="wordmark" to="/" aria-label="Portfolio home">GF<span>.</span></NuxtLink>
      <div class="nav-actions">
        <NuxtLink to="/#projects">All projects</NuxtLink>
        <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          {{ theme === 'dark' ? '☼' : '◐' }}
        </button>
      </div>
    </nav>

    <article class="case-study wrap">
      <p class="eyebrow">{{ caseStudy.kind }}</p>
      <h1>{{ caseStudy.name }}<span>.</span></h1>
      <p class="intro">{{ caseStudy.description }}</p>
      <a class="source-link" :href="caseStudy.repository" target="_blank" rel="noreferrer">Source on GitHub ↗</a>

      <section class="case-study-context">
        <p class="eyebrow">Context &amp; scope</p>
        <p>{{ caseStudy.context }}</p>
      </section>

      <div class="case-study-details">
        <section><p class="eyebrow">Approach</p><p>{{ caseStudy.approach }}</p></section>
        <section><p class="eyebrow">Key decisions</p><p>{{ caseStudy.decisions }}</p></section>
      </div>

      <figure class="system-diagram" :class="`system-diagram--${caseStudy.slug}`">
        <figcaption><p class="eyebrow">System design</p></figcaption>
        <img :src="`/diagrams/${theme}/${caseStudy.slug}.svg`" :alt="caseStudy.diagram.description">
      </figure>

      <section class="case-study-result"><p class="eyebrow">Result</p><p>{{ caseStudy.result }}</p></section>
      <section class="case-study-technologies" aria-label="Technologies used"><p class="eyebrow">Technologies</p><div class="technology-list"><span v-for="[name, icon] in caseStudy.technologies" :key="name"><img :src="`https://cdn.simpleicons.org/${icon}`" :alt="`${name} logo`">{{ name }}</span></div></section>
      <NuxtLink class="quiet-button" to="/#projects">Back to projects →</NuxtLink>
    </article>
  </main>
</template>
