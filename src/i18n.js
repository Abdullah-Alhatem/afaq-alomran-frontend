import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ar from '@/locales/ar'
import en from '@/locales/en'

export const LANGUAGE_STORAGE_KEY = 'afaq-language'

const resources = {
  en: { translation: en },
  ar: { translation: ar },
}

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'ar'
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (savedLanguage && ['en', 'ar'].includes(savedLanguage)) {
    return savedLanguage
  }

  return 'ar'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  supportedLngs: ['en', 'ar'],
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }
})

export default i18n
