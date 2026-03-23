import React from 'react'
import PropertySection from './PropertySection'
import SectionActionLink from '@/components/common/SectionActionLink'
import { useHomeLatestPropertiesQuery } from '@/lib/fake-api/hooks'
import { useTranslation } from 'react-i18next'

function LatestListedPropertiesSection() {
  const { t } = useTranslation()
  const { data: latestProperties = [] } = useHomeLatestPropertiesQuery()

  return (
    <PropertySection
      badgeText={t('home.latestProperties.badge')}
      title={t('home.latestProperties.title')}
      description={t('home.latestProperties.description')}
      properties={latestProperties}
      cardKeyPrefix={'latest-'}
      footer={
        <SectionActionLink to="/properties" className="gap-4 rounded-lg px-8 py-4 font-bold">
          <span>{t('common.buttons.seeMore')}</span>
        </SectionActionLink>
      }
    />
  )
}

export default LatestListedPropertiesSection
