import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import SectionActionLink from '@/components/common/SectionActionLink'

function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute left-[-100px] top-[-120px] h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-120px] h-72 w-72 rounded-full bg-primary-light/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[65vh] w-full max-w-5xl flex-col items-center justify-center gap-3 lg:gap-5 px-6 py-16 text-center">
        <p className="text-btn uppercase tracking-[0.18em] text-secondary">
          {t('notFound.eyebrow')}
        </p>
        <h1 className="text-h1 text-grey-text-primary">{t('notFound.title')}</h1>

        <p className="max-w-xl text-body text-grey-text-secondary">{t('notFound.description')}</p>

        <SectionActionLink to="/" showArrow={false}>
          {t('common.buttons.backToWebsite')}
        </SectionActionLink>
      </div>
    </section>
  )
}

export default NotFound
