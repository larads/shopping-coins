import { colors } from "@/styles/colors"
import { ShoppingBag, Wallet } from "lucide-react-native"
import { View, Text, TouchableOpacity } from "react-native"

export default function CardMoneyShop() {
    return (
        <View className="bg-[#ffff] h-16 px-4 w-full flex-row justify-between shadow-xl items-center rounded-xl">
            <View className="flex-1 flex-row items-center">
                <Wallet size={24} color={colors.purple} />
                <Text className="font-semibold text-xl ml-2">
                    Lc <Text className="font-bold text-xl">5.000.000</Text>
                </Text>
            </View>
            <View className="w-[2px] h-full mx-4" />
            <TouchableOpacity className="flex-1 flex-row items-center justify-center">
                <ShoppingBag size={24} color={colors.purple} />
                <Text className="font-semibold ml-2">Shop</Text>
            </TouchableOpacity>
        </View>
    )
}
