import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import faqIllustration from "@/assets/icons/FAQ'sIcon.svg"
import { getFaqItemsPreview } from '@/data/faqItems'
import SectionActionLink from '@/components/common/SectionActionLink'
import { HOME_SECTION_PADDING_CLASSNAME } from './homeSectionStyles'

function FAQSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)
  const faqItemsPreview = getFaqItemsPreview(t)

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index))
  }

  return (
    <section className={`bg-muted ${HOME_SECTION_PADDING_CLASSNAME}`}>
      <div className="home-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12">
        <div className="space-y-7 lg:space-y-10">
          <div data-page-reveal-item>
            <p className="inline-flex items-center gap-2 text-[16px] font-medium text-secondary-light md:text-[18px]">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary-light" aria-hidden="true" />
              {t('home.faq.eyebrow')}
            </p>

            <h2 className="mt-4 max-w-[680px] text-[34px] font-bold leading-[1.2] text-primary-mid md:text-[56px]">
              {t('home.faq.title')}
            </h2>

            <p className="mt-4 max-w-[680px] text-[17px] leading-[1.5] text-grey-text-secondary md:text-[20px]">
              {t('home.faq.description')}
            </p>
          </div>

          <div className="mx-auto w-full max-w-[520px] lg:mx-0" data-page-reveal-item>
            <img
              src={faqIllustration}
              alt={t('home.faq.imageAlt')}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div data-page-reveal-item>
          <div className="space-y-4 md:space-y-5">
            {faqItemsPreview.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-[18px] border-s-4 transition-colors duration-200 ${
                    isOpen
                      ? 'border-primary-light bg-[#DCEAF2]'
                      : 'border-[#D6E3EA] bg-[#F9F9FB] hover:bg-[#F2F7FB]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-start gap-4 px-5 py-6 text-start md:px-7 md:py-7"
                    aria-expanded={isOpen}
                  >
                    <ChevronDown
                      className={`mt-[2px] h-6 w-6 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />

                    <h3 className="text-[20px] font-bold leading-[1.35] text-primary-mid md:text-[31px]">
                      {item.question}
                    </h3>
                  </button>

                  {isOpen && (
                    <p className="px-5 pb-6 ps-[56px] text-[16px] leading-[1.45] text-primary-light md:px-7 md:pb-7 md:ps-[68px] md:text-[20px]">
                      {item.answer}
                    </p>
                  )}
                </article>
              )
            })}
          </div>

          <div className="pt-8 text-center md:pt-10">
            <SectionActionLink
              to="/faqs"
              className="min-w-[148px] border-primary-mid px-6 text-[18px] text-primary-mid hover:bg-primary-mid md:h-[64px] md:min-w-[174px] md:px-8 md:text-[28px]"
            >
              {t('common.buttons.seeMore')}
            </SectionActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
