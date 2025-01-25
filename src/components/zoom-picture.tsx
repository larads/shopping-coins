import React from 'react'
import { Modal, TouchableOpacity, View, Image, TouchableOpacityProps } from 'react-native'

interface ModalAreaRiskZoomImagensProps extends TouchableOpacityProps {
    close: (uri: string | null) => void
    zoomPicture: string | null
}

export default function ModalZoomPicture({
    close,
    zoomPicture,
}: ModalAreaRiskZoomImagensProps) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={!!zoomPicture}
            onRequestClose={() => close(null)}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPressOut={() => close(null)}
                className="flex-1 justify-end bg-black/50"
            >
                <View className="p-5">
                    {zoomPicture && (
                        <Image
                            source={{ uri: zoomPicture }}
                            className="w-full h-full"
                            resizeMode="contain"
                            alt="Imagem selecionada"
                        />
                    )}
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
