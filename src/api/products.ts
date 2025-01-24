import { api } from "@/lib/axios"

export interface ProductsProps {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string
    category: string
    createdAt: string
}

export async function getProducts() {
    const response = await api.get<ProductsProps[]>('products')
    return response.data
}
