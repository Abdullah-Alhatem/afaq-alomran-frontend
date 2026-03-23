import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

const LANGUAGES = ['en', 'ar']

function LanguageSwitcher({ className, mobile = false, onChange }) {
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language ?? 'ar'

  function handleLanguageChange(language) {
    if (language === currentLanguage) {
      return
    }

    i18n.changeLanguage(language)
    onChange?.(language)
  }

  return (
    <div
      role="group"
      aria-label={t('common.languageSwitcher.label')}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-1 py-1',
        mobile
          ? 'border-primary-mid/20 bg-slate-50'
          : 'border-white/20 bg-white/10 backdrop-blur-sm',
        className,
      )}
    >
      {LANGUAGES.map((language) => {
        const isActive = currentLanguage === language

        return (
          <button
            key={language}
            type="button"
            onClick={() => handleLanguageChange(language)}
            className={cn(
              'inline-flex min-w-[42px] items-center justify-center rounded-full px-3 py-1.5 text-xs font-bold uppercase transition-colors duration-200',
              mobile
                ? isActive
                  ? 'bg-primary-mid text-white'
                  : 'text-primary-mid hover:bg-primary-mid/10'
                : isActive
                  ? 'bg-white text-primary-mid'
                  : 'text-white hover:bg-white/10',
            )}
          >
            {t(`common.languageSwitcher.${language}`)}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
