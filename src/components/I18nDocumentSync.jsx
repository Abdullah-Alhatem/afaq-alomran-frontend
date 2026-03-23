import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function I18nDocumentSync() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage ?? i18n.language ?? 'ar'
  const direction = i18n.dir(language)

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = direction
    document.body.dir = direction
    document.documentElement.classList.toggle('rtl', direction === 'rtl')
  }, [direction, language])

  return null
}

export default I18nDocumentSync
