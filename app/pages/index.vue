<script setup lang="ts">
const { messages, localizedPath } = useSiteLocale()
const copy = computed(() => messages.value.copy)
useLocalizedMetadata(computed(() => messages.value.metadata.homeTitle), computed(() => messages.value.metadata.homeDescription))

const theme = ref<'light' | 'dark'>('dark')
const menuOpen = ref(false)
const hasReachedAbout = ref(false)
const aboutSection = ref<HTMLElement | null>(null)
const auroraCanvas = ref<HTMLCanvasElement | null>(null)
let auroraFrame = 0
let removeAuroraResize = () => {}
let removeHeaderScroll = () => {}
const me = {
  name: 'Guada Franco',
  email: 'franco.rguadalupe@gmail.com',
  github: 'https://github.com/gdpe-franco',
  linkedin: 'https://www.linkedin.com/in/guadalupe-franco/'
}

const projectInquiry = `mailto:${me.email}?subject=${encodeURIComponent('Project inquiry')}`

const services = computed(() => messages.value.services)

const experienceStart = new Date(2022, 10, 21)
const experienceDuration = computed(() => {
  const now = new Date()
  let months = (now.getFullYear() - experienceStart.getFullYear()) * 12 + now.getMonth() - experienceStart.getMonth()
  if (now.getDate() < experienceStart.getDate()) months -= 1

  const years = Math.floor(months / 12)
  return `${years} ${copy.value.years}, ${months % 12} ${copy.value.months}`
})

const caseStudies = computed(() => messages.value.caseStudies)

const experiments = computed(() => messages.value.experiments)

const technologies = [
  ['PHP', 'php'], ['Laravel', 'laravel'], ['Symfony', 'symfony'], ['Django', 'django'], ['Python', 'python'], ['Go', 'go'], ['REST APIs', 'openapiinitiative'], ['SOAP APIs', 'soapui'], ['Microservices', 'docker'], ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Vue.js', 'vuedotjs'], ['Nuxt', 'nuxt'], ['PostgreSQL', 'postgresql'], ['MySQL', 'mysql'], ['Redis', 'redis'], ['Docker', 'docker'], ['Git', 'git'], ['GitHub Actions', 'githubactions'], ['Jenkins', 'jenkins'], ['PHPUnit', 'phpunit'], ['Swagger', 'swagger'], ['Sentry', 'sentry'], ['New Relic', 'newrelic'], ['AI agents', 'openai'], ['MCP', 'openai'], ['Codex', 'openai'], ['Claude Code', 'anthropic'], ['GitHub Copilot', 'githubcopilot'],
]

const experienceIcons: Record<string, string> = { Symfony: 'symfony', APIs: 'openapiinitiative', MCP: 'openai', OpenAI: 'openai', Laravel: 'laravel', Go: 'go', Python: 'python', 'Vue.js': 'vuedotjs', React: 'react', Integrations: 'openapiinitiative', PrimeVue: 'primevue', UML: 'uml' }

const experiences = computed(() => messages.value.experiences)

onMounted(() => {
  theme.value = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  const updateHeader = () => { hasReachedAbout.value = (aboutSection.value?.getBoundingClientRect().top ?? 1) <= 0 }
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
  removeHeaderScroll = () => window.removeEventListener('scroll', updateHeader)

  const canvas = auroraCanvas.value
  const context = canvas?.getContext('2d')
  if (!canvas || !context) return

  const hues = [330, 355, 20, 48, 94, 174, 218, 276]
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const draw = (time: number) => {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const scale = Math.min(window.devicePixelRatio || 1, 2)

    if (canvas.width !== width * scale || canvas.height !== height * scale) {
      canvas.width = width * scale
      canvas.height = height * scale
    }

    context.setTransform(scale, 0, 0, scale, 0, 0)
    context.clearRect(0, 0, width, height)
    context.globalCompositeOperation = 'lighter'

    hues.forEach((hue, index) => {
      const phase = time / 8500 + index * 1.17
      const mobile = width < 701
      const x = width * (mobile ? .08 + index / (hues.length - 1) * .84 : .26 + index * .075) + Math.sin(phase) * (mobile ? width * .08 : 62)
      const y = 75 + (index % 3) * 48 + Math.cos(phase * 1.35) * 40
      const radius = 215 + Math.sin(phase * 1.7) * 30

      context.save()
      context.translate(x, y)
      context.rotate(-.14 + Math.sin(phase) * .11)
      context.scale(1.1, 1.45)
      context.filter = 'blur(26px)'
      const glow = context.createRadialGradient(0, 0, 10, 0, 0, radius)
      glow.addColorStop(0, `hsla(${hue}, 84%, 62%, .17)`)
      glow.addColorStop(.5, `hsla(${hue}, 78%, 53%, .09)`)
      glow.addColorStop(1, `hsla(${hue}, 72%, 45%, 0)`)
      context.fillStyle = glow
      context.beginPath()
      context.arc(0, 0, radius, 0, Math.PI * 2)
      context.fill()
      context.restore()
    })

    if (!reducedMotion) auroraFrame = requestAnimationFrame(draw)
  }

  const resize = () => {
    cancelAnimationFrame(auroraFrame)
    draw(performance.now())
  }
  removeAuroraResize = () => window.removeEventListener('resize', resize)
  window.addEventListener('resize', resize)
  draw(performance.now())
})

onBeforeUnmount(() => {
  cancelAnimationFrame(auroraFrame)
  removeAuroraResize()
  removeHeaderScroll()
})

watch(theme, (value) => {
  if (import.meta.client) localStorage.setItem('theme', value)
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
 </script>

<template>
  <main :data-theme="theme">
    <div class="grain" aria-hidden="true" />
    <canvas ref="auroraCanvas" class="aurora" aria-hidden="true" />

    <nav class="nav wrap" :class="{ 'is-scrolled': hasReachedAbout }" :aria-label="copy.navigation">
      <a class="wordmark" href="#" :aria-label="copy.home">GF<span>.</span></a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="site-navigation" :aria-label="menuOpen ? copy.closeMenu : copy.openMenu" @click="menuOpen = !menuOpen">☰</button>
      <div id="site-navigation" class="nav-actions" :class="{ 'is-open': menuOpen }">
        <a href="#experience" @click="menuOpen = false">{{ copy.nav[0] }}</a>
        <a href="#projects" @click="menuOpen = false">{{ copy.nav[1] }}</a>
        <a href="#services" @click="menuOpen = false">{{ copy.nav[2] }}</a>
        <a href="#contact" @click="menuOpen = false">{{ copy.nav[3] }}</a>
        <LanguageSwitcher />
        <button class="theme-toggle" type="button" :aria-label="theme === 'dark' ? copy.light : copy.dark" @click="toggleTheme">
          {{ theme === 'dark' ? '☼' : '◐' }}
        </button>
      </div>
    </nav>

    <section id="top" class="hero wrap">
      <div class="hero-copy">
        <p class="eyebrow">{{ copy.role }}</p>
        <h1>{{ copy.greeting }}<span>.</span></h1>
        <p class="intro">{{ copy.intro }}</p>
        <div class="inline-actions">
          <a class="button" href="#services">{{ copy.projectsCta }}</a>
          <a class="quiet-button" href="/resume.pdf">{{ copy.resume }}</a>
        </div>
        <div class="mission">
          <p class="eyebrow">{{ copy.drives }}</p>
          <p>{{ copy.drivesText }}</p>
        </div>
      </div>
      <div class="portrait">
        <img src="/pfp.jpg" :alt="copy.portraitAlt">
      </div>
    </section>

    <section id="about" ref="aboutSection" class="section wrap about">
      <div class="about-copy">
        <h2>{{ copy.about }}<span>.</span></h2>
        <p v-for="paragraph in messages.about" :key="paragraph">{{ paragraph }}</p>
        <div class="inline-actions">
          <a class="quiet-button profile-link" :href="me.github" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.84.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>GitHub</a>
          <a class="quiet-button profile-link" :href="me.linkedin" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z" /></svg>LinkedIn</a>
        </div>
      </div>
      <div class="stats" :aria-label="copy.highlights">
        <article class="stat large-stat"><span>{{ copy.experience }}</span><strong>{{ experienceDuration }}<span>.</span></strong></article>
      </div>
    </section>

    <section id="experience" class="section wrap">
      <h2>{{ copy.experience }}<span>.</span></h2>
      <p class="section-intro">{{ copy.experienceIntro }}</p>
      <div class="experience-list">
        <article v-for="experience in experiences" :key="experience.company" class="experience-card">
          <div class="experience-heading">
            <div><h3>{{ experience.role }}</h3><a :href="experience.url" target="_blank" rel="noreferrer">{{ experience.company }} ↗</a></div>
            <div class="experience-meta"><span>● {{ experience.period }}</span><small>⌖ {{ experience.workMode }} · {{ experience.location }}</small></div>
          </div>
          <p class="experience-summary">{{ experience.summary }}</p>
          <div class="tags"><span v-for="tag in experience.tags" :key="tag"><TechnologyIcon :icon="experienceIcons[tag]" />{{ tag }}</span></div>
        </article>
      </div>
      <a class="quiet-button resume" href="/resume.pdf">{{ copy.viewResume }}</a>
    </section>

    <section id="projects" class="section wrap">
      <h2>{{ copy.projects }}<span>.</span></h2>
      <p class="section-intro">{{ copy.projectsIntro }} {{ copy.experienceBefore }} <a class="section-link" href="#experience">{{ copy.experience }}</a> {{ copy.experienceAfter }}</p>
      <div class="projects">
        <article v-for="project in caseStudies" :key="project.name" class="project-card">
          <div class="project-copy">
            <p>{{ project.kind }}</p>
            <h3>{{ project.name }}</h3>
            <p class="project-description">{{ project.text }}</p>
            <div class="project-stack"><span v-for="[name, icon] in project.stack" :key="name"><TechnologyIcon :icon="icon" />{{ name }}</span></div>
            <div class="project-actions">
              <NuxtLink class="project-case-study" :to="localizedPath(project.detail)">{{ copy.viewProject }} <span aria-hidden="true">→</span></NuxtLink>
            </div>
            <a class="project-repo" :href="project.repo" target="_blank" rel="noreferrer" :aria-label="`${copy.github}: ${project.name}`" :title="`${copy.github}: ${project.name}`"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.84.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg></a>
          </div>
        </article>
      </div>
      <div class="experiments">
        <p class="eyebrow">{{ copy.experiment }}</p>
        <article v-for="experiment in experiments" :key="experiment.name" class="experiment-card">
          <div>
            <h3>{{ experiment.name }}</h3>
            <p>{{ experiment.text }}</p>
            <div class="project-stack"><span v-for="[name, icon] in experiment.stack" :key="name"><TechnologyIcon :icon="icon" />{{ name }}</span></div>
          </div>
          <a class="project-repo" :href="experiment.repo" target="_blank" rel="noreferrer" :aria-label="`Open ${experiment.name} on GitHub`" :title="`Open ${experiment.name} on GitHub`"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.84.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg></a>
        </article>
      </div>
    </section>

    <section id="services" class="section wrap">
      <h2>{{ copy.services }}<span>.</span></h2>
      <p class="section-intro">{{ copy.servicesIntro }}</p>
      <div class="services">
        <article v-for="service in services" :key="service.name" class="service-card">
          <p class="service-level">{{ service.level }}</p>
          <h3>{{ service.name }}</h3>
          <p>{{ service.text }}</p>
        </article>
      </div>
    </section>

    <section class="section wrap">
      <h2>{{ copy.technologies }}<span>.</span></h2>
      <p class="section-intro">{{ copy.technologiesIntro }}</p>
      <div class="technology-list">
        <span v-for="[name, icon] in technologies" :key="name"><TechnologyIcon :icon="icon" />{{ name }}</span>
      </div>
    </section>

    <section id="contact" class="section wrap contact">
      <h2>{{ copy.contact }}<span>.</span></h2>
      <p class="section-intro">{{ copy.contactIntro }}</p>
      <div class="contact-actions">
        <a class="button" :href="projectInquiry">{{ copy.discuss }}</a>
      </div>
    </section>

    <footer class="footer wrap">
      <p>© {{ new Date().getFullYear() }} {{ me.name }}</p>
      <a :href="`mailto:${me.email}`">{{ me.email }} ↗</a>
    </footer>
  </main>
</template>
