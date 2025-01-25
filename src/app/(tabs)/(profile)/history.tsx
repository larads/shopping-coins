import HeaderBack from "@/components/header-back";
import { router } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function History() {
    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 px-4">
                <HeaderBack label="Voltar" onBack={router.back} />
                <Text className="text-3xl font-bold py-4 text-white">Historico de Compras</Text>
            </View>
        </SafeAreaView>
    )
}