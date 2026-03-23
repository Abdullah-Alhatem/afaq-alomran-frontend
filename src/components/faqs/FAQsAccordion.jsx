import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getFaqItemsAll } from './faqItems'

function FAQsAccordion({ items, defaultOpenIndex = 0 }) {
  const { t } = useTranslation()
  const baseId = useId().replace(/[^a-zA-Z0-9-_]/g, '')
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)
  const resolvedItems = items ?? getFaqItemsAll(t)

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index))
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {resolvedItems.map((item, index) => {
        const isOpen = openIndex === index
        const triggerId = `faqs-${baseId}-trigger-${index}`
        const panelId = `faqs-${baseId}-panel-${index}`

        return (
          <article
            key={`${item.question}-${index}`}
            className={[
              'flex w-full flex-col items-start border-solid p-6',
              'rounded-bl-[4px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px]',
              isOpen
                ? 'gap-4 bg-[#DAE6EF] shadow-[0px_5px_15px_0px_rgba(74,58,255,0.06)]'
                : 'bg-[#FBFBFE] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.06)]',
              isOpen ? 'border-primary-light border-s-[6px]' : 'border-[#D5E4EC] border-s-[7px]',
            ].join(' ')}
          >
            <button
              id={triggerId}
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center gap-2 text-start"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <ChevronDown
                  className={[
                    'h-6 w-6 text-primary transition-transform duration-200',
                    isOpen ? 'rotate-180' : '',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </span>
              <h3
                className={[
                  'flex-1 text-[20px] font-bold leading-[28px]',
                  isOpen ? 'text-primary-mid' : 'text-primary',
                ].join(' ')}
              >
                {item.question}
              </h3>
            </button>

            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={triggerId} className="w-full ps-11">
                <p className="text-[16px] font-semibold leading-[24px] text-primary-light">
                  {item.answer}
                </p>
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}

export default FAQsAccordion
