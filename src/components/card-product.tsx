import React, { useState } from "react"
import { colors } from "@/styles/colors"
import { CircleCheckBig, ShoppingCart } from "lucide-react-native"
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native"
import PurchaseModalNotification from "./purchase-modal-notification"

export interface ProductProps {
    id: string
    name: string
    price: number
    image: string | number
    quantity: number
    category?: string
}

export default function CardProducts({
    name,
    price,
    image,
    quantity,
}: ProductProps) {
    const [isPurchased, setIsPurchased] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handlePurchase = () => {
        if (isPurchased) {
            return
        }
        setIsLoading(true)
        setTimeout(() => {
            setIsPurchased(true)
            setIsLoading(false)
        }, 2000)
    }

    return (
        <View className="mt-auto px-4">
            <View className="w-[160px] h-[250px] bg-[#ffff] rounded-lg shadow-md p-2">
                <Image
                    source={typeof image === 'string' ? { uri: image } : image}
                    className="w-full h-[110px] rounded-md"
                    resizeMode="cover"
                />

                <Text className="text-xl font-bold mt-2">{name}</Text>
                <Text className="text-base text-gray-500 font-light">{quantity} unidades</Text>
                <View className="flex-row justify-between mt-3">
                    <View className="mt-3">
                        <Text className="text-xl font-bold text-purple">Lc</Text>
                        <Text className="text-xl font-bold text-purple">{price.toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={handlePurchase}
                        className="bg-purple rounded-2xl mt-5 h-10 w-10 items-center justify-center"
                        disabled={isPurchased}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color={colors.white} />
                        ) : isPurchased ? (
                            <CircleCheckBig size={24} color={colors.cyan} />
                        ) : (
                            <ShoppingCart size={24} color={colors.white} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            <PurchaseModalNotification isVisible={isLoading} />
        </View>
    )
}
