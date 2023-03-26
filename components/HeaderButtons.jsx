import { View, useWindowDimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

import { PagesContext } from "../store/context/pages-context";

import Button from "./Button";
import ConfirmationModal from "./ConfirmationModal";

const HeaderButtons = () => {
    const navigation = useNavigation();
    const moveHome = () => {
        navigation.navigate("Start");
        toggleModal();
    };
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible((prevState) => !prevState);
    };

    const pagesContext = useContext(PagesContext);

    const shuffleGame = () => {
        pagesContext.shufflePage();
    };

    useEffect(() => {
        navigation.navigate(pagesContext.pages);
    }, [pagesContext.pages]);

    const { width, height } = useWindowDimensions();
    let iconSize = 50;

    if (width < 380) {
        iconSize = 40;
    }
    if (height < 700) {
        iconSize = 40;
    }

    return (
        <View className="flex-1 flex-row items-start justify-between mt-2 w-11/12">
            <Button
                buttonBgColor={`bg-white ${
                    Platform.OS === "android" ? "" : "shadow-sm"
                }`}
                style={Platform.OS === "android" ? { elevation: 2 } : ""}
                onPress={toggleModal}
            >
                <Ionicons name="home" size={35} color="black" />
            </Button>
            <View className="flex-row justify-center w-1/3">
                <Button
                    buttonSpace="mx-[6px]"
                    buttonBgColor="bg-vibrant-blue border-[3px] border-white"
                    onPress={shuffleGame}
                >
                    <Entypo name="cycle" size={iconSize} color="#fff" />
                </Button>
                <Button
                    buttonSpace="mx-[6px]"
                    buttonBgColor="bg-vibrant-red border-[3px] border-white"
                >
                    <Entypo name="grid" size={iconSize} color="#fff" />
                </Button>
            </View>
            <View style={{ width: iconSize, height: iconSize }}></View>
            <ConfirmationModal
                msg="ほーむ に もどる?"
                confirmMsg="もどる"
                cancelMsg="もどらない"
                modalVisible={modalVisible}
                onCancel={toggleModal}
                onConfirm={moveHome}
                font="font-[kodomo]"
            />
        </View>
    );
};

export default HeaderButtons;
