import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

import { PagesContext } from "../store/context/pages-context";

import Button from "./Button";

const HeaderButtons = () => {
    const navigation = useNavigation();
    const moveHome = () => {
        navigation.navigate("Start");
    };

    const pagesContext = useContext(PagesContext);

    const shuffleGame = () => {
        pagesContext.shufflePage();
        navigation.navigate(pagesContext.pages);
    };

    return (
        <View style={styles.buttonsContainer}>
            <Button
                buttonBgColor={{ backgroundColor: "#fff" }}
                onPress={moveHome}
            >
                <Ionicons name="home" size={32} color="black" />
            </Button>
            <View style={styles.innerButtonsContainer}>
                <Button
                    buttonSpace={styles.buttonSpace}
                    buttonBgColor={{ backgroundColor: "#fff" }}
                    onPress={shuffleGame}
                >
                    <Entypo name="cycle" size={32} color="black" />
                </Button>
                <Button
                    buttonSpace={styles.buttonSpace}
                    buttonBgColor={{ backgroundColor: "#fff" }}
                >
                    <Entypo name="grid" size={32} color="black" />
                </Button>
            </View>
            <View style={styles.spacer}></View>
        </View>
    );
};

export default HeaderButtons;

const styles = StyleSheet.create({
    buttonsContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
        width: "90%",
    },
    innerButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "30%",
    },
    buttonSpace: {
        marginHorizontal: 6,
    },
    spacer: {
        height: 32,
        width: 32,
    },
});
