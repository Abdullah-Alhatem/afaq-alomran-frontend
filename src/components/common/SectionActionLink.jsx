import { Link } from 'react-router-dom'

import DirectionalArrowIcon from '@/components/DirectionalArrowIcon'
import { cn } from '@/lib/utils'

function SectionActionLink({ to, children, className, showArrow = true, arrowClassName }) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex h-[52px] min-w-[138px] items-center justify-center gap-3 rounded-[10px] border border-secondary-light px-7 text-base font-semibold text-secondary-light transition-colors duration-200 hover:bg-secondary-light hover:text-white',
        className,
      )}
    >
      {children}
      {showArrow ? <DirectionalArrowIcon className={cn('h-5 w-5', arrowClassName)} /> : null}
    </Link>
  )
}

export default SectionActionLink
