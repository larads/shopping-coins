import { colors } from "@/styles/colors"
import { SquareArrowLeft } from "lucide-react-native"
import { TouchableOpacityProps, View, Text, TouchableOpacity } from "react-native"

interface HeaderBack extends TouchableOpacityProps {
    label: string
    onBack: VoidFunction
}

export default function HeaderBack({ label, onBack }: HeaderBack) {
    return (
        <View className="w-full flex-row items-center py-5">
            <TouchableOpacity onPress={onBack}>
                <SquareArrowLeft size={28} color={colors.white} />
            </TouchableOpacity>
            <Text className="text-white font-semibold text-xl ml-5">{label}</Text>
        </View>
    )
}