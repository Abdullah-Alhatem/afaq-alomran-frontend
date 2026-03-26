import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function AgentCard({ to, image, alt, name, role, socialLinks = [], className }) {
  const CardWrapper = to ? Link : 'div'
  const cardWrapperProps = to ? { to } : {}

  return (
    <article className={cn('mx-auto max-w-[280px] text-center', className)} data-page-reveal-item>
      <CardWrapper {...cardWrapperProps} className="block">
        <div className="block h-[450px] w-full overflow-hidden rounded-[12px] sm:h-[340px] lg:h-[390px]">
          <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        </div>

        <h3 className="mt-5 text-h3 font-medium text-[#18181B]">{name}</h3>
        <p className="mt-2 text-body text-grey-text-secondary">{role}</p>
      </CardWrapper>

      <div className="mt-4 flex items-center justify-center gap-3">
        {socialLinks.map((social) => {
          const socialProps = social.to ? { to: social.to } : { href: social.href }
          const SocialComponent = social.to ? Link : 'a'

          return (
            <SocialComponent
              key={social.label}
              aria-label={social.label}
              className="inline-flex h-6 w-6 items-center justify-center transition-opacity hover:opacity-80"
              {...socialProps}
            >
              <img src={social.icon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
            </SocialComponent>
          )
        })}
      </div>
    </article>
  )
}

export default AgentCard
