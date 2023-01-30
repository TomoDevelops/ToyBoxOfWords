import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";

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
                    buttonBgColor={{ backgroundColor: "#fff" }}
                    onPress={moveToGameScreen}
                >
                    あそぶ
                </Button>
                <Button
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    buttonBgColor={{ backgroundColor: "#fff" }}
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
        width: "85%",
    },
    button: {
        height: 85,
        width: 150,
    },
    buttonText: {
        fontFamily: "kodomo",
        fontSize: 32,
    },
});
