import "@/styles/global.css"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import {
    useFonts,
    Sora_700Bold,
    Sora_500Medium,
    Sora_400Regular,
} from "@expo-google-fonts/sora"

import { Loading } from "@/components/loading"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Sora_700Bold,
        Sora_500Medium,
        Sora_400Regular,
    })

    return (
        <>
            <StatusBar style="light" />
            {fontsLoaded ? <Slot /> : <Loading />}
        </>
    )
}