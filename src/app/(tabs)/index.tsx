import { router } from "expo-router"
import { SafeAreaView, TouchableOpacity, View, Text, ScrollView } from "react-native"

import CustomHome from "@/components/custom-home"
import CardProduct from "@/components/card-product"
import CardMoneyShop from "@/components/card-money-shop"
import CustomProfileHome from "@/components/custom-profile-home"
import CardAdsShoppingCoins from "@/components/card-ads-shopping-coins"

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-purple">
            <View className="flex-1 bg-purple">
                <View className="mt-8 p-7">
                    <CustomProfileHome />
                    <CustomHome />
                </View>

                <View className="absolute inset-x-0 top-[170px] px-5 z-10">
                    <CardMoneyShop />
                </View>

                <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl mt-[35px] p-5 items-center">
                    <ScrollView horizontal className="h-[120px]">
                        <CardAdsShoppingCoins />
                        <CardAdsShoppingCoins />
                        <CardAdsShoppingCoins />
                    </ScrollView>

                    <View className="flex-row mb-5">
                        <CardProduct
                            id={2}
                            category=""
                            name='Notebook L24'
                            price={4000}
                            image={require('@/assets/products/notebook.png')}
                            quantity={24}
                        />
                        <CardProduct
                            id={3}
                            category=""
                            name='Relógio DaHora'
                            price={800}
                            image={require('@/assets/products/oClock.png')}
                            quantity={20}
                        />
                    </View>

                    <TouchableOpacity className="bg-purple w-64 mx-auto rounded-full p-4 items-center mb-20" onPress={() => router.push('/(tabs)/store')}>

                        <Text className="text-white font-bold text-lg">Ver todos os produtos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
