import React, { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View, Text } from "react-native";

import CustomHome from "@/components/custom-home";
import CardMoneyShop from "@/components/card-money-shop";
import CustomProfileHome from "@/components/custom-profile-home";
import CardAdsShoppingCoins, { AdsProps } from "@/components/card-ads-shopping-coins";
import CardProduct, { ProductProps } from "@/components/card-product";

export default function Home() {
    const [ads, setAds] = useState<AdsProps[]>([])
    const [products, setProducts] = useState<ProductProps[]>([])

    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 p-7">
                <CustomProfileHome />
                <CustomHome />
            </View>

            <View className="absolute inset-x-0 top-[170px] px-5 z-10">
                <CardMoneyShop />
            </View>

            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl mt-[35px] p-5 items-center">
                <FlatList
                    data={ads}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CardAdsShoppingCoins />
                    )}
                />
                <View>
                    <FlatList
                        horizontal
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <CardProduct />
                        )} />
                </View>
                <TouchableOpacity className="bg-purple rounded-full h-14 w-56 justify-center items-center">
                    <Text className="text-[#ffff] font-bold text-xl">Ver todos os produtos</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
