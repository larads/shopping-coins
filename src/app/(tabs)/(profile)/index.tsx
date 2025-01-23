import { Button } from "@/components/button";
import PictureUserProfile from "@/components/picture-user-profile";
import RedirectionScreenProfile from "@/components/redirection-screens-profile";
import { colors } from "@/styles/colors";
import { CircleUser, FilePen, Landmark, UserRound } from "lucide-react-native";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

export default function Profile() {
    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 py-5 justify-center items-center">
                <PictureUserProfile />
                <Text className="text-center text-white font-medium text-xl py-4">Mary</Text>
                <Button variant="gray" label="Editar Perfil" />
            </View>
            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl mt-[35px] p-7">
                <ScrollView>
                    <RedirectionScreenProfile label="Detalhes do Perfil" icon={<CircleUser size={24} color={colors.purple} />} />
                    <RedirectionScreenProfile label="Detalhes da Conta" icon={<Landmark size={24} color={colors.purple} />} />
                    <RedirectionScreenProfile label="Historico" icon={<FilePen size={24} color={colors.purple} />} />

                    <View className="items-center justify-center mt-5">
                        <Button label="Sair" />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}