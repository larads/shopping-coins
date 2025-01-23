import React from "react"
import { colors } from "@/styles/colors"
import { CircleCheckBig, ShoppingCart } from "lucide-react-native"
import { View, Text, Image, TouchableOpacity } from "react-native"

export interface ProductProps {
    id: string
    title: string
    price: number
    image: string
    stock: number

    bought: boolean
    loading: boolean
}

export default function CardProduct({
    title,
    price,
    image,
    stock,
    bought
}: ProductProps) {
    return (
        <View className="w-[160px] h-[250px] bg-white rounded-lg shadow-md p-2">
            <Image
                source={{ uri: image }}
                className="w-full h-[110px] rounded-md"
                resizeMode="cover"
            />

            <Text className="text-sm font-bold mt-2 text-gray-800">{title}</Text>
            <Text className="text-xs text-gray-500 mt-1">{stock} unidades</Text>
            <Text className="text-md font-bold text-purple-600 mt-2">Lc {price.toFixed(2)}</Text>

            <TouchableOpacity className="bg-purple-600 rounded-full mt-3 h-8 w-8 flex items-center justify-center">
                <CircleCheckBig size={24} color={colors.cyan} />
                <ShoppingCart size={24} color={colors.white} />
            </TouchableOpacity>
        </View>
    );
}
