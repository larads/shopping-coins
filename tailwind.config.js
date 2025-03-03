import { colors } from "./src/styles/colors.ts"
import { fontFamily } from "./src/styles/font-family.ts"

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors,
            fontFamily,
        },
    },
    plugins: [],
}