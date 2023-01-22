import { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./screens/StartScreen";
import GameOverScreen from "./screens/GameOverScreen";
import PagesContextProvider from "./store/context/pages-context";

import MemoryCardGame from "./screens/MemoryCardGame";
import NumberCardGame from "./screens/NumberCardGame";
import ShapeCardGame from "./screens/ShapeCardGame";

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        kodomo: require("./assets/fonts/KodomoRounded.otf"),
        kodomoLight: require("./assets/fonts/KodomoRounded-Light.otf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }

    const pageAnimation = {
        animation: "fade",
        presentation: "card",
    };

    return (
        <>
            <StatusBar style="dark" />
            <PagesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            contentStyle: { backgroundColor: "##ff3c3c" },
                        }}
                    >
                        <Stack.Screen
                            name="Start"
                            component={StartScreen}
                            options={pageAnimation}
                        />
                        <Stack.Screen
                            name="GameOver"
                            component={GameOverScreen}
                            options={pageAnimation}
                        />
                        <Stack.Screen
                            name="MemoryCardGame"
                            component={MemoryCardGame}
                            options={pageAnimation}
                        />
                        <Stack.Screen
                            name="NumberCardGame"
                            component={NumberCardGame}
                            options={pageAnimation}
                        />
                        <Stack.Screen
                            name="ShapeCardGame"
                            component={ShapeCardGame}
                            options={pageAnimation}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PagesContextProvider>
        </>
    );
}
