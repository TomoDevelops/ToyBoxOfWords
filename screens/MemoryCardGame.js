import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Button from "../components/Button";
import { PagesContext } from "../store/context/pages-context";

const MemoryCardGame = ({ navigation }) => {
    const pagesContext = useContext(PagesContext);

    const shuffleGame = () => {
        pagesContext.shufflePage();
        navigation.navigate("GameScreen");
    };

    return (
        <View style={styles.rootContainer}>
            <Text>MemoryCardGame</Text>
            <Button
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={shuffleGame}
            >
                Test
            </Button>
        </View>
    );
};

export default MemoryCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
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
