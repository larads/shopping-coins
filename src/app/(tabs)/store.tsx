import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { SafeAreaView, View, Text, FlatList } from "react-native"

import HeaderBack from "@/components/header-back"
import { products as productsData } from "@/lib/products"
import CardProduct, { ProductProps } from "@/components/card-product"

export default function PayCard() {
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        setProducts(productsData)
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 px-4">
                <HeaderBack label="Voltar" onBack={router.back} />
            </View>
            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl p-5">
                <Text className="text-3xl font-bold p-2">Shop</Text>
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <CardProduct
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            quantity={item.quantity}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
