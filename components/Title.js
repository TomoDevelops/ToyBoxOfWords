import { Text, View, StyleSheet } from "react-native";
import React from "react";

const Title = ({ children, fontSize }) => {
    return (
        <View>
            <Text style={[styles.title, { fontSize: fontSize }]}>
                {children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "kodomo",
        marginBottom: 25,
    },
});

export default Title;
