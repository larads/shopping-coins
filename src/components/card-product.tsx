import React from "react";
import { View, Text, Image } from "react-native";

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    description: string;
}

export default function CardProduct({
    title,
    description,
    image,
    price,
}: ProductCardProps) {
    return (
        <View className="w-[157px] h-[233px] bg-white rounded-lg shadow-md p-4">
            <Image
                source={{ uri: image }}
                className="w-full h-[120px] rounded-md"
                resizeMode="cover"
            />

            <Text className="text-lg font-semibold mt-2 text-gray-800">{title}</Text>
            <Text className="text-sm text-gray-600 mt-1">{description}</Text>
            <Text className="text-md font-bold text-purple mt-2">${price.toFixed(2)}</Text>
        </View>
    );
}
