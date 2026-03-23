import { cn } from '@/lib/utils'

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
  const isCentered = align === 'center'

  return (
    <div className={cn(isCentered ? 'text-center' : 'text-left', className)}>
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
