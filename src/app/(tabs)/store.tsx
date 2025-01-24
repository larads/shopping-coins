import CardProduct, { ProductProps } from "@/components/card-product"
import HeaderBack from "@/components/header-back"
import { router } from "expo-router"
import React, { useState } from "react"
import { SafeAreaView, View, Text, FlatList } from "react-native"

export default function PayCard() {
    const [products, setProducts] = useState<ProductProps[]>([]);

    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 p-7">
                <HeaderBack label="Voltar" onBack={router.back} />
            </View>
            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl p-5">
                <Text className="text-3xl font-bold p-2">Shop</Text>
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <CardProduct
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            quantity={item.quantity}
                        />}
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