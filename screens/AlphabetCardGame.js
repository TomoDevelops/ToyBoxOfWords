import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    Platform,
} from "react-native";

import React from "react";

import HeaderButtons from "../components/HeaderButtons";

import colors from "../constants/Colors";

const AlphabetCardGame = () => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <HeaderButtons />
            <Text>AlphabetCardGame</Text>
        </SafeAreaView>
    );
};

export default AlphabetCardGame;

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
    homeButton: {
        height: 75,
        width: 75,
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
