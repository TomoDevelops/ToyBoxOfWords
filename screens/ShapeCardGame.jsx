import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";
import React from "react";

import HeaderButtons from "../components/HeaderButtons";

import colors from "../constants/Colors";

const ShapeCardGame = () => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <HeaderButtons />
            <Text>ShapeCardGame</Text>
        </SafeAreaView>
    );
};

export default ShapeCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor:
            colors.gameBgColor[
                Math.floor(Math.random() * colors.gameBgColor.length)
            ],
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    changeButton: {
        height: 75,
        width: 145,
    },
    changeButtonText: {
        fontFamily: "kodomo",
        fontSize: 28,
    },
});
