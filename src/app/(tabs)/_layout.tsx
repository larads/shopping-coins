import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { Home, ShoppingBag, UserRound } from "lucide-react-native";

export default function TabsLayout() {
    return (
        <>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.purple,
                tabBarShowLabel: false,
            }}
                initialRouteName="index"
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ color }) => <Home size={24} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="store"
                    options={{
                        tabBarIcon: ({ color }) => <ShoppingBag size={24} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="(profile)"
                    options={{
                        tabBarIcon: ({ color }) => <UserRound size={24} color={color} />,
                    }}
                />
            </Tabs>
        </>
    );
}
