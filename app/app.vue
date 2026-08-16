<script setup lang="ts">
const theme = ref<'light' | 'dark'>('dark')
const auroraCanvas = ref<HTMLCanvasElement | null>(null)
let auroraFrame = 0
let removeAuroraResize = () => {}
const me = {
  name: 'Guadalupe Franco',
  email: 'franco.rguadalupe@gmail.com',
  github: 'https://github.com/gdpe-franco'
}

const experienceStart = new Date(2022, 1, 23)
const experienceDuration = computed(() => {
  const now = new Date()
  let months = (now.getFullYear() - experienceStart.getFullYear()) * 12 + now.getMonth() - experienceStart.getMonth()
  if (now.getDate() < experienceStart.getDate()) months -= 1

  const years = Math.floor(months / 12)
  return `${years} years, ${months % 12} months`
})

const projects = [
  { kind: 'Backend / Full-stack', name: 'Book Management System', text: 'A local book management dashboard with role-based access, immutable audit history, and live notifications.', repo: 'https://github.com/gdpe-franco/book-management-system', stack: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['TypeScript', 'typescript'], ['Redis', 'redis']] },
  { kind: 'Backend / Integrations', name: 'CFDI 4.0 Generator', text: 'A Laravel technical test that converts structured JSON into validated CFDI 4.0 XML.', repo: 'https://github.com/gdpe-franco/cfdi-4-generator', stack: [['Laravel', 'laravel'], ['PHP', 'php'], ['Docker', 'docker']] },
  { kind: 'Geospatial data', name: 'Geographical Keys', text: 'A public application for browsing Mexico’s federal entities and municipalities using the INEGI Geo Catalog.', repo: 'https://github.com/gdpe-franco/geostatistical-keys', stack: [['Laravel', 'laravel'], ['Vue.js', 'vuedotjs'], ['MySQL', 'mysql'], ['Docker', 'docker']] },
  { kind: 'Creative tooling', name: 'Cat Gesture Meme Tracker', text: 'A browser app that uses MediaPipe to show a cat reaction for each detected gesture.', repo: 'https://github.com/gdpe-franco/gesture-meme-tracker', stack: [['JavaScript', 'javascript'], ['MediaPipe', 'mediapipe'], ['Docker', 'docker']] },
]

const technologies = [
  ['PHP', 'php'], ['Laravel', 'laravel'], ['Symfony', 'symfony'], ['Django', 'django'], ['Python', 'python'], ['Go', 'go'], ['REST APIs', 'openapiinitiative'], ['SOAP APIs', 'soapui'], ['Microservices', 'docker'], ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Vue.js', 'vuedotjs'], ['Nuxt', 'nuxt'], ['PostgreSQL', 'postgresql'], ['MySQL', 'mysql'], ['Redis', 'redis'], ['Docker', 'docker'], ['Git', 'git'], ['GitHub Actions', 'githubactions'], ['Jenkins', 'jenkins'], ['PHPUnit', 'phpunit'], ['Swagger', 'swagger'], ['Sentry', 'sentry'], ['New Relic', 'newrelic'], ['AI agents', 'openai'], ['MCP', 'openai'], ['Codex', 'openai'], ['Claude Code', 'anthropic'], ['GitHub Copilot', 'githubcopilot'],
]

const experiences = [
  { role: 'Software Engineer', company: 'MedTrainer', url: 'https://medtrainer.com/', period: 'Sep 2025 – Jul 2026', workMode: 'Remote', location: 'Querétaro, México', summary: 'Shipped Symfony features and APIs end to end for a SaaS platform serving 8,000+ organizations, while contributing technical proposals and long-term platform improvements.', tags: ['Symfony', 'APIs', 'MCP + OpenAI'] },
  { role: 'Full-Stack Developer', company: 'Mienvío', url: 'https://www.mienvio.mx/', period: 'Aug 2023 – Sep 2025', workMode: 'Remote', location: 'Monterrey, México', summary: 'Built Laravel applications, Go and Python microservices, and internal Vue tooling for a logistics platform used by 1,000+ active merchants.', tags: ['Laravel', 'Go + Python', 'Vue.js', 'Integrations'] },
  { role: 'Web Developer Intern', company: 'Universidad Politécnica de Querétaro', url: 'https://www.upq.mx/#/', period: '2022 – 2023', workMode: 'On-site', location: 'Querétaro, México', summary: 'Supported system analysis, UI implementation, backend APIs, and documentation—the foundations of how I learned to make software easier to maintain.', tags: ['Laravel', 'PrimeVue', 'UML'] },
]

