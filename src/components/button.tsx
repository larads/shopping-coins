import { cva, type VariantProps } from 'class-variance-authority'
import { Text, TouchableOpacity } from 'react-native'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'flex flex-row items-center justify-center rounded-md',
    {
        variants: {
            variant: {
                default: 'bg-[#7B22D3]',
                gray: 'bg-[#313131]',
            },
            size: {
                default: 'h-[48px] w-[104px] rounded-[24px] p-t-[8px] p-r-[24px] p-b-[8px] p-l-[24px]',
                sm: 'h-10 w-10',
                lg: 'h-12 px-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

interface ButtonProps
    extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
    label?: string
    labelClasses?: string
}

const buttonTextVariants = cva('text-center font-medium', {
    variants: {
        variant: {
            default: 'text-white',
            gray: 'text-gray-200', // Ajustado para "gray"
        },
        size: {
            default: 'text-[18px] font-[600] leading-[22.68px]',
            sm: 'text-sm',
            lg: 'text-xl',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})

function Button({
    label,
    labelClasses,
    className,
    variant,
    size,
    ...props
}: ButtonProps) {
    return (
        <TouchableOpacity
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {label && (
                <Text
                    className={cn(buttonTextVariants({ variant, size, className: labelClasses }))}
                >
                    {label}
                </Text>
            )}
        </TouchableOpacity>
    )
}

export { Button, buttonVariants }
