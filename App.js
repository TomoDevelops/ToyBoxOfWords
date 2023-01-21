import { useEffect, useContext } from "react";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./screens/StartScreen";
import GameOverScreen from "./screens/GameOverScreen";
import PagesContextProvider, {
    PagesContext,
} from "./store/context/pages-context";
import MemoryCardGame from "./screens/MemoryCardGame";

const Stack = createNativeStackNavigator();

export default function App() {
    const pagesContext = useContext(PagesContext);

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
                        <Stack.Screen name="Start" component={StartScreen} />
                        <Stack.Screen
                            name="GameOver"
                            component={GameOverScreen}
                        />
                        {/* TODO: add Stack.Screen for each game and change name to GameScreen + number. In order to navigate to a random game: navigation.navigate(GameScreen[randomNumber]) */}
                        <Stack.Screen
                            name="GameScreen"
                            component={
                                pagesContext.pages === ""
                                    ? MemoryCardGame
                                    : pagesContext.pages
                            }
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PagesContextProvider>
        </>
    );
}
