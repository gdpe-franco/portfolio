<script setup lang="ts">
import { caseStudies as projectData } from '~/data/case-studies'

const { messages, localizedPath } = useSiteLocale()
const copy = computed(() => messages.value.copy)
useLocalizedMetadata(computed(() => messages.value.metadata.homeTitle), computed(() => messages.value.metadata.homeDescription))

const hasReachedAbout = ref(false)
let removeHeaderScroll = () => {}
const me = {
  name: 'Guada Franco',
  email: 'franco.rguadalupe@gmail.com',
  github: 'https://github.com/gdpe-franco',
  linkedin: 'https://www.linkedin.com/in/guadalupe-franco/',
}

const projectInquiry = `mailto:${me.email}?subject=${encodeURIComponent('Project inquiry')}`

const services = computed(() => messages.value.services)
const navigationItems = computed(() => [
  { label: copy.value.nav[0]!, to: '#experience' },
  { label: copy.value.nav[1]!, to: '#projects' },
  { label: copy.value.nav[2]!, to: '#services' },
  { label: copy.value.nav[3]!, to: '#contact' },
])

const experienceStart = new Date(2022, 10, 21)
const experienceDuration = computed(() => {
  const now = new Date()
  let months = (now.getFullYear() - experienceStart.getFullYear()) * 12 + now.getMonth() - experienceStart.getMonth()
  if (now.getDate() < experienceStart.getDate()) months -= 1

  const years = Math.floor(months / 12)
  return `${years} ${copy.value.years}, ${months % 12} ${copy.value.months}`
})

const caseStudies = computed(() => projectData.map(project => ({ ...project, ...messages.value.projects[project.slug] })))

const experiments = computed(() => messages.value.experiments)

const technologies = [
  ['PHP', 'php'], ['Laravel', 'laravel'], ['Symfony', 'symfony'], ['Node.js', ''], ['NestJS', 'nestjs'], ['Python', 'python'], ['Go', 'go'], ['REST APIs', 'openapiinitiative'], ['SOAP APIs', ''], ['Microservices', ''], ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Vue.js', 'vuedotjs'], ['Nuxt', 'nuxt'], ['PostgreSQL', 'postgresql'], ['MySQL', 'mysql'], ['Redis', 'redis'], ['Docker', 'docker'], ['Amazon S3', 'amazons3'], ['Amazon SQS', 'amazonsqs'], ['Amazon EC2', 'amazonec2'], ['Git', 'git'], ['GitHub Actions', 'githubactions'], ['Jenkins', 'jenkins'], ['PHPUnit', ''], ['Swagger', 'swagger'], ['Sentry', 'sentry'], ['New Relic', 'newrelic'], ['Model Context Protocol (MCP)', ''], ['OpenAI Responses API', 'openai'], ['Hermes Agent', 'hermes'], ['Codex', ''], ['Claude Code', ''], ['GitHub Copilot', 'githubcopilot'],
]

const experienceIcons: Record<string, string> = { Symfony: 'symfony', APIs: 'openapiinitiative', OpenAI: 'openai', Laravel: 'laravel', Go: 'go', Python: 'python', 'Vue.js': 'vuedotjs', React: 'react', Auth0: 'auth0', PrimeVue: 'primevue', UML: 'uml' }

const experiences = computed(() => messages.value.experiences)

onMounted(() => {
  const updateHeader = () => { hasReachedAbout.value = (document.getElementById('about')?.getBoundingClientRect().top ?? 1) <= 0 }
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
  removeHeaderScroll = () => window.removeEventListener('scroll', updateHeader)
})

onBeforeUnmount(() => {
  removeHeaderScroll()
})

</script>

<template>
  <main>
    <div class="grain" aria-hidden="true" />
    <div class="aurora" aria-hidden="true" />

    <SiteHeader
      :home-to="localizedPath('/')"
      :navigation-label="copy.navigation"
      :items="navigationItems"
      :light-label="copy.light"
      :dark-label="copy.dark"
      :open-menu-label="copy.openMenu"
      :close-menu-label="copy.closeMenu"
      :background-active="hasReachedAbout"
    />

    <UContainer id="top" as="section" class="hero">
      <div class="hero-copy">
        <p class="eyebrow">{{ copy.role }}</p>
        <h1>{{ copy.greeting }}<span>.</span></h1>
        <p class="intro">{{ copy.intro }}</p>
        <div class="inline-actions">
          <UButton href="#services" color="primary" variant="solid">{{ copy.projectsCta }}</UButton>
          <UButton href="/resume.pdf" external color="neutral" variant="outline">{{ copy.resume }}</UButton>
        </div>
        <UCard class="mission">
          <p class="eyebrow">{{ copy.drives }}</p>
          <p>{{ copy.drivesText }}</p>
        </UCard>
      </div>
      <div class="portrait">
        <img src="/pfp.jpg" :alt="copy.portraitAlt">
      </div>
    </UContainer>

    <UContainer id="about" as="section" class="section about">
      <div class="about-copy">
        <h2>{{ copy.about }}<span>.</span></h2>
        <p v-for="paragraph in messages.about" :key="paragraph">{{ paragraph }}</p>
        <div class="inline-actions">
          <UButton :href="me.github" target="_blank" rel="noreferrer" color="neutral" variant="outline" icon="i-simple-icons-github">GitHub</UButton>
          <UButton :href="me.linkedin" target="_blank" rel="noreferrer" color="neutral" variant="outline" icon="i-simple-icons-linkedin">LinkedIn</UButton>
        </div>
      </div>
      <div class="stats" :aria-label="copy.highlights">
        <UCard as="article" class="stat large-stat"><span>{{ copy.experience }}</span><strong>{{ experienceDuration }}<span>.</span></strong></UCard>
      </div>
    </UContainer>

    <UContainer id="experience" as="section" class="section">
      <h2>{{ copy.experience }}<span>.</span></h2>
      <p class="section-intro">{{ copy.experienceIntro }}</p>
      <div class="experience-list">
        <UCard v-for="experience in experiences" :key="experience.company" as="article" class="experience-card">
          <div class="experience-heading">
            <div><h3>{{ experience.role }}</h3><a :href="experience.url" target="_blank" rel="noreferrer">{{ experience.company }} ↗</a></div>
            <div class="experience-meta"><span>● {{ experience.period }}</span><small>⌖ {{ experience.workMode }} · {{ experience.location }}</small></div>
          </div>
          <p class="experience-summary">{{ experience.summary }}</p>
          <div class="tags"><TechnologyBadge v-for="tag in experience.tags" :key="tag" :name="tag" :icon="experienceIcons[tag]" /></div>
        </UCard>
      </div>
      <UButton class="resume" href="/resume.pdf" external color="neutral" variant="outline">{{ copy.viewResume }}</UButton>
    </UContainer>

    <UContainer id="projects" as="section" class="section">
      <h2>{{ copy.projects }}<span>.</span></h2>
      <p class="section-intro">{{ copy.projectsIntro }} {{ copy.experienceBefore }} <a class="section-link" href="#experience">{{ copy.experience }}</a> {{ copy.experienceAfter }}</p>
      <div class="projects">
        <UCard v-for="project in caseStudies" :key="project.name" as="article" class="project-card">
          <div class="project-copy">
            <p>{{ project.kind }}</p>
            <h3>{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-stack"><TechnologyBadge v-for="[name, icon] in project.technologies" :key="name" :name="name" :icon="icon" /></div>
            <UButton class="mt-[18px]" :to="localizedPath(`/projects/${project.slug}`)" color="neutral" variant="outline" size="sm" trailing-icon="i-lucide-arrow-right">{{ copy.viewProject }}</UButton>
            <UButton class="project-repo" :href="project.repository" target="_blank" rel="noreferrer" color="neutral" variant="outline" icon="i-simple-icons-github" square :aria-label="`${copy.github}: ${project.name}`" :title="`${copy.github}: ${project.name}`" />
          </div>
        </UCard>
      </div>
      <div class="experiments">
        <p class="eyebrow">{{ copy.experiment }}</p>
        <UCard v-for="experiment in experiments" :key="experiment.name" as="article" class="experiment-card">
          <div>
            <h3>{{ experiment.name }}</h3>
            <p>{{ experiment.text }}</p>
            <div class="project-stack"><TechnologyBadge v-for="[name, icon] in experiment.stack" :key="name" :name="name" :icon="icon" /></div>
          </div>
          <UButton class="project-repo" :href="experiment.repo" target="_blank" rel="noreferrer" color="neutral" variant="outline" icon="i-simple-icons-github" square :aria-label="`Open ${experiment.name} on GitHub`" :title="`Open ${experiment.name} on GitHub`" />
        </UCard>
      </div>
    </UContainer>

    <UContainer id="services" as="section" class="section">
      <h2>{{ copy.services }}<span>.</span></h2>
      <p class="section-intro">{{ copy.servicesIntro }}</p>
      <div class="services">
        <UCard v-for="service in services" :key="service.name" as="article" class="service-card">
          <p class="service-level">{{ service.level }}</p>
          <h3>{{ service.name }}</h3>
          <p>{{ service.text }}</p>
        </UCard>
      </div>
    </UContainer>

    <UContainer as="section" class="section">
      <h2>{{ copy.technologies }}<span>.</span></h2>
      <p class="section-intro">{{ copy.technologiesIntro }}</p>
      <div class="technology-list">
        <TechnologyBadge v-for="[name, icon] in technologies" :key="name" :name="name" :icon="icon" />
      </div>
    </UContainer>

    <UContainer id="contact" as="section" class="section contact">
      <h2>{{ copy.contact }}<span>.</span></h2>
      <p class="section-intro">{{ copy.contactIntro }}</p>
      <div class="contact-actions">
        <UButton :href="projectInquiry" color="primary" variant="solid" size="lg">{{ copy.discuss }}</UButton>
      </div>
    </UContainer>

    <UContainer as="footer" class="footer">
      <p>© {{ new Date().getFullYear() }} {{ me.name }}</p>
      <a :href="`mailto:${me.email}`">{{ me.email }} ↗</a>
    </UContainer>
  </main>
</template>
