import { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PagesContextProvider from "./store/context/pages-context";

import routes from "./screens/Routes";
import colors from "./constants/Colors";

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
                            contentStyle: {
                                backgroundColor: colors.mainBgColor,
                            },
                        }}
                    >
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
