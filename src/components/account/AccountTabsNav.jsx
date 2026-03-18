import { NavLink } from 'react-router-dom'

import { ACCOUNT_NAV_ITEMS } from '@/components/account/accountLayoutConfig'
import { cn } from '@/lib/utils'

function AccountTabsNav() {
  return (
    <section className="bg-white">
      <div className="home-shell">
        <nav
          aria-label="My account sections"
          className="flex flex-wrap items-center gap-x-7 gap-y-2 border-b border-[#E8EEF3]"
        >
          {ACCOUNT_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'inline-flex items-center gap-2 border-b-2 px-1 py-5 text-base font-medium transition-colors duration-200',
                  isActive
                    ? 'border-secondary-light text-secondary-light'
                    : 'border-transparent text-[#181818] hover:text-secondary-light',
                )
              }
            >
              <span>{item.label}</span>

              {item.badgeCount ? (
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary-mid px-1.5 text-[12px] font-bold leading-none text-white">
                  {item.badgeCount}
                </span>
              ) : null}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default AccountTabsNav
