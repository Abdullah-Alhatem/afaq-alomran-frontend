import React from 'react'

import { cn } from '@/lib/utils'

function AuthIntroText({
  title,
  subtitle,
  description,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}) {
  return (
    <div>
      <h2 className={cn('text-[32px] font-bold leading-[1.15] text-primary', titleClassName)}>
        {title}
      </h2>

      {subtitle ? (
        <h3
          className={cn(
            'mt-6 text-[24px] font-semibold leading-[1.2] text-grey-text-primary',
            subtitleClassName,
          )}
        >
          {subtitle}
        </h3>
      ) : null}

      {description ? (
        <p
          className={cn(
            'mt-2 max-w-[500px] text-[16px] font-medium leading-6 text-grey-text-secondary',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default AuthIntroText
