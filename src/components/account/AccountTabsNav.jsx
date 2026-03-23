import { NavLink } from 'react-router-dom'
import { Bell, CalendarDays, Heart, UserRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { getAccountNavItems } from '@/components/account/accountLayoutConfig'
import { cn } from '@/lib/utils'

const ACCOUNT_NAV_ICONS = {
  'personal-info': UserRound,
  appointments: CalendarDays,
  'favorite-properties': Heart,
  notifications: Bell,
}

function AccountTabsNav() {
  const { t } = useTranslation()
  const accountNavItems = getAccountNavItems(t)

  return (
    <section className="bg-white">
      <div className="home-shell">
        <nav
          aria-label="My account sections"
          className="flex items-center justify-between gap-1 border-b border-[#E8EEF3] md:justify-start md:gap-x-12 lg:gap-x-16"
        >
          {accountNavItems.map((item) => {
            const Icon = ACCOUNT_NAV_ICONS[item.key]

            return (
              <NavLink
                key={item.key}
                to={item.to}
                aria-label={item.label}
                title={item.label}
                className={({ isActive }) =>
                  cn(
                    'inline-flex min-w-0 flex-1 items-center justify-center gap-2 border-b-[3px] px-1 py-4 text-[17px] font-medium leading-none transition-colors duration-200 md:flex-none md:justify-start md:py-6 md:text-[19px]',
                    isActive
                      ? 'border-secondary-light text-secondary'
                      : 'border-transparent text-[#181818] hover:text-secondary-light',
                  )
                }
              >
                <span className="relative md:hidden">
                  <Icon aria-hidden="true" className="h-5 w-5" />

                  {item.badgeCount ? (
                    <span className="absolute -right-2 -top-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-mid px-1 text-[9px] font-bold leading-none text-white">
                      {item.badgeCount}
                    </span>
                  ) : null}
                </span>

                <span className="hidden md:inline">{item.label}</span>

                {item.badgeCount ? (
                  <span className="hidden h-7 min-w-7 items-center justify-center rounded-full bg-primary-mid px-1.5 text-[12px] font-bold leading-none text-white md:inline-flex">
                    {item.badgeCount}
                  </span>
                ) : null}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </section>
  )
}

export default AccountTabsNav
