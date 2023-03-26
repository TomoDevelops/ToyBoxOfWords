import { Pressable, Text, View } from "react-native";
import React from "react";

const Button = ({
    children,
    onPress,
    buttonStyle,
    textStyle,
    buttonBgColor,
    buttonSpace,
    style,
}) => {
    return (
        <Pressable
            className={`overflow-hidden rounded-xl ${buttonBgColor} ${buttonSpace}`}
            style={style}
            onPress={onPress}
        >
            <View className={`justify-center items-center p-2 ${buttonStyle}`}>
                <Text className={`font-[kodomo] text-center ${textStyle}`}>
                    {children}
                </Text>
            </View>
        </Pressable>
    );
};

export default Button;
