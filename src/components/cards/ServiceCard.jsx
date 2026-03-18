import { Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ServiceCard({
  icon = Activity,
  title = 'Property Management',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
  variant = 'service',
  className,
}) {
  const IconComponent = icon

  const styles = {
    service: {
      container: cn(
        'flex flex-col items-center justify-center mx-auto',
        'p-5 sm:p-[35.8554px] gap-[35.86px]',
        'sm:w-[372px] sm:h-[407.86px]',
        'bg-white border border-[#D7D7D7]',
        'shadow-[8px_16px_32px_#F6F6F6] rounded-[26.8916px]',
      ),
      iconWrapper: cn(
        'flex items-center justify-center',
        'w-[107.57px] h-[107.57px]',
        'bg-[#DE8556]',
        'shadow-[2.98795px_11.9518px_23.9036px_rgba(222,133,86,0.3)]',
        'rounded-[112.048px]',
        'relative',
      ),
      icon: 'w-[53.78px] h-[53.78px] text-white',
      content: cn('flex flex-col items-center', 'gap-[17.93px]', 'w-[300.29px] h-[134.93px]'),
      title: cn('text-[26.8916px] font-semibold text-center', 'text-[#181818]'),
      description: cn('text-[17.9277px] font-medium text-center', 'text-[#5C5C5C]'),
    },
    contact: {
      container: cn(
        'flex w-full flex-col items-center justify-center gap-4 sm:mx-auto sm:max-w-[240px]',
        'rounded-[16px] bg-white p-6 text-center',
        'shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)]',
      ),
      iconWrapper: cn(
        'flex h-[72px] w-[72px] items-center justify-center rounded-full',
        'bg-secondary-light shadow-[2px_8px_16px_0px_rgba(222,133,86,0.3)]',
      ),
      icon: 'h-9 w-9 text-white',
      content: 'flex flex-col items-center gap-2',
      title: 'text-[16px] font-semibold text-[#181818]',
      description: 'text-[14px] font-medium text-[#5C5C5C]',
    },
  }

  const activeStyle = styles[variant] ?? styles.service

  return (
    <div className={cn(activeStyle.container, className)}>
      <div className={activeStyle.iconWrapper}>
        <IconComponent className={activeStyle.icon} />
      </div>

      <div className={activeStyle.content}>
        <h3 className={activeStyle.title}>{title}</h3>
        <p className={activeStyle.description}>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
