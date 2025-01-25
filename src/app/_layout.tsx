import "@/styles/global.css"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import {
    useFonts,
    Sora_700Bold,
    Sora_500Medium,
    Sora_400Regular,
} from "@expo-google-fonts/sora"
import { useState, useEffect } from "react"

import * as SQLite from 'expo-sqlite'
import migrations from '../../drizzle/migrations'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'

import { Loading } from "@/components/loading"

const DATABASE_NAME = 'shopping_coins.db'
const expoDB = SQLite.openDatabaseSync(DATABASE_NAME)
const db = drizzle(expoDB)

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Sora_700Bold,
        Sora_500Medium,
        Sora_400Regular,
    })

    const [migrationsCompleted, setMigrationsCompleted] = useState(false)

    const { success } = useMigrations(db, migrations)

    useEffect(() => {
        if (success) {
            setMigrationsCompleted(true)
        } else {
            console.log('Failed to generate migrations, recomendável gerar :>')
        }
    }, [success])

    if (!fontsLoaded || !migrationsCompleted) {
        return <Loading />
    }

    return (
        <>
            <StatusBar style="light" />
            <SQLite.SQLiteProvider databaseName={DATABASE_NAME}>
                <Slot />
            </SQLite.SQLiteProvider>
        </>
    )
}
