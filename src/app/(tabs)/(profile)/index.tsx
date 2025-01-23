import { Button } from "@/components/button";
import PictureUserProfile from "@/components/picture-user-profile";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

export default function Profile() {
    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 py-5 justify-center items-center">
                <PictureUserProfile />
                <Text className="text-center text-white font-medium text-xl py-4">Mary</Text>
                <Button variant="gray" label="Editar Perfil" />
            </View>
            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl mt-[35px]">
                <ScrollView>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}