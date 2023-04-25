import React, { useEffect, useRef, useState } from "react";
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import { SketchCanvas } from "rn-perfect-sketch-canvas";
import { Tooltip } from "@rneui/themed";
import Svg, { Circle } from "react-native-svg";

import GameBoard from "../components/shared/GameBoard";
import HeaderButtons from "../components/shared/HeaderButtons";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import colors from "../constants/Colors";
import { Text } from "react-native";

const DrawingGame = () => {
    const [color, setColor] = useState("#ff0000");
    const canvasRef = useRef(null);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    useEffect(() => {
        canvasRef.current?.reset();

        return () => {
            canvasRef.current?.reset();
        };
    }, []);

    return (
        <SafeAreaView
            className={`flex-1 items-center justify-between`}
            style={styles.rootContainer}
        >
            <HeaderButtons />
            <Title fontSize={30}>{"おえかき を しよう"}</Title>

            <GameBoard gameBoardLayout="bg-white border-2 w-[99%] h-full">
                <SketchCanvas
                    containerStyle={{
                        width: "100%",
                        height: "100%",
                    }}
                    ref={canvasRef}
                    strokeColor={color}
                    strokeWidth={8}
                />
            </GameBoard>

            <View
                className="w-full flex-row my-4 items-center justify-around"
                style={{ flex: 0.4 }}
            >
                <Tooltip
                    visible={tooltipOpen}
                    onOpen={() => setTooltipOpen(true)}
                    onClose={() => setTooltipOpen(false)}
                    popover={
                        <Text style={{ color: "#fff" }}>Tooltip text</Text>
                    }
                >
                    <Svg height="50" width="50">
                        <Circle
                            cx="25"
                            cy="25"
                            r="25"
                            stroke="#fff"
                            stroke-width="5"
                            fill={color}
                        />
                    </Svg>
                </Tooltip>
                <Button onPress={() => canvasRef.current?.reset()}>
                    やりなおし
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default DrawingGame;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor:
            colors.gameBgColor[
                Math.floor(Math.random() * colors.gameBgColor.length)
            ],
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
