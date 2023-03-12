import { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionSpecs } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

import PagesContextProvider from "./store/context/pages-context";

import routes from "./screens/Routes";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        kodomo: require("./assets/fonts/KodomoRounded.otf"),
        kodomoLight: require("./assets/fonts/KodomoRounded-Light.otf"),
        archivo: require("./assets/fonts/Archivo-Regular.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
            SplashScreen.hideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <PagesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        {routes.map((route) => (
                            <Stack.Screen
                                key={route.name}
                                name={route.name}
                                component={route.component}
                                options={route.options}
                            />
                        ))}
                    </Stack.Navigator>
                </NavigationContainer>
            </PagesContextProvider>
        </>
    );
}
