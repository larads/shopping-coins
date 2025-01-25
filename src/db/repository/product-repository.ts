import { eq } from 'drizzle-orm'
import { useSQLiteContext } from 'expo-sqlite'
import { products } from '../schemas/products'
import { drizzle } from 'drizzle-orm/expo-sqlite'

export interface ProductRequest {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string
    category: string
    createdAt: string
}

export interface ProductResponse {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string
    category: string
    createdAt: string
    updatedAt: string | null
    deletedAt: string | null
}

export interface ProductUpdateRequest {
    id: string
    name?: string
    description?: string
    price?: number
    quantity?: number
    image?: string
    category?: string
    updatedAt?: string | null
    deletedAt?: string | null
}

export function UseProductRepository() {
    const database = useSQLiteContext()
    const db = drizzle(database, { schema: { products } })

    async function create(product: ProductRequest) {
        await db.insert(products).values({
            ...product,
            createdAt: new Date().toISOString(),
        })
    }

    async function findAll() {
        try {
            const response = await db.query.products.findMany()
            return response
        } catch (error) {
            return []
        }
    }

    async function findUnique(id: string) {
        try {
            const response = await db.query.products.findFirst({
                where: eq(products.id, id),
            })
            return response
        } catch (error) {
            return null
        }
    }

    async function update(product: ProductUpdateRequest) {
        try {
            const response = await db
                .update(products)
                .set(product)
                .where(eq(products.id, product.id))
            return response
        } catch (error) {
            return null
        }
    }

    return { findAll, create, findUnique, update }
}
