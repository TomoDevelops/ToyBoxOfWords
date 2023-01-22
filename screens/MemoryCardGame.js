import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    Platform,
} from "react-native";

import React, { useContext } from "react";

import Button from "../components/Button";
import { PagesContext } from "../store/context/pages-context";
import HeaderButtons from "../components/HeaderButtons";

const MemoryCardGame = ({ navigation }) => {
    const pagesContext = useContext(PagesContext);

    const shuffleGame = () => {
        pagesContext.shufflePage();
        navigation.navigate(pagesContext.pages);
    };

    return (
        <SafeAreaView style={styles.rootContainer}>
            <HeaderButtons />
            <Text>MemoryCardGame</Text>
            <Button
                buttonStyle={styles.changeButton}
                textStyle={styles.changeButtonText}
                buttonBgColor={{ backgroundColor: "transparent" }}
                onPress={shuffleGame}
            >
                Test
            </Button>
        </SafeAreaView>
    );
};

export default MemoryCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "#fcfc4b",
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
