import { View, Image, Text } from "react-native";

export default function CustomProfileHome() {
    return (
        <View className="py-2 flex-row justify-between items-center">
            <Image
                source={{ uri: 'https://github.com/larads.png' }}
                className="h-14 w-14 rounded-full border border-white"
            />
            <View className="bg-[#313131] h-10 p-2 rounded-2xl">
                <Text className="text-white font-bold text-lg">
                    Shopping Coins
                </Text>
            </View>
        </View>
    )
}