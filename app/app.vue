<script setup lang="ts">
const theme = ref<'light' | 'dark'>('dark')
const me = {
  name: 'Guadalupe Franco',
  email: 'franco.rguadalupe@gmail.com'
}

onMounted(() => {
  theme.value = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
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
    <div class="aurora" aria-hidden="true" />

    <nav class="nav wrap" aria-label="Main navigation">
      <a class="wordmark" href="#top" aria-label="Home">{{ me.name }}</a>
      <div class="nav-actions">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a :href="`mailto:${ me.email }`">Contact</a>
        <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          {{ theme === 'dark' ? 'Light' : 'Dark' }}
        </button>
      </div>
    </nav>

    <section id="top" class="hero wrap">
      <p class="eyebrow">Software engineer · systems thinker</p>
      <h1></h1>
      <p class="intro">I design reliable backend systems, practical AI workflows, and the interfaces that make complex products feel simple.</p>
      <div class="hero-links">
        <a class="button" href="#work">See selected work <span>↘</span></a>
        <a class="text-link" :href="`mailto:${ me.email }`">Let’s talk <span>↗</span></a>
      </div>
    </section>

    <section id="work" class="section wrap">
      <div class="section-heading">
        <p class="eyebrow">01 / Selected work</p>
        <h2>Systems with a point of view.</h2>
      </div>
      <div class="work-grid">
        <article class="project project-wide">
          <p>Architecture / Backend</p>
          <h3>Event-driven workflows that stay observable.</h3>
          <span>Case study coming soon ↗</span>
        </article>
        <article class="project">
          <p>AI workflows</p>
          <h3>Useful automation, with humans in control.</h3>
          <span>Explore project ↗</span>
        </article>
        <article class="project">
          <p>Full-stack</p>
          <h3>Interfaces for complex operations.</h3>
          <span>Explore project ↗</span>
        </article>
      </div>
    </section>

    <section id="about" class="section wrap statement">
      <p class="eyebrow">02 / How I work</p>
      <h2>Start with the constraints. Make the system understandable. Ship the smallest thing that holds.</h2>
      <p>I work across APIs, data, background jobs, cloud deployments, and product UI—always with an eye on the next useful abstraction, not the fanciest one.</p>
    </section>

    <footer class="footer wrap">
      <p>© {{ new Date().getFullYear() + ' ' + me.name }}</p>
      <a :href="`mailto:${ me.email }`">{{ me.email }} ↗</a>
    </footer>
  </main>
</template>
