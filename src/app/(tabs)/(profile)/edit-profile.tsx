import HeaderBack from "@/components/header-back"
import Input from "@/components/input"
import PictureUserProfile from "@/components/picture-user-profile"
import { colors } from "@/styles/colors"
import { router } from "expo-router"
import { CalendarDays, Lock, Mail, User } from "lucide-react-native"
import { useState } from "react"
import { SafeAreaView, View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native"

export default function EditProfile() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')

    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1 mb-5"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}>
                    <View className="mt-8 px-4">
                        <HeaderBack label="Voltar" onBack={router.back} />
                        <Text className="text-3xl font-bold py-4 text-white">Detalhes do Perfil</Text>
                        <PictureUserProfile />
                        <Text className="text-center text-white font-medium text-xl py-4">Mary</Text>
                    </View>

                    <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl p-5">
                        <Text className="text-3xl font-bold py-4">Suas Informações</Text>

                        <Input label="Nome" value={name} onChangeText={(text) => setName(text)}>
                            <Input.Icon>
                                <User size={24} color={colors.purple} />
                            </Input.Icon>
                        </Input>

                        <Input label="E-mail" value={email} onChangeText={(text) => setEmail(text)}>
                            <Input.Icon>
                                <Mail size={24} color={colors.purple} />
                            </Input.Icon>
                        </Input>

                        <Input label="Data do Cadastro" value={birthDate} onChangeText={(text) => setBirthDate(text)}>
                            <Input.Icon>
                                <CalendarDays size={24} color={colors.purple} />
                            </Input.Icon>
                        </Input>

                        <Input label="Senha" value={email} onChangeText={(text) => setEmail(text)}>
                            <Input.Icon>
                                <Lock size={24} color={colors.purple} />
                            </Input.Icon>
                        </Input>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
