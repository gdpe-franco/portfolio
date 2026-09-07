<script setup lang="ts">
const props = defineProps<{ icon?: string }>()
const failed = ref(false)

watch(() => props.icon, () => { failed.value = false })
</script>

<template>
  <img v-if="icon && !failed" :src="`https://cdn.simpleicons.org/${icon}`" alt="" @error="failed = true">
</template>
