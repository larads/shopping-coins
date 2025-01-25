import { create } from 'zustand'

interface Products {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string
    category: string
    createdAt: string
}

interface StateProps {
    data: Products | null
    save: (data: Products) => void
    remove: () => void
}

export const useProductsStorage = create<StateProps>((set) => ({
    data: null,
    save: (data) => set({ data }),
    remove: () => set({ data: null }),
}))