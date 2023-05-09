import { TouchableHighlight, Text, View } from "react-native";
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
            <TouchableHighlight
                className={`justify-center p-2 rounded-[4px] ${buttonStyle}`}
                activeOpacity={0.5}
                underlayColor="#aaaaaa80"
                onPress={onPress}
            >
                <Text className={`font-kodomo text-center ${textStyle}`}>
                    {children}
                </Text>
            </TouchableHighlight>
        </View>
    );
};

export default Button;
