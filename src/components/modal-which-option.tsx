import React from "react"
import { BlurView } from 'expo-blur'
import { ImagePlus } from "lucide-react-native"
import { Modal, TouchableOpacity, View, Text } from "react-native"

import { colors } from "@/styles/colors"

interface PropsModalWhichOption {
    isVisible: boolean
    closeModal: VoidFunction

    openGallery?: VoidFunction
    visualizity?: VoidFunction
}

export default function ModalWhichOption({
    isVisible,
    closeModal,
    openGallery,
    visualizity,
}: PropsModalWhichOption) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={closeModal}
        >
            <BlurView intensity={50} className="flex-1" tint="dark">
                <TouchableOpacity
                    activeOpacity={1}
                    onPressOut={closeModal}
                    className="justify-center flex-1"
                >
                    <View className="bg-primary w-[340px] self-center h-4/6 mt-auto rounded-t-3xl">
                        <View className="w-full p-5 rounded-xl bg-white justify-center items-center">
                            <ImagePlus size={26} color={colors.purple} />
                            <Text className="text-xl font-bold text-center">
                                Foto de Perfil
                            </Text>
                            <Text className="text-base font-bold text-center">
                                Escolha uma Opção
                            </Text>
                            <View className="flex-row justify-between w-full mt-5">
                                <TouchableOpacity
                                    onPress={openGallery}
                                    className="rounded-lg bg-gray w-36 h-12 justify-center items-center"
                                >
                                    <Text className="text-center text-lg font-bold text-white">
                                        Galeria
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={visualizity}
                                    className="rounded-lg bg-gray w-36 h-12 justify-center items-center"
                                >
                                    <Text className="text-center text-lg font-bold text-white">
                                        Visualizar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </BlurView>
        </Modal>
    )
}
