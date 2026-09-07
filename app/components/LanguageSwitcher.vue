<script setup lang="ts">
import { locales, localeCodes, type SiteLocale } from '~/locales'
const { locale, localizedPath } = useSiteLocale()
const route = useRoute()

function changeLanguage(event: Event) {
  const code = (event.target as HTMLSelectElement).value as SiteLocale
  return navigateTo({ path: localizedPath(route.path, code), query: route.query, hash: route.hash })
}
</script>

<template>
  <select class="language-switcher" :value="locale" :aria-label="locales[locale].selectorLabel" @change="changeLanguage">
    <option v-for="code in localeCodes" :key="code" :value="code" :lang="code" :aria-label="locales[code].label">{{ code.toUpperCase() }}</option>
  </select>
</template>
