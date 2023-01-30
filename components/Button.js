import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const Button = ({
    children,
    onPress,
    buttonStyle,
    textStyle,
    buttonBgColor,
    buttonSpace,
}) => {
    return (
        <View style={[styles.buttonOuterContainer, buttonBgColor, buttonSpace]}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [
                              styles.buttonInnerContainer,
                              styles.pressed,
                              buttonStyle,
                          ]
                        : [styles.buttonInnerContainer, buttonStyle]
                }
                android_ripple={{ color: "#323232bf" }}
                onPress={onPress}
            >
                <Text style={[styles.buttonText, textStyle]}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        elevation: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        shadowColor: "#000",
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    buttonInnerContainer: {
        justifyContent: "center",
        padding: 6,
    },
    buttonText: {
        textAlign: "center",
    },
    pressed: {
        opacity: 0.5,
    },
});
