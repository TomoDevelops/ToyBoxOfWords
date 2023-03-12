import { View, SafeAreaView, useWindowDimensions } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

import GAME_DATA from "../data/data";
import Button from "../components/Button";
import { PagesContext } from "../store/context/pages-context";

const StartScreen = ({ navigation }) => {
    const pagesContext = useContext(PagesContext);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            pagesContext.shuffleGamePages();
        }
    }, [isFocused]);

    const moveToGameScreen = () => {
        pagesContext.shufflePage();
        navigation.navigate(pagesContext.pages);
    };

    const moveToSettingsScreen = () => {
        navigation.navigate("設定");
    };

    const { width, height } = useWindowDimensions();
    let buttonContainerWidth = "85%";

    if (width < 380) {
        buttonContainerWidth = "90%";
    }
    if (height < 700) {
        buttonContainerWidth = "90%";
    }

    return (
        <LinearGradient colors={["#61c5ff", "#a0fff4"]} className="flex-1">
            <SafeAreaView className="flex-1 items-center justify-center">
                <LottieView
                    autoPlay
                    source={GAME_DATA.gameResources.robot}
                    className="h-80 w-52"
                />
                <View
                    className="flex-row justify-between mt-6"
                    style={{ width: buttonContainerWidth }}
                >
                    <Button
                        buttonStyle="h-20 w-36"
                        textStyle="text-white text-3xl"
                        buttonBgColor="bg-[#ffac3e] border-[3px] border-white"
                        onPress={moveToGameScreen}
                    >
                        あそぶ
                    </Button>
                    <Button
                        buttonStyle="h-20 w-36"
                        textStyle="text-white text-3xl"
                        buttonBgColor="bg-[#49e683] border-[3px] border-white"
                        onPress={moveToSettingsScreen}
                    >
                        せってい
                    </Button>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default StartScreen;
