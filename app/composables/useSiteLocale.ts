import { locales, localeFromPath, localePath, type SiteLocale } from '~/locales'
export function useSiteLocale() {
  const route = useRoute()
  const locale = computed(() => localeFromPath(route.path))
  const messages = computed(() => locales[locale.value].messages)
  function localizedPath(path: string, target: SiteLocale = locale.value) {
    return localePath(path, target)
  }
  return { locale, messages, localizedPath }
}
