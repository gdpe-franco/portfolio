import { defaultLocale, localeCodes, locales } from '~/locales'

const siteUrl = 'https://guada-franco.pages.dev'

export function useLocalizedMetadata(title: ComputedRef<string>, description: ComputedRef<string>) {
  const route = useRoute()
  const { locale, localizedPath } = useSiteLocale()
  const canonical = computed(() => new URL(localizedPath(route.path), siteUrl).href)

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogLocale: computed(() => locales[locale.value].ogLocale),
  })

  useHead({
    link: computed(() => [
      { rel: 'canonical', href: canonical.value },
      ...localeCodes.map(code => ({ rel: 'alternate' as const, type: 'text/html', hreflang: locales[code].languageTag, href: new URL(localizedPath(route.path, code), siteUrl).href })),
      { rel: 'alternate' as const, type: 'text/html', hreflang: 'x-default', href: new URL(localizedPath(route.path, defaultLocale), siteUrl).href },
    ]),
  })
}
