import { View, Text, TouchableOpacity } from "react-native";
import { Bell } from "lucide-react-native";
import { colors } from "@/styles/colors";

export default function CustomHome() {
    return (
        <View className="flex-row justify-between items-center">
            <Text className="text-white font-light text-xl">Olá,
                <Text className="text-2xl font-bold"> Mary</Text>
            </Text>
            <TouchableOpacity>
                <Bell size={24} color={colors.white} />
            </TouchableOpacity>
        </View>
    )
}