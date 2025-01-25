import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    price: real('price'),
    quantity: integer('quantity'),
    image: text('image'),
    category: text('category'),

    createdAt: text('createdAt').notNull(),
})
