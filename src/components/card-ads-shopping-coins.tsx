import React from "react"
import { View, Text, Image } from "react-native"

export interface AdsProps {
    id: string
    trip: string
    image: string
    price: number
    description: string
}

export default function CardAdsShoppingCoins({ image, price, description, trip }: AdsProps) {
    return (
        <View className="bg-purple-500 w-full rounded-xl h-36 mt-10 p-4 flex-row items-center">
            <View className="flex-1 items-center justify-center">
                <Image
                    source={{ uri: image }}
                    className="w-20 h-20"
                    resizeMode="contain"
                />
            </View>

            <View className="flex-2">
                <Text className="text-white text-lg font-bold">Pacote {trip}</Text>
                <Text className="text-white text-sm font-light">{description}</Text>
                <Text className="text-white text-2xl font-bold mt-2">Lc {price}</Text>
            </View>
        </View>
    );
}
