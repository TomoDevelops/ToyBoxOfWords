// https://www.colorhexa.com/fdfd96
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import { useFonts } from "expo-font";
import StartScreen from "./screens/StartScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        kodomo: require("./assets/fonts/KodomoRounded.otf"),
        "kodomo-light": require("./assets/fonts/KodomoRounded-Light.otf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    let screen = <StartScreen />;

    return (
        <>
            <StatusBar style="dark" />
            <SafeAreaView style={styles.root} onLayout={onLayoutRootView}>
                {screen}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
