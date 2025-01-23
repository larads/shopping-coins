import React from "react"
import { ReactNode } from 'react'
import { TextInput, View, TextInputProps } from "react-native"

interface InputProps extends TextInputProps {
    children?: ReactNode
    label?: string
}

interface InputIconProps {
    children: ReactNode
}


export default function Input({ children, label }: InputProps) {
    return (
        <View
            className="flex-row items-center w-full h-[80px] rounded-[24px] mb-5 bg-[#FFFF] justify-between px-[24px]"
        >
            {children}
            <TextInput
                placeholder={label}
                placeholderTextColor="#000000"
                className="flex-1 text-[18px] leading-[22.68px] font-semibold text-black font-sora ml-4"
            />
        </View>
    );
}


function InputIcon({ children }: InputIconProps) {
    return children
}

Input.Icon = InputIcon

export { Input }