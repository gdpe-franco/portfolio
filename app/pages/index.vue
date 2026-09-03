<script setup lang="ts">
const theme = ref<'light' | 'dark'>('dark')
const hasReachedAbout = ref(false)
const aboutSection = ref<HTMLElement | null>(null)
const auroraCanvas = ref<HTMLCanvasElement | null>(null)
let auroraFrame = 0
let removeAuroraResize = () => {}
let removeHeaderScroll = () => {}
const me = {
  name: 'Guada Franco',
  email: 'franco.rguadalupe@gmail.com',
  github: 'https://github.com/gdpe-franco'
}

const projectInquiry = `mailto:${me.email}?subject=${encodeURIComponent('Project inquiry')}`

const services = [
  { name: 'APIs & integrations', level: 'Primary focus', text: 'Connect e-commerce, payment, shipping, invoicing, and internal systems through APIs and webhooks.' },
  { name: 'Automation & data', level: 'Focused offer', text: 'Automate repetitive reporting, CSV, spreadsheet, and data-cleanup tasks.' },
  { name: 'Backend & web systems', level: 'Primary focus', text: 'Add features and maintain Laravel/PHP applications, APIs, and internal software.' },
  { name: 'Custom tools & AI', level: 'Focused offer', text: 'Build small internal tools and practical AI-assisted workflows for specific needs.' },
]

const experienceStart = new Date(2022, 10, 21)
const experienceDuration = computed(() => {
  const now = new Date()
  let months = (now.getFullYear() - experienceStart.getFullYear()) * 12 + now.getMonth() - experienceStart.getMonth()
  if (now.getDate() < experienceStart.getDate()) months -= 1

  const years = Math.floor(months / 12)
  return `${years} years, ${months % 12} months`
})

const caseStudies = [
  { kind: 'Internal tool', name: 'Book Management System', text: 'A local dashboard for managing books and their changes, with role-based access, immutable audit history, and live notifications.', detail: '/projects/book-management-system', repo: 'https://github.com/gdpe-franco/book-management-system', stack: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['Node.js', 'nodedotjs'], ['TypeScript', 'typescript'], ['Redis', 'redis']] },
  { kind: 'Integration & document processing', name: 'CFDI 4.0 Generator', text: 'A focused Laravel technical test that converts structured JSON into CFDI 4.0 Ingreso XML and validates it locally.', detail: '/projects/cfdi-4-generator', repo: 'https://github.com/gdpe-franco/cfdi-4-generator', stack: [['Laravel', 'laravel'], ['PHP', 'php'], ['Docker', 'docker']] },
  { kind: 'Public data application', name: 'Geographical Keys', text: 'A public application for browsing Mexico’s federal entities and municipalities through the INEGI Geo Catalog.', detail: '/projects/geographical-keys', repo: 'https://github.com/gdpe-franco/geostatistical-keys', stack: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['MySQL', 'mysql'], ['Docker', 'docker']] },
]

const experiments = [
  { name: 'Cat Gesture Meme Tracker', text: 'A browser experiment that uses MediaPipe to respond to detected hand gestures with cat reactions.', repo: 'https://github.com/gdpe-franco/gesture-meme-tracker', stack: [['JavaScript', 'javascript'], ['MediaPipe', 'mediapipe'], ['Docker', 'docker']] },
]

const technologies = [
  ['PHP', 'php'], ['Laravel', 'laravel'], ['Symfony', 'symfony'], ['Django', 'django'], ['Python', 'python'], ['Go', 'go'], ['REST APIs', 'openapiinitiative'], ['SOAP APIs', 'soapui'], ['Microservices', 'docker'], ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Vue.js', 'vuedotjs'], ['Nuxt', 'nuxt'], ['PostgreSQL', 'postgresql'], ['MySQL', 'mysql'], ['Redis', 'redis'], ['Docker', 'docker'], ['Git', 'git'], ['GitHub Actions', 'githubactions'], ['Jenkins', 'jenkins'], ['PHPUnit', 'phpunit'], ['Swagger', 'swagger'], ['Sentry', 'sentry'], ['New Relic', 'newrelic'], ['AI agents', 'openai'], ['MCP', 'openai'], ['Codex', 'openai'], ['Claude Code', 'anthropic'], ['GitHub Copilot', 'githubcopilot'],
]

const experiences = [
  { role: 'Software Engineer', company: 'MedTrainer', url: 'https://medtrainer.com/', period: 'Sep 2025 – Jul 2026', workMode: 'Remote', location: 'Querétaro, México', summary: 'Built Symfony features and APIs for a SaaS platform used by 8,000+ organizations. Contributed technical proposals, production support, and an internal MCP integration using OpenAI’s Responses API.', tags: ['Symfony', 'APIs', 'MCP + OpenAI'] },
  { role: 'Full-Stack Developer', company: 'Mienvío', url: 'https://www.mienvio.mx/', period: 'Aug 2023 – Sep 2025', workMode: 'Remote', location: 'Monterrey, México', summary: 'Built Laravel applications, Go and Python microservices, and Vue internal tools for a logistics platform used by 1,000+ active merchants. Worked on marketplace and carrier integrations, SAML SSO, and billing reports.', tags: ['Laravel', 'Go + Python', 'Vue.js', 'Integrations'] },
  { role: 'Web Developer Intern', company: 'Universidad Politécnica de Querétaro', url: 'https://www.upq.mx/#/', period: '2022 – 2023', workMode: 'On-site', location: 'Querétaro, México', summary: 'Worked on system analysis, UI implementation, Laravel APIs, and documentation.', tags: ['Laravel', 'PrimeVue', 'UML'] },
]

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
      const x = width * (.26 + index * .075) + Math.sin(phase) * 62
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

    <nav class="nav wrap" :class="{ 'is-scrolled': hasReachedAbout }" aria-label="Main navigation">
      <a class="wordmark" href="#" aria-label="Home">GF<span>.</span></a>
      <div class="nav-actions">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          {{ theme === 'dark' ? '☼' : '◐' }}
        </button>
      </div>
    </nav>

    <section id="top" class="hero wrap">
      <div class="hero-copy">
        <p class="eyebrow">FULL-STACK SOFTWARE ENGINEER · INDEPENDENT DEVELOPER</p>
        <h1>hey, I’m Guada<span>.</span></h1>
        <p class="intro">I’m an engineer who enjoys understanding systems in context: the custom workflows behind them and the people who rely on them. I build reliable software that fits the way work actually happens and makes it simpler.</p>
        <div class="inline-actions">
          <a class="button" href="#services">For projects →</a>
          <a class="quiet-button" href="/resume.pdf">View resume →</a>
        </div>
        <div class="mission">
          <p class="eyebrow">↗ WHAT DRIVES ME</p>
          <p>Making thoughtful technical choices, working generously with others, and building software that solves a real problem and remains cared for over time.</p>
        </div>
      </div>
      <div class="portrait">
        <img src="/pfp.jpg" alt="Guada Franco" />
      </div>
    </section>

    <section id="about" ref="aboutSection" class="section wrap about">
      <div class="about-copy">
        <h2>About me<span>.</span></h2>
        <p>My work spans user-facing interfaces, APIs, data, and the practical details that make a product work well as a whole. I build integrations and internal tools that support daily work.</p>
        <p>Backend engineering is where I feel most at home, especially background jobs, queues and retries, observability, authentication, and clear service boundaries. At the same time, I care about the whole development lifecycle, from understanding a problem to shipping and supporting a solution.</p>
        <p>On a normal workday I use AI agents, MCP servers, and coding assistants for research, prototyping, and routine development tasks. I find this new wave of tools fascinating.</p>
        <div class="inline-actions">
          <a class="button" :href="me.github" target="_blank" rel="noreferrer">◉ View my GitHub →</a>
        </div>
      </div>
      <div class="stats" aria-label="Portfolio highlights">
        <article class="stat large-stat"><span>Experience</span><strong>{{ experienceDuration }}<span>.</span></strong></article>
      </div>
    </section>

    <section id="experience" class="section wrap">
      <h2>Experience<span>.</span></h2>
      <p class="section-intro">Professional experience across SaaS, logistics, integrations, and internal tools.</p>
      <div class="experience-list">
        <article v-for="experience in experiences" :key="experience.company" class="experience-card">
          <div class="experience-heading">
            <div><h3>{{ experience.role }}</h3><a :href="experience.url" target="_blank" rel="noreferrer">{{ experience.company }} ↗</a></div>
            <div class="experience-meta"><span>● {{ experience.period }}</span><small>⌖ {{ experience.workMode }} · {{ experience.location }}</small></div>
          </div>
          <p class="experience-summary">{{ experience.summary }}</p>
          <div class="tags"><span v-for="tag in experience.tags" :key="tag">{{ tag }}</span></div>
        </article>
      </div>
      <a class="quiet-button resume" href="/resume.pdf">View full resume →</a>
    </section>

    <section id="projects" class="section wrap">
      <h2>Projects<span>.</span></h2>
      <p class="section-intro">Each project includes a concise case study of the system, trade-offs, and delivery. My professional experience is described separately in the <a class="section-link" href="#experience">Experience</a> section.</p>
      <div class="projects">
        <article v-for="project in caseStudies" :key="project.name" class="project-card">
          <div class="project-copy">
            <p>{{ project.kind }}</p>
            <h3>{{ project.name }}</h3>
            <p class="project-description">{{ project.text }}</p>
            <div class="project-stack"><span v-for="[name, icon] in project.stack" :key="name"><img :src="`https://cdn.simpleicons.org/${icon}`" :alt="`${name} logo`">{{ name }}</span></div>
            <div class="project-actions">
              <NuxtLink class="project-case-study" :to="project.detail">View project <span aria-hidden="true">→</span></NuxtLink>
            </div>
            <a class="project-repo" :href="project.repo" target="_blank" rel="noreferrer" :aria-label="`Open ${project.name} on GitHub`" :title="`Open ${project.name} on GitHub`"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.84.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg></a>
          </div>
        </article>
      </div>
      <div class="experiments">
        <p class="eyebrow">Experiment</p>
        <article v-for="experiment in experiments" :key="experiment.name" class="experiment-card">
          <div>
            <h3>{{ experiment.name }}</h3>
            <p>{{ experiment.text }}</p>
            <div class="project-stack"><span v-for="[name, icon] in experiment.stack" :key="name"><img :src="`https://cdn.simpleicons.org/${icon}`" :alt="`${name} logo`">{{ name }}</span></div>
          </div>
          <a class="project-repo" :href="experiment.repo" target="_blank" rel="noreferrer" :aria-label="`Open ${experiment.name} on GitHub`" :title="`Open ${experiment.name} on GitHub`"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.84.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg></a>
        </article>
      </div>
    </section>

    <section id="services" class="section wrap">
      <h2>Services<span>.</span></h2>
      <p class="section-intro">I take on focused work involving integrations, automation, backend systems, and internal tools.</p>
      <div class="services">
        <article v-for="service in services" :key="service.name" class="service-card">
          <p class="service-level">{{ service.level }}</p>
          <h3>{{ service.name }}</h3>
          <p>{{ service.text }}</p>
        </article>
      </div>
    </section>

    <section class="section wrap">
      <h2>Technologies I use<span>.</span></h2>
      <p class="section-intro">A mix of what I use often and things I’m getting better at.</p>
      <div class="technology-list">
        <span v-for="[name, icon] in technologies" :key="name"><img :src="`https://cdn.simpleicons.org/${icon}`" :alt="`${name} logo`">{{ name }}</span>
      </div>
    </section>

    <section id="contact" class="section wrap contact">
      <h2>Contact<span>.</span></h2>
      <p class="section-intro">Have a project in mind, or want to talk about working together?</p>
      <div class="contact-actions">
        <a class="button" :href="projectInquiry">Discuss a project →</a>
      </div>
    </section>

    <footer class="footer wrap">
      <p>© {{ new Date().getFullYear() }} {{ me.name }}</p>
      <a :href="`mailto:${me.email}`">{{ me.email }} ↗</a>
    </footer>
  </main>
</template>
