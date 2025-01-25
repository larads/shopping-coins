import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type UserStorage = {
    id: string
    name: string
    email: string
    balance: string

    createdAt: string
}

interface StateProps {
    data: UserStorage | null
    save: (data: UserStorage) => void
    update: (partialData: Partial<UserStorage>) => void
    remove: () => void
}

export const userUserStorage = create(
    persist<StateProps>(
        (set) => ({
            data: null,
            save: (data) => set({ data }),
            update: (partialData) =>
                set((state) => ({
                    data: state.data ? { ...state.data, ...partialData } : null,
                })),
            remove: () => set({ data: null }),
        }),
        {
            name: 'shoppingcoins:user',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
)