import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      setLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
      logOut: () => set({ isLoggedIn: false }),
    }),
    {
      name: 'afaq-auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useAuthStore
