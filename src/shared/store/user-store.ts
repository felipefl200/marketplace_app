import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { UserInterface } from '@/shared/interfaces/http/user'

interface Session {
  user: UserInterface
  token: string
  refreshToken: string
}

interface UpdateTokens {
  token: string
  refreshToken: string
}

export interface UserStore {
  user: UserInterface | null
  token: string | null
  refreshToken: string | null
  setSession: (sessionData: Session) => void
  logout: () => void
  updateTokens: (updateTokensData: UpdateTokens) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      setSession: (sessionData) => set(sessionData),
      logout: () => set({}),
      updateTokens: (updateTokensData) => set(updateTokensData),
    }),
    {
      name: 'marketplace-auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
