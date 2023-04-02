import React from "react";
import { View } from "react-native";

const GameBoard = ({ children, gameBoardLayout }) => {
    return (
        <View className={`${gameBoardLayout}`} style={{ flex: 6 }}>
            {children}
        </View>
    );
};

export default GameBoard;
