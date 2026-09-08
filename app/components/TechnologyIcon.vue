<script setup lang="ts">
const props = defineProps<{ icon?: string }>()

const brandColors: Record<string, string> = {
  django: '#092e20',
  docker: '#2496ed',
  git: '#f05032',
  githubactions: '#2088ff',
  githubcopilot: '#8957e5',
  go: '#00add8',
  javascript: '#f7df1e',
  jenkins: '#d24939',
  laravel: '#ff2d20',
  mysql: '#4479a1',
  newrelic: '#1ce783',
  nodedotjs: '#5fa04e',
  nuxt: '#00dc82',
  openai: '#74aa9c',
  openapiinitiative: '#6ba539',
  php: '#777bb4',
  postgresql: '#4169e1',
  primevue: '#41b883',
  python: '#3776ab',
  react: '#61dafb',
  redis: '#ff4438',
  sentry: '#a597c6',
  swagger: '#85ea2d',
  symfony: '#a7a7a7',
  typescript: '#3178c6',
  uml: '#fabd14',
  vuedotjs: '#4fc08d',
}

const color = computed(() => props.icon ? brandColors[props.icon] : undefined)
</script>

<template>
  <UIcon v-if="icon" class="technology-icon" :name="`i-simple-icons-${icon}`" :style="{ color }" aria-hidden="true" />
</template>
