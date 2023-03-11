import React from "react";
import { View, Modal, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "./Button";

import GAME_DATA from "../data/data";
import { useNavigation } from "@react-navigation/native";

const Congratulations = ({ completed, restartButton }) => {
    const navigation = useNavigation();
    const moveHome = () => {
        navigation.navigate("Start");
    };

    return (
        <Modal visible={completed} transparent={true} animationType="slide">
            <View className="flex-1 justify-center items-center bg-white">
                <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
                <View className="items-center justify-center gap-6 h-screen">
                    <Image
                        source={GAME_DATA.gameResources.congrats}
                        className="w-96 h-96"
                    />
                    <View className="flex-row">
                        <Button
                            buttonBgColor="bg-red-400"
                            buttonSpace="py-1 px-2 mx-2"
                            textStyle="text-white text-2xl "
                            onPress={moveHome}
                        >
                            ほーむ
                        </Button>
                        <Button
                            buttonBgColor="bg-emerald-400"
                            buttonSpace="py-1 px-2 mx-2"
                            textStyle="text-white text-2xl "
                            onPress={restartButton}
                        >
                            もう いっかい
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default Congratulations;
