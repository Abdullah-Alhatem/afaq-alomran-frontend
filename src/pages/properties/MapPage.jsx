import CoverSection from '@/components/CoverSection'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import { useSiteSettingsQuery } from '@/lib/fake-api/hooks'
import { useTranslation } from 'react-i18next'

function MapPage() {
  const { t } = useTranslation()
  const { data: siteSettings } = useSiteSettingsQuery()

  return (
    <div>
      <CoverSection title={t('mapPage.pageTitle')} currentPage={t('mapPage.currentPage')} />

      <section className="bg-[#ECF1F6] py-10 md:py-[72px]">
        <div className="site-shell">
          <div className="rounded-[24px] bg-white p-4 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)] sm:p-8">
            <div className="overflow-hidden rounded-[16px]">
              <iframe
                title={t('mapPage.iframeTitle')}
                src={siteSettings.mapEmbedUrl}
                className="h-[450px] w-full md:h-[560px] lg:h-[650px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <LookingForADreamBox background="bg-white" />
    </div>
  )
}

export default MapPage
