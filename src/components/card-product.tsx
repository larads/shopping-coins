import React, { useState } from "react"
import { colors } from "@/styles/colors"
import { CircleCheckBig, ShoppingCart } from "lucide-react-native"
import PurchaseModalNotification from "./purchase-modal-notification"
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native"

export interface ProductProps {
    id: number
    name: string
    quantity: number
    price: number
    image: any
    category: string
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
        <View className="flex-1 justify-center items-center mt-4 px-3">
            <View className="w-[160px] bg-white rounded-lg shadow-lg p-4">
                <Image
                    source={image}
                    className="w-full h-[110px] rounded-md"
                    resizeMode="cover"
                />

                <Text className="text-lg font-semibold mt-3">{name}</Text>
                <Text className="text-sm text-gray-500 mt-1">{quantity} unidades</Text>

                <View className="flex-row justify-between items-center mt-3">
                    <View>
                        <Text className="text-base font-bold text-purple">Lc</Text>
                        <Text className="text-lg font-bold text-purple">{price.toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={handlePurchase}
                        className="bg-purple rounded-full mt-2 p-2 items-center justify-center"
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
