import CoverSection from '@/components/CoverSection'
import FAQsAccordion from '@/components/faqs/FAQsAccordion'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import { useTranslation } from 'react-i18next'

function FAQs() {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden">
      <CoverSection title={t('faqs.pageTitle')} currentPage={t('faqs.currentPage')} />
      <section className="bg-[#ECF1F6] py-[72px]">
        <div className="site-shell">
          <div className="mx-auto w-full max-w-[809px]">
            <FAQsAccordion />
          </div>
        </div>
      </section>
      <LookingForADreamBox background="bg-white" />
    </div>
  )
}

export default FAQs
