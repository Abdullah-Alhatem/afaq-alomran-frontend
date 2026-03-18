import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import faqIllustration from "@/assets/icons/FAQ'sIcon.svg"
import { faqItemsPreview } from '@/data/faqItems'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index))
  }

  return (
    <section className="bg-[#ECF1F6] py-5 md:py-20 lg:py-24">
      <div className="home-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12">
        <div className="space-y-7 lg:space-y-10">
          <div>
            <p className="inline-flex items-center gap-2 text-[16px] font-medium text-secondary-light md:text-[18px]">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary-light" aria-hidden="true" />
              FAQ&apos;s
            </p>

            <h2 className="mt-4 max-w-[680px] text-[34px] font-bold leading-[1.2] text-primary-mid md:text-[56px]">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 max-w-[680px] text-[17px] leading-[1.5] text-grey-text-secondary md:text-[20px]">
              Have questions about buying, selling, or renting with AFAAQ? We&apos;ve got the
              answers to help guide you through the process.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[520px] lg:mx-0">
            <img
              src={faqIllustration}
              alt="Frequently asked questions illustration"
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div>
          <div className="space-y-4 md:space-y-5">
            {faqItemsPreview.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-[18px] border-l-4 transition-colors duration-200 ${
                    isOpen
                      ? 'border-primary-light bg-[#DCEAF2]'
                      : 'border-[#D6E3EA] bg-[#F9F9FB] hover:bg-[#F2F7FB]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-start gap-4 px-5 py-6 text-left md:px-7 md:py-7"
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
                    <p className="px-5 pb-6 pl-[56px] text-[16px] leading-[1.45] text-primary-light md:px-7 md:pb-7 md:pl-[68px] md:text-[20px]">
                      {item.answer}
                    </p>
                  )}
                </article>
              )
            })}
          </div>

          <div className="pt-8 text-center md:pt-10">
            <Link
              to="/faqs"
              className="inline-flex h-[52px] min-w-[148px] items-center justify-center gap-3 rounded-[10px] border border-primary-mid px-6 text-[18px] font-semibold text-primary-mid transition-colors duration-200 hover:bg-primary-mid hover:text-white md:h-[64px] md:min-w-[174px] md:px-8 md:text-[28px]"
            >
              See More
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none">
                <path
                  d="M5 12h14m-5-5 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
