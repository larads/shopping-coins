import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { Home, ShoppingBag, UserRound } from "lucide-react-native";

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.purple,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 70,
                        paddingTop: 12,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: colors.white,
                        position: "absolute",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: -2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        elevation: 5,
                    }
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
