<script setup lang="ts">
import { findCaseStudy } from '~/data/case-studies'

const route = useRoute()
const { messages, localizedPath } = useSiteLocale()
const caseStudy = findCaseStudy(String(route.params.slug))

if (!caseStudy) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const projectText = computed(() => ({ ...messages.value.projectLabels, ...messages.value.projects[caseStudy.slug as keyof typeof messages.value.projects] }))

const colorMode = useColorMode()
const theme = computed(() => colorMode.value === 'dark' ? 'dark' : 'light')
const hasScrolled = ref(false)
let removeHeaderScroll = () => {}
const navigationItems = computed(() => [{ label: projectText.value.all, to: localizedPath('/#projects') }])

useLocalizedMetadata(computed(() => `${caseStudy.name} · Guada Franco`), computed(() => projectText.value.description))

onMounted(() => {
  const updateHeader = () => { hasScrolled.value = window.scrollY > 0 }
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
  removeHeaderScroll = () => window.removeEventListener('scroll', updateHeader)
})

onBeforeUnmount(() => removeHeaderScroll())

</script>

<template>
  <main>
    <SiteHeader
      :home-to="localizedPath('/')"
      :navigation-label="projectText.navigation"
      :items="navigationItems"
      :light-label="projectText.light"
      :dark-label="projectText.dark"
      :open-menu-label="messages.copy.openMenu"
      :close-menu-label="messages.copy.closeMenu"
      :background-active="hasScrolled"
    />

    <UContainer as="article" class="case-study">
      <p class="eyebrow">{{ projectText.kind }}</p>
      <h1>{{ caseStudy.name }}<span>.</span></h1>
      <p class="intro">{{ projectText.description }}</p>
      <UButton class="source-link" :href="caseStudy.repository" target="_blank" rel="noreferrer" color="neutral" variant="outline" trailing-icon="i-lucide-external-link">
        {{ projectText.source }}
      </UButton>

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
        <img :src="`/diagrams/${theme}/${caseStudy.slug}.svg`" :alt="projectText.diagramDescription">
      </figure>

      <section class="case-study-result"><p class="eyebrow">{{ projectText.resultLabel }}</p><p>{{ projectText.result }}</p></section>
      <section class="case-study-technologies" :aria-label="projectText.technologies"><p class="eyebrow">{{ projectText.technologies }}</p><div class="technology-list"><TechnologyBadge v-for="[name, icon] in caseStudy.technologies" :key="name" :name="name" :icon="icon" /></div></section>
      <UButton class="back-link" :to="localizedPath('/#projects')" color="neutral" variant="outline">{{ projectText.back }}</UButton>
    </UContainer>
  </main>
</template>
