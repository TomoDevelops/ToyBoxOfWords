import { Text, View, StyleSheet } from "react-native";
import React from "react";

const Title = ({ children, fontSize }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={[styles.title, { fontSize: fontSize }]}>
                {children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 0.5,
        alignContent: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "kodomo",
    },
});

export default Title;
