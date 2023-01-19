import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import React from "react";

import GAME_DATA from "../data/data";
import Button from "../components/Button";

const StartScreen = () => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <Image
                source={GAME_DATA.game_resources.welcome}
                style={styles.image}
            />
            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                >
                    あそぶ
                </Button>
                <Button
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                >
                    せってい
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 200,
        width: "100%",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        width: "80%",
    },
    button: {
        height: 75,
        width: 145,
    },
    buttonText: {
        fontFamily: "kodomo",
        fontSize: 28,
    },
});