onMounted(() => {
  theme.value = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
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

    <nav class="nav wrap" aria-label="Main navigation">
      <a class="wordmark" href="#top" aria-label="Home">GF<span>.</span></a>
      <div class="nav-actions">
        <a href="#work">My work</a>
        <a href="#contact">Contact me</a>
        <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          {{ theme === 'dark' ? '☼' : '◐' }}
        </button>
      </div>
    </nav>

    <section id="top" class="hero wrap">
      <div class="hero-copy">
        <h1>hey, I’m Guada<span>.</span></h1>
        <p class="intro">I build backend systems, integrations, and internal tools for SaaS products. I’m currently learning more about system design and AI-assisted workflows.</p>
        <div class="mission">
          <p class="eyebrow">↗ MY MISSION</p>
          <p>Build software that supports people’s everyday work and has room to evolve.</p>
        </div>
      </div>
      <div class="portrait">
        <img src="/pfp.jpg" alt="Guadalupe Franco" />
      </div>
    </section>

    <section id="about" class="section wrap about">
      <div class="about-copy">
        <h2>About me<span>.</span></h2>
        <p>I work across backend and frontend, but backend is where I feel most at home. I define APIs, model data, integrate external services, and build interfaces and internal tools that support teams day to day.</p>
        <p>Most of my backend interest is in background jobs, queues and retries, observability, authentication, and clear service boundaries.</p>
        <p>On a normal workday I use AI agents, MCP servers, and coding assistants for research, prototyping, and routine development tasks. I’m interested in how they fit into real product workflows.</p>
        <div class="inline-actions">
          <a class="button" :href="me.github" target="_blank" rel="noreferrer">◉ View my GitHub →</a>
          <a class="quiet-button" :href="`mailto:${me.email}`">Contact me →</a>
        </div>
      </div>
      <div class="stats" aria-label="Portfolio highlights">
        <article class="stat large-stat"><span>Experience</span><strong>{{ experienceDuration }}<span>.</span></strong></article>
      </div>
    </section>

    <section id="experience" class="section wrap">
      <h2>Experience<span>.</span></h2>
      <p class="section-intro">A short version of the places and projects that have helped shape how I build software.</p>
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

    <section id="work" class="section wrap">
      <h2>Featured projects<span>.</span></h2>
      <p class="section-intro">A selection of projects involving business workflows, integrations, data, and small experiments.</p>
      <div class="projects">
        <article v-for="project in projects" :key="project.name" class="project-card">
          <div class="project-copy">
            <p>{{ project.kind }}</p>
            <h3>{{ project.name }}</h3>
            <p class="project-description">{{ project.text }}</p>
            <div class="project-stack"><span v-for="[name, icon] in project.stack" :key="name"><img :src="`https://cdn.simpleicons.org/${icon}`" :alt="`${name} logo`">{{ name }}</span></div>
            <a class="project-repo" :href="project.repo" target="_blank" rel="noreferrer">GitHub repository ↗</a>
          </div>
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
      <h2>Contact me<span>.</span></h2>
      <p class="section-intro">If you think I could help with a backend, integration, or product problem, feel free to reach out.</p>
      <div class="contact-actions">
        <a class="button" :href="`mailto:${me.email}`">@ Email →</a>
        <a class="quiet-button" href="https://discord.com" target="_blank" rel="noreferrer">◉ Discord →</a>
      </div>
    </section>

    <footer class="footer wrap">
      <p>© {{ new Date().getFullYear() }} {{ me.name }}</p>
      <a :href="`mailto:${me.email}`">{{ me.email }} ↗</a>
    </footer>
  </main>
</template>
