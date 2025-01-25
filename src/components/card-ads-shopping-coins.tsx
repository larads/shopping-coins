import React from "react"
import { View, Text, Image } from "react-native"

export interface AdsProps {
    id?: string
    trip?: string
    image?: string
    price?: number
    description?: string
}

export default function CardAdsShoppingCoins() {
    return (
        <View className="bg-purple w-[298px] h-[80px] rounded-3xl mt-10 p-4 flex-row items-center ml-4">
            <View className="flex-1 items-center justify-center">
                <Image
                    source={require('@/assets/products/adsTrip.png')}
                    className="w-[260px] mt-10 h-[90px]"
                    resizeMode="contain"
                />
            </View>

            <View className="flex-2">
                <Text className="text-white text-lg font-bold">Pacote Acapulo</Text>
                <Text className="text-white text-lg font-light">Guerreiro - México</Text>
                <Text className="text-white text-2xl font-bold mt-2">Lc <Text className="text-3xl">1000</Text></Text>
            </View>
        </View>
    );
}
