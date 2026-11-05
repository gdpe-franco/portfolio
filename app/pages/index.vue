<script setup lang="ts">
import { caseStudies as projectData } from '~/data/case-studies'
import { locales } from '~/locales'

const { messages, localizedPath, locale } = useSiteLocale()
const copy = computed(() => messages.value.copy)
const resumeUrl = computed(() => locales[locale.value].resumeUrl)
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

const experienceStart = new Date(Date.UTC(2022, 10, 21))
const experienceToday = useState('experience-today', () => Date.now())
const experienceDuration = computed(() => {
  const now = new Date(experienceToday.value)
  let months = (now.getUTCFullYear() - experienceStart.getUTCFullYear()) * 12 + now.getUTCMonth() - experienceStart.getUTCMonth()
  if (now.getUTCDate() < experienceStart.getUTCDate()) months -= 1

  const years = Math.floor(months / 12)
  return `${years} ${copy.value.years}, ${months % 12} ${copy.value.months}`
})

const caseStudies = computed(() => projectData.map(project => ({ ...project, ...messages.value.projects[project.slug] })))

const experiments = computed(() => messages.value.experiments)

const technologies = [
  { name: 'PHP', icon: 'php', categories: ['Backend & APIs'] }, { name: 'Laravel', icon: 'laravel', categories: ['Backend & APIs'] }, { name: 'Symfony', icon: 'symfony', categories: ['Backend & APIs'] }, { name: 'Node.js', icon: '', categories: ['Backend & APIs'] }, { name: 'NestJS', icon: 'nestjs', categories: ['Backend & APIs'] }, { name: 'Python', icon: 'python', categories: ['Backend & APIs'] }, { name: 'FastAPI', icon: 'fastapi', categories: ['Backend & APIs'] }, { name: 'Pydantic', icon: 'pydantic', categories: ['Backend & APIs'] }, { name: 'Go', icon: 'go', categories: ['Backend & APIs'] }, { name: 'REST APIs', icon: 'openapiinitiative', categories: ['Backend & APIs'] }, { name: 'SOAP APIs', icon: '', categories: ['Backend & APIs'] }, { name: 'Microservices', icon: '', categories: ['Backend & APIs'] },
  { name: 'JavaScript', icon: 'javascript', categories: ['Frontend'] }, { name: 'TypeScript', icon: 'typescript', categories: ['Frontend'] }, { name: 'React', icon: 'react', categories: ['Frontend'] }, { name: 'Redux', icon: 'redux', categories: ['Frontend'] }, { name: 'Vue.js', icon: 'vuedotjs', categories: ['Frontend'] }, { name: 'Nuxt', icon: 'nuxt', categories: ['Frontend'] }, { name: 'HTML', icon: 'html5', categories: ['Frontend'] }, { name: 'CSS', icon: 'css3', categories: ['Frontend'] }, { name: 'jQuery', icon: 'jquery', categories: ['Frontend'] }, { name: 'PrimeVue', icon: 'primevue', categories: ['Frontend'] }, { name: 'Pinia', icon: 'pinia', categories: ['Frontend'] },
  { name: 'PostgreSQL', icon: 'postgresql', categories: ['Data & Infrastructure'] }, { name: 'MySQL', icon: 'mysql', categories: ['Data & Infrastructure'] }, { name: 'Redis', icon: 'redis', categories: ['Data & Infrastructure'] }, { name: 'Docker', icon: 'docker', categories: ['Data & Infrastructure'] }, { name: 'Amazon S3', icon: 'amazons3', categories: ['Data & Infrastructure'] }, { name: 'Amazon SQS', icon: 'amazonsqs', categories: ['Data & Infrastructure'] }, { name: 'Amazon EC2', icon: 'amazonec2', categories: ['Data & Infrastructure'] },
  { name: 'Git', icon: 'git', categories: ['Dev Tools'] }, { name: 'GitHub Actions', icon: 'githubactions', categories: ['Dev Tools'] }, { name: 'Jenkins', icon: 'jenkins', categories: ['Dev Tools'] }, { name: 'Cloudflare Pages', icon: 'cloudflare', categories: ['Dev Tools'] }, { name: 'ngrok', icon: 'ngrok', categories: ['Dev Tools'] }, { name: 'PHPUnit', icon: '', categories: ['Dev Tools'] }, { name: 'pytest', icon: 'pytest', categories: ['Dev Tools'] }, { name: 'Playwright', icon: 'playwright', categories: ['Dev Tools'] }, { name: 'Swagger', icon: 'swagger', categories: ['Dev Tools'] }, { name: 'Sentry', icon: 'sentry', categories: ['Dev Tools'] }, { name: 'New Relic', icon: 'newrelic', categories: ['Dev Tools'] },
  { name: 'MCP', icon: '', categories: ['Backend & APIs', 'AI & Agents'] }, { name: 'OpenAI Responses API', icon: 'openai', categories: ['AI & Agents'] }, { name: 'Azure OpenAI', icon: 'openai', categories: ['AI & Agents'] }, { name: 'LangGraph', icon: 'langchain', categories: ['AI & Agents'] }, { name: 'Hermes Agent', icon: 'hermes', categories: ['AI & Agents'] }, { name: 'Codex', icon: '', categories: ['AI & Agents'] }, { name: 'Claude Code', icon: '', categories: ['AI & Agents'] }, { name: 'OpenCode', icon: '', categories: ['AI & Agents'] }, { name: 'GitHub Copilot', icon: 'githubcopilot', categories: ['AI & Agents'] },
]
const selectedTechnologyCategory = ref('All')
const technologyCategories = computed(() => ['All', 'Backend & APIs', 'Frontend', 'Data & Infrastructure', 'Dev Tools', 'AI & Agents'].map((value, index) => ({ value, label: copy.value.technologyCategories[index]! })))
const filteredTechnologies = computed(() => selectedTechnologyCategory.value === 'All'
  ? technologies
  : technologies.filter(technology => technology.categories.includes(selectedTechnologyCategory.value)))

