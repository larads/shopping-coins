import HeaderBack from "@/components/header-back"
import { router } from "expo-router"
import { SafeAreaView, View, Text } from "react-native"

export default function AccountDetails() {
    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 px-4">
                <HeaderBack label="Voltar" onBack={router.back} />
                <Text className="text-3xl font-bold py-4 text-white">Detalhes da Conta</Text>
            </View>
            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl p-5">

            </View>
        </SafeAreaView>
    )
}