import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

import elementLine from '../assets/LookingForDreamHomeBox/Element.svg'
import houseImage from '../assets/LookingForDreamHomeBox/pexels-binyamin-mellish-1396122-removebg-preview 1.svg'
import vectorOne from '../assets/LookingForDreamHomeBox/Vector 1.svg'
import vectorTwo from '../assets/LookingForDreamHomeBox/Vector 2.svg'

const WIDTH_VARIANTS = {
  default: 'home-shell',
  auth: 'max-w-[1288px] xl:mx-auto',
}

const SECTION_VARIANTS = {
  default: 'w-full py-10 lg:py-16',
  auth: 'w-full py-10 sm:px-8 lg:px-16 lg:py-16',
}

function LookingForADreamBox({ variant = 'default', customWidth, background = 'bg-muted' }) {
  const { i18n, t } = useTranslation()
  const widthClass = customWidth ?? WIDTH_VARIANTS[variant] ?? WIDTH_VARIANTS.default
  const sectionClass = SECTION_VARIANTS[variant] ?? SECTION_VARIANTS.default
  const isRtl = i18n.dir() === 'rtl'

  return (
    <section className={cn(sectionClass, background)}>
      <div className={cn(`mx-auto`, widthClass)}>
        <div
          className={
            'mx-auto w-full overflow-hidden rounded-[32px] bg-primary text-primary-foreground'
          }
        >
          <div className="relative flex flex-col lg:min-h-[290px] lg:flex-row">
            <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
              <img
                src={vectorTwo}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-0 h-[274px] w-[847px] max-w-none opacity-90"
              />
              <img
                src={vectorOne}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-[208px] w-[434px] max-w-none"
              />
            </div>
            <div className="hidden shrink-0 lg:block lg:w-[390px]" data-page-reveal-item>
              <img
                src={houseImage}
                alt="Dream home"
                className="h-full w-full object-cover object-left"
              />
            </div>

            <div className="relative flex flex-1 items-center">
              <div className="relative z-10 w-full px-6 py-7 lg:px-12 lg:py-8 xl:px-14">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                  <div className="max-w-[690px]" data-page-reveal-item>
                    <h2 className="text-[32px] font-bold leading-10 lg:text-[40px]">
                      {t('ctaBox.titlePrefix')}{' '}
                      <span className="relative whitespace-nowrap">
                        {t('ctaBox.titleHighlight')}
                        <img
                          src={elementLine}
                          alt=""
                          aria-hidden="true"
                          className={cn(
                            'absolute bottom-0 h-[12px] w-[200px] object-contain',
                            isRtl ? 'right-0' : 'left-0',
                          )}
                        />
                      </span>
                    </h2>

                    <p className="mt-7 text-body text-primary-foreground/95 lg:mt-6">
                      {t('ctaBox.description')}
                    </p>
                  </div>

                  <Link
                    to="/properties"
                    data-page-reveal-item
                    className="w-full text-center shrink-0 whitespace-nowrap rounded-[18px] bg-secondary px-6 py-3 text-btn font-bold leading-[150%] text-secondary-foreground transition hover:bg-secondary-light lg:w-fit lg:rounded-xl"
                  >
                    {t('common.buttons.exploreProperties')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LookingForADreamBox
