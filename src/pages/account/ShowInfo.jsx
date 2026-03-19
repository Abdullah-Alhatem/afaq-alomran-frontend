import { UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  ACCOUNT_PROFILE_DETAILS,
  DEFAULT_ACCOUNT_PROFILE,
  formatAccountProfileValue,
} from '@/components/account/accountProfileData'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import useAccountProfileStore from '@/stores/useAccountProfileStore'

function ShowInfo() {
  const profile = useAccountProfileStore((state) => state.profile)
  const displayName = profile.fullName || DEFAULT_ACCOUNT_PROFILE.fullName

  return (
    <section className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-16">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-28 w-28 border border-[#ECECEC] bg-[#F3F3F3] md:h-[116px] md:w-[116px]">
          <AvatarFallback className="bg-[#F3F3F3] text-[#989898]">
            <UserRound className="h-14 w-14 md:h-[60px] md:w-[60px]" strokeWidth={1.75} />
          </AvatarFallback>
        </Avatar>

        <h2 className="mt-5 text-[34px] font-bold leading-none text-grey-text-primary">
          {displayName}
        </h2>

        <div className="mt-8 flex w-full max-w-[240px] flex-col gap-4">
          <Link
            to="edit"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-primary-mid px-6 text-btn font-bold text-white transition-colors duration-200 hover:bg-primary"
          >
            Edit Profile
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full border-2 border-primary-mid px-6 text-btn font-bold text-primary-mid transition-colors duration-200 hover:bg-primary-mid hover:text-white"
          >
            Delete Account
          </button>
        </div>
      </div>

      <div className="min-w-0">
        <div className="border-b border-secondary-lighter pb-4">
          <h3
            id="profile-details-heading"
            className="text-[24px] font-bold leading-tight text-grey-text-primary"
          >
            Profile Details
          </h3>
        </div>

        <dl
          aria-labelledby="profile-details-heading"
          className="grid grid-cols-1 gap-x-10 gap-y-6 pt-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-y-7"
        >
          {ACCOUNT_PROFILE_DETAILS.map((item) => (
            <div key={item.key} className="contents">
              <dt className="text-[18px] leading-none text-grey-text-secondary">{item.label}</dt>
              <dd className="text-[18px] leading-none text-grey-text-secondary">
                {formatAccountProfileValue(item.key, profile[item.key])}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default ShowInfo
