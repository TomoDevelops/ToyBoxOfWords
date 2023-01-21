import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShapeCardGame = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>ShapeCardGame</Text>
        </View>
    );
};

export default ShapeCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});
