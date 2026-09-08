<script setup lang="ts">
type NavigationItem = {
  label: string
  to: string
}

const props = defineProps<{
  homeTo: string
  navigationLabel: string
  items: NavigationItem[]
  lightLabel: string
  darkLabel: string
  openMenuLabel: string
  closeMenuLabel: string
  backgroundActive?: boolean
}>()

const menuOpen = ref(false)
const colorMode = useColorMode()
</script>

<template>
  <UHeader
    v-model:open="menuOpen"
    class="site-header"
    :class="{ 'is-scrolled': props.backgroundActive }"
    :to="props.homeTo"
    mode="modal"
  >
    <template #title>
      <span class="wordmark">GF<span>.</span></span>
    </template>

    <template #right>
      <div class="desktop-header-actions">
        <nav class="header-links" :aria-label="props.navigationLabel">
          <UButton v-for="item in props.items" :key="item.to" :to="item.to" color="neutral" variant="link" size="sm">
            {{ item.label }}
          </UButton>
        </nav>
        <LanguageSwitcher />
        <UColorModeButton
          color="neutral"
          variant="outline"
          size="sm"
          square
          :aria-label="colorMode.value === 'dark' ? props.lightLabel : props.darkLabel"
        />
      </div>
    </template>

    <template #toggle="{ open, toggle }">
      <UButton
        class="header-toggle"
        type="button"
        color="neutral"
        variant="outline"
        square
        :aria-label="open ? props.closeMenuLabel : props.openMenuLabel"
        @click="toggle"
      >
        <UIcon v-if="open" class="size-4" name="i-lucide-x" aria-hidden="true" />
        <UIcon v-else class="size-4" name="i-lucide-menu" aria-hidden="true" />
      </UButton>
    </template>

    <template #body>
      <nav class="mobile-header-actions" :aria-label="props.navigationLabel">
        <UButton
          v-for="item in props.items"
          :key="item.to"
          :to="item.to"
          color="neutral"
          variant="ghost"
          block
          @click="menuOpen = false"
        >
          {{ item.label }}
        </UButton>
        <div class="mobile-header-controls">
          <LanguageSwitcher />
          <UColorModeButton
            color="neutral"
            variant="outline"
            size="sm"
            square
            :aria-label="colorMode.value === 'dark' ? props.lightLabel : props.darkLabel"
          />
        </div>
      </nav>
    </template>
  </UHeader>
</template>
