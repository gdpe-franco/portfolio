<template>
  <NuxtPage />
</template>
<script setup lang="ts">
const { locale } = useSiteLocale()

useHead({
  htmlAttrs: { lang: computed(() => locale.value) },
})
</script>
