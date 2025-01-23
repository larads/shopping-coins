import { colors } from "@/styles/colors";
import { Camera } from "lucide-react-native";
import { TouchableOpacity, Image, View } from "react-native";

export default function PictureUserProfile() {
    return (
        <TouchableOpacity className="flex items-center justify-center">
            <Image
                source={{ uri: 'https://github.com/larads.png' }}
                className="h-36 w-36 rounded-2xl border border-white"
            />

            <View className="bg-white w-10 h-10 items-center justify-center rounded-full mt-[-20px]">
                <Camera size={24} color={colors.purple} />
            </View>
        </TouchableOpacity>
    );
}
