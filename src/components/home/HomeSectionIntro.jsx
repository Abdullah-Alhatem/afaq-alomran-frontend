import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

function HomeSectionIntro({
  eyebrow,
  title,
  description,
  align = 'start',
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}) {
  const { i18n } = useTranslation()
  const isCentered = align === 'center'
  const alignmentClass = isCentered
    ? 'text-center'
    : i18n.dir() === 'rtl'
      ? 'text-right'
      : 'text-left'

  return (
    <div className={cn(alignmentClass, className)} data-page-reveal-item>
      {eyebrow ? (
        <p
          className={cn(
            'text-lg font-medium leading-6 text-secondary-light',
            isCentered && 'mx-auto',
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          'mt-3 text-[28px] font-bold leading-8 text-grey-text-primary md:text-[40px] md:leading-10',
          isCentered && 'mx-auto',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'mt-2 max-w-2xl text-base font-medium leading-6 text-grey-text-secondary md:text-lg',
            isCentered && 'mx-auto',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default HomeSectionIntro
