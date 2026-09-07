<script setup lang="ts">
defineProps<{ name?: string, icon?: string }>()
</script>

<template>
  <UBadge class="technology-badge" color="neutral" variant="outline">
    <TechnologyIcon :icon="icon" />
    {{ name }}
  </UBadge>
</template>
