import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NumberCardGame = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>NumberCardGame</Text>
        </View>
    );
};

export default NumberCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});
