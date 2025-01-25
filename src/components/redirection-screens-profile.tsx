import { colors } from "@/styles/colors";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, View, TouchableOpacityProps, Text } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    icon: any
    label: string
    onPress: VoidFunction
}

export default function RedirectionScreenProfile({ label, icon, onPress }: ButtonProps) {
    return (
        <TouchableOpacity className="w-full rounded-full bg-[#ffff] h-20 p-2 mb-5 flex-row items-center justify-between" onPress={onPress}>
            <View className="flex-row p-4">
                {icon}
                <Text className="font-bold text-xl ml-5">{label}</Text>
            </View>
            <ChevronRight size={28} color={colors.gray} />
        </TouchableOpacity>
    )
}