import React from "react";
import { View } from "react-native";

const GameBoard = ({ children }) => {
    return (
        <View
            className="content-around flex-row flex-wrap justify-around w-11/12"
            style={{ flex: 6 }}
        >
            {children}
        </View>
    );
};

export default GameBoard;
