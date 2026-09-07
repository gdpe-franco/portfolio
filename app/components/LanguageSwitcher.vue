<script setup lang="ts">
import { locales, localeCodes, type SiteLocale } from '~/locales'
const { locale, localizedPath } = useSiteLocale()
const route = useRoute()

function destination(code: SiteLocale) {
  return { path: localizedPath(route.path, code), query: route.query, hash: route.hash }
}
</script>

<template>
  <div class="language-switcher" role="group" :aria-label="locales[locale].selectorLabel">
    <UButton
      v-for="code in localeCodes"
      :key="code"
      class="language-option"
      :class="{ 'is-active': code === locale }"
      :to="destination(code)"
      color="neutral"
      variant="ghost"
      size="xs"
      :lang="code"
      :aria-label="locales[code].label"
      :aria-current="code === locale ? 'page' : undefined"
    >
      {{ code.toUpperCase() }}
    </UButton>
  </div>
</template>