const experienceIcons: Record<string, string> = { Symfony: 'symfony', APIs: 'openapiinitiative', OpenAI: 'openai', Laravel: 'laravel', Go: 'go', Python: 'python', 'Vue.js': 'vuedotjs', React: 'react', Auth0: 'auth0', PrimeVue: 'primevue', UML: 'uml' }

const experiences = computed(() => messages.value.experiences)

onMounted(() => {
  experienceToday.value = Date.now()
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
        <p class="intro intro-questions">{{ copy.introQuestions }}</p>
        <div class="inline-actions">
          <UButton :href="resumeUrl" external color="primary" variant="solid">{{ copy.resume }}</UButton>
          <UButton href="#projects" color="neutral" variant="outline">{{ copy.projectsCta }}</UButton>
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
      <UButton class="resume" :href="resumeUrl" external color="neutral" variant="outline">{{ copy.viewResume }}</UButton>
    </UContainer>

    <UContainer id="projects" as="section" class="section">
      <h2>{{ copy.projects }}<span>.</span></h2>
      <p class="section-intro">{{ copy.projectsIntro }}</p>
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
      <div class="technology-filters" role="group" :aria-label="copy.technologyFilters">
        <button v-for="category in technologyCategories" :key="category.value" type="button" :aria-pressed="selectedTechnologyCategory === category.value" :class="{ 'is-active': selectedTechnologyCategory === category.value }" @click="selectedTechnologyCategory = category.value">
          {{ category.label }}
        </button>
      </div>
      <div class="technology-list">
        <TechnologyBadge v-for="technology in filteredTechnologies" :key="technology.name" :name="technology.name" :icon="technology.icon" />
      </div>
    </UContainer>

    <UContainer id="contact" as="section" class="section contact">
      <h2>{{ copy.contactHeadline }}<span>.</span></h2>
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
