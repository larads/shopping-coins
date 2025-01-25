import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface StateProps {
    token: string | null
    save: (token: string) => void
}

export const useTokenAuthStorage = create(
    persist<StateProps>(
        (set) => ({
            token: null,
            save: (token) => set({ token }),
        }),
        {
            name: 'shoppingcoins:token',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
)