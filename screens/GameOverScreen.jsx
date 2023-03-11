import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameOverScreen = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>GameOverScreen</Text>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});
