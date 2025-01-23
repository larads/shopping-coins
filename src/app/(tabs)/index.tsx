import React from "react";
import { SafeAreaView, View } from "react-native";

import CustomHome from "@/components/custom-home";
import CardMoneyShop from "@/components/card-money-shop";
import CustomProfileHome from "@/components/custom-profile-home";

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-purple relative">
            <View className="mt-8 p-7">
                <CustomProfileHome />
                <CustomHome />
            </View>

            <View className="absolute inset-x-0 top-[170px] px-5 z-10">
                <CardMoneyShop />
            </View>

            <View className="bg-[#F9F9F9] flex-1 rounded-t-3xl mt-[35px]">
            </View>
        </SafeAreaView>
    );
}
