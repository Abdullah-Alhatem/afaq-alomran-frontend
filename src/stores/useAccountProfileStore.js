import { create } from 'zustand'

import { DEFAULT_ACCOUNT_PROFILE } from '@/components/account/accountProfileData'

const useAccountProfileStore = create((set) => ({
  profile: DEFAULT_ACCOUNT_PROFILE,
  updateProfile: (nextProfile) =>
    set(() => ({
      profile: {
        ...DEFAULT_ACCOUNT_PROFILE,
        ...nextProfile,
      },
    })),
  resetProfile: () =>
    set(() => ({
      profile: DEFAULT_ACCOUNT_PROFILE,
    })),
}))

export default useAccountProfileStore
