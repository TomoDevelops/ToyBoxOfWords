import { Pressable, Text, View } from "react-native";
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
        <View
            className={`overflow-hidden rounded-xl ${buttonBgColor} ${buttonSpace}`}
        >
            <Pressable
                className={`justify-center p-2 ${buttonStyle}`}
                android_ripple={{ color: "#aaaaaa80" }}
                onPress={onPress}
            >
                <Text className={`font-[kodomo] text-center ${textStyle}`}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
};

export default Button;
