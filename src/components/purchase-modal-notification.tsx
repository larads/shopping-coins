import React, { useState, useEffect } from "react";
import { View, Text, Modal, Animated } from "react-native";

interface NotificationProps {
    isVisible: boolean;
}

export default function PurchaseModalNotification({ isVisible }: NotificationProps) {
    const [isVisibleModal, setIsVisibleModal] = useState(isVisible);
    const [progress, setProgress] = useState(0);

    const progressAnimation = new Animated.Value(0);

    useEffect(() => {
        if (isVisible) {
            setIsVisibleModal(true);
            setProgress(0);

            Animated.timing(progressAnimation, {
                toValue: 100,
                duration: 10000,
                useNativeDriver: false,
            }).start();

            const timer = setTimeout(() => {
                setIsVisibleModal(false);
            }, 10000)

            return () => clearTimeout(timer);
        } else {
            setIsVisibleModal(false);
        }
    }, [isVisible]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisibleModal}
            onRequestClose={() => setIsVisibleModal(false)}
        >
            <View className="absolute bottom-5 ml-5 w-[320px] bg-white rounded-xl  border border-gray">
                <Text className="text-xl font-bold text-center mt-4">
                    O Notebook L24
                    <Text className="text-base font-light"> está à caminho! 🥳</Text>
                </Text>
                <Text className="text-base font-light text-center">
                    🎁 Parabéns, sua compra foi confirmada!
                </Text>
                <View className="mt-4 w-full">
                    <Animated.View
                        style={{
                            height: 8,
                            width: `${progress}%`,
                            backgroundColor: 'green',
                            borderRadius: 10,
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
}
