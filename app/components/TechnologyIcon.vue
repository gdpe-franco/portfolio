<script setup lang="ts">
defineProps<{ icon?: string }>()
</script>

<template>
  <UIcon v-if="icon" class="technology-icon" :name="`i-simple-icons-${icon}`" aria-hidden="true" />
</template>
