import { colors } from "@/styles/colors"
import { Camera } from "lucide-react-native"
import { TouchableOpacity, Image, View } from "react-native"

interface PictureProps {
    onPress?: VoidFunction
    imageUri?: string | null
}

export default function PictureUserProfile({ onPress, imageUri }: PictureProps) {
    return (
        <TouchableOpacity className="flex items-center justify-center" onPress={onPress}>
            <Image
                source={imageUri ? { uri: imageUri } : { uri: 'https://github.com/larads.png' }}
                className="h-36 w-36 rounded-2xl border border-white"
            />

            <View className="bg-white w-10 h-10 items-center justify-center rounded-full mt-[-20px]">
                <Camera size={24} color={colors.purple} />
            </View>
        </TouchableOpacity>
    )
}
