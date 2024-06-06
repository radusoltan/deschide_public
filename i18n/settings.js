import ro from "@/i18n/locales/ro/translations.json"
import ru from "@/i18n/locales/ru/translations.json"
import en from "@/i18n/locales/en/translations.json"
export const fallbackLng = 'ro'
export const languages = [fallbackLng, 'ru', 'en']

export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    resources: {
      ro: {translation: ro},
      ru: {translation: ru},
      en: {translation: en}
    },
    lng,
    detection: {
      order:['cookie', 'localStorage'],
      caches: ['cookie', 'localStorage']
    },
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}