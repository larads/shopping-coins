import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonText extends TouchableOpacityProps {
    title: string
}

export default function ButtonText({ title }: ButtonText) {
    return (
        <TouchableOpacity>
            <Text className="text-[#9B9B9B]">{title}</Text>
        </TouchableOpacity>
    )
}