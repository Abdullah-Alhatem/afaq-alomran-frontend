import { Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ServiceCard({
  icon = Activity,
  title = 'Property Management',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
}) {
  const IconComponent = icon

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center mx-auto',
        'p-[35.8554px] gap-[35.86px]',
        'w-[372px] h-[407.86px]',
        'bg-white border border-[#D7D7D7]',
        'shadow-[8px_16px_32px_#F6F6F6] rounded-[26.8916px]',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center',
          'w-[107.57px] h-[107.57px]',
          'bg-[#DE8556]',
          'shadow-[2.98795px_11.9518px_23.9036px_rgba(222,133,86,0.3)]',
          'rounded-[112.048px]',
          'relative',
        )}
      >
        <IconComponent className="w-[53.78px] h-[53.78px] text-white" />
      </div>

      <div
        className={cn('flex flex-col items-center', 'gap-[17.93px]', 'w-[300.29px] h-[134.93px]')}
      >
        <h3 className={cn('text-[26.8916px] font-semibold text-center', 'text-[#181818]')}>
          {title}
        </h3>
        <p className={cn('text-[17.9277px] font-medium text-center', 'text-[#5C5C5C]')}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
