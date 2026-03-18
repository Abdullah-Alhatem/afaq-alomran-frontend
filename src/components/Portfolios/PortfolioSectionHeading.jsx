import { cn } from '@/lib/utils'

function PortfolioSectionHeading({
  eyebrow = 'WE HELP FOR YOU',
  title = 'Our Portfolio',
  className,
}) {
  return (
    <div className={cn('text-center', className)}>
      <p className="text-sm font-medium uppercase tracking-[0.08em] text-secondary-light md:text-[18px]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[34px] font-bold leading-[1.2] text-[#18181B] md:text-[40px]">
        {title}
      </h2>
    </div>
  )
}

export default PortfolioSectionHeading
