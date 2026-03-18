import CoverSection from '@/components/CoverSection'
import FAQsAccordion from '@/components/faqs/FAQsAccordion'
import LookingForADreamBox from '@/components/LookingForADreamBox'

function FAQs() {
  return (
    <div className="overflow-hidden">
      <CoverSection title="Frequently Asked Questions" currentPage="FAQs" />
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
