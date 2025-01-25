import { useSQLiteContext } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { products } from './schemas/products'

export function useDropDatabase() {
    const database = useSQLiteContext()

    const productTable = drizzle(database, { schema: { products } })

    async function cleanTable() {
        await productTable.delete(products)
    }

    return { cleanTable }
}
