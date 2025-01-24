import { api } from "@/lib/axios"

interface makePurchaseProps {
    id: string
    price: number
    userId: string
    quantity: number
    createdAt: string
    productId: string
}

interface makePurchase {
    purchase: makePurchaseProps[]
}
export async function makePurchase(data: makePurchaseProps) {
    const response = await api.post('products/', data)
    return response.data.purchase
}