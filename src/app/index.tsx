import React, { useState } from "react"
import { User, Lock } from 'lucide-react-native'
import { Keyboard, Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, Text, TouchableWithoutFeedback, View, ScrollView } from "react-native"
import { colors } from "@/styles/colors"

import Input from "@/components/input"
import { Button } from "@/components/button"
import ButtonText from "@/components/button-text"
import { router } from "expo-router"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)


    async function handleSignIn() {
        router.navigate('/(tabs)')
    }

    return (
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
                    <SafeAreaView className="flex-1 bg-purple">
                        <StatusBar
                            barStyle="light-content"
                            backgroundColor="transparent"
                            translucent
                        />
                        <View className="py-14 items-center justify-center">
                            <Image
                                source={require('@/assets/logo.png')}
                                alt="icon shopping coins"
                                className="w-[312px] h-[157px] opacity-90"
                                resizeMode="contain"
                            />
                        </View>

                        <View className="bg-[#F9F9F9] p-8 w-full h-[512px] rounded-t-[24px] items-center">
                            <Text className="font-sora font-semibold text-[24px] py-5">
                                Login
                            </Text>
                            <Input label="E-mail" value={email} onChangeText={(text) => setEmail(text)}>
                                <Input.Icon>
                                    <User size={24} color={colors.purple} />
                                </Input.Icon>
                            </Input>
                            <Input label="Senha" value={password} onChangeText={(text) => setPassword(text)}>
                                <Input.Icon>
                                    <Lock size={24} color={colors.purple} />
                                </Input.Icon>
                            </Input>
                            <View className="py-5">
                                <Button label="Entrar" onPress={handleSignIn} disabled={loading} />
                            </View>
                            <View className="flex-row py-16">
                                <ButtonText title="Registrar-se" />
                                <Text className="px-5 text-[#9B9B9B]">|</Text>
                                <ButtonText title="Resetar senha" />
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}