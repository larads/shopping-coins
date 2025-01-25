import { useState } from "react"
import { router } from "expo-router"
import { SafeAreaView, View, Text, ScrollView } from "react-native"
import { CircleUser, FilePen, Landmark } from "lucide-react-native"

import { Button } from "@/components/button"
import { useGallery } from "@/hook/user-gallery"
import ModalZoomPicture from "@/components/zoom-picture"
import ModalWhichOption from "@/components/modal-which-option"
import PictureUserProfile from "@/components/picture-user-profile"
import RedirectionScreenProfile from "@/components/redirection-screens-profile"

export default function Profile() {
    const [isVisible, setIsVisible] = useState(false)
    const [zoomPicture, setZoomPicture] = useState<string | null>(null)
    const [selectedPicture, setSelectedPicture] = useState<string | null>(null)

    const whichOption = () => {
        setIsVisible(true)
    }

    const closeModal = () => {
        setIsVisible(false)
    }

    const onOpenGallery = async () => {
        const picture = await useGallery()
        if (picture) {
            setSelectedPicture(picture)
            closeModal()
        }
    }

    const pictureZoom = () => {
        setZoomPicture(selectedPicture)
        closeModal()
    }

    const closePicture = () => {
        setZoomPicture(null)
    }

    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 py-5 justify-center items-center">
                <PictureUserProfile
                    onPress={whichOption}
                    imageUri={selectedPicture}
                />
                <Text className="text-center text-white font-medium text-xl py-4">Mary</Text>
                <Button variant="gray" label="Editar Perfil" onPress={() => router.navigate('/(tabs)/(profile)/edit-profile')} />
            </View>
            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl mt-[35px] p-7">
                <ScrollView>
                    <RedirectionScreenProfile label="Detalhes do Perfil" icon={<CircleUser size={24} color="#6A4C9C" />} onPress={() => router.navigate('/(tabs)/(profile)/edit-profile')} />
                    <RedirectionScreenProfile label="Detalhes da Conta" icon={<Landmark size={24} color="#6A4C9C" />} onPress={() => router.navigate('/(tabs)/(profile)/account-details')} />
                    <RedirectionScreenProfile label="Historico" icon={<FilePen size={24} color="#6A4C9C" />} onPress={() => router.navigate('/(tabs)/(profile)/history')} />

                    <View className="items-center justify-center mt-5">
                        <Button label="Sair" />
                    </View>
                </ScrollView>
            </View>

            <ModalWhichOption
                isVisible={isVisible}
                closeModal={closeModal}
                openGallery={onOpenGallery}
                visualizity={pictureZoom}
            />

            <ModalZoomPicture zoomPicture={zoomPicture} close={closePicture} />
        </SafeAreaView>
    )
}
