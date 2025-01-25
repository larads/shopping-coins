import * as ImagePicker from 'expo-image-picker'

export async function useGallery() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
        alert("Permissão de acesso à galeria negada.")
        return null
    }

    const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
    })

    if (photoSelected.canceled) {
        return null
    }

    return photoSelected.assets[0].uri
}
