import CoverSection from '@/components/CoverSection'
import FAQsAccordion from '@/components/faqs/FAQsAccordion'
import LookingForADreamBox from '@/components/LookingForADreamBox'
import { useTranslation } from 'react-i18next'

function FAQs() {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden">
      <CoverSection title={t('faqs.pageTitle')} currentPage={t('faqs.currentPage')} />
      <section className="bg-[#ECF1F6] px-6 py-[72px] md:px-16 lg:px-40 2xl:px-[448px]">
        <div className="mx-auto w-full max-w-[809px]">
          <FAQsAccordion />
        </div>
      </section>
      <LookingForADreamBox background="bg-white" />
    </div>
  )
}

export default FAQs
