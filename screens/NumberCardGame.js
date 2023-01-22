import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";
import React, { useContext } from "react";

import { PagesContext } from "../store/context/pages-context";
import Button from "../components/Button";
import HeaderButtons from "../components/HeaderButtons";

const NumberCardGame = ({ navigation }) => {
    const pagesContext = useContext(PagesContext);

    const shuffleGame = () => {
        pagesContext.shufflePage();
        navigation.navigate(pagesContext.pages);
    };

    return (
        <SafeAreaView style={styles.rootContainer}>
            <HeaderButtons />
            <Text>NumberCardGame</Text>
            <Button
                buttonStyle={styles.changeButton}
                textStyle={styles.changeButtonText}
                onPress={shuffleGame}
            >
                Test
            </Button>
        </SafeAreaView>
    );
};

export default NumberCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "#96fdfd",
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
