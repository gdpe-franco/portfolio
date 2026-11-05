import en from './en'
import es from './es'

export const locales = {
  en: { label: 'English', selectorLabel: 'Language', languageTag: 'en', ogLocale: 'en_US', resumeUrl: 'https://cdn.jsdelivr.net/gh/gdpe-franco/career-documents@main/cv.pdf', messages: en },
  es: { label: 'Español', selectorLabel: 'Idioma', languageTag: 'es-MX', ogLocale: 'es_MX', resumeUrl: 'https://cdn.jsdelivr.net/gh/gdpe-franco/career-documents@main/cv-es.pdf', messages: es },
}
export type SiteLocale = keyof typeof locales
export const defaultLocale: SiteLocale = 'en'
export const localeCodes = Object.keys(locales) as SiteLocale[]

export function localeFromPath(path: string): SiteLocale {
  return localeCodes.find(code => code !== defaultLocale && (path === `/${code}` || path.startsWith(`/${code}/`))) ?? defaultLocale
}

export function localePath(path: string, target: SiteLocale): string {
  const current = localeFromPath(path)
  const base = (current === defaultLocale ? path : path.slice(current.length + 1)) || '/'
  return target === defaultLocale ? base : `/${target}${base}`
}
