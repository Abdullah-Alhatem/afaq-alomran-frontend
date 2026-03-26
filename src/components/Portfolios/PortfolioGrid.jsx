import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

function PortfolioGrid({ items, className, imageClassName }) {
  return (
    <div
      className={cn(
        'mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3 lg:gap-6',
        className,
      )}
    >
      {items.map((item) => (
        <Link
          to={`/portfolios/${item.id}`}
          key={item.id}
          data-page-reveal-item
          className="group overflow-hidden rounded-[12px]"
        >
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className={cn(
              'h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[260px] md:h-[300px] lg:h-[340px]',
              imageClassName,
            )}
          />
        </Link>
      ))}
    </div>
  )
}

export default PortfolioGrid
