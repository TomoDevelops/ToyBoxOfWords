import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

import { PagesContext } from "../../store/context/pages-context";

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

    return (
        <View className=" flex-row items-start justify-between mt-2 w-11/12">
            <Button
                buttonBgColor={`bg-white ${
                    Platform.OS === "android" ? "" : "shadow-sm"
                }`}
                buttonSpace={`px-7`}
                style={Platform.OS === "android" ? { elevation: 2 } : ""}
                onPress={toggleModal}
            >
                <Ionicons name="home" size={25} color="black" />
            </Button>

            <Button
                buttonSpace="px-7"
                buttonBgColor="bg-vibrant-blue border-[3px] border-white"
                onPress={shuffleGame}
            >
                <Entypo name="cycle" size={25} color="#fff" />
            </Button>
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
