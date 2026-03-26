import { cn } from '@/lib/utils'

export const HOME_SECTION_PADDING_CLASSNAME = 'py-5 md:py-12 lg:py-14'

const homePropertyFilterButtonBaseClasses =
  'rounded-full border-2 px-6 py-3 text-base font-bold leading-6 transition-all duration-200 hover:scale-105 active:scale-95'

export function getHomePropertyFilterButtonClasses(isActive) {
  return cn(
    homePropertyFilterButtonBaseClasses,
    isActive
      ? 'border-secondary-light bg-secondary-light text-white'
      : 'border-grey-stroke bg-grey-dividers text-grey-disabled-text',
  )
}
