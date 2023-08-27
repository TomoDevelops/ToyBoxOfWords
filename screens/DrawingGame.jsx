import React, { useContext, useEffect, useRef, useState } from "react";
import {
    Image,
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
import { PagesContext } from "../store/context/pages-context";

const colorPalette = ["#ffffff", "#ff0000", "#00FF00", "#0000FF", "#000000"];

const DrawingGame = () => {
    const [color, setColor] = useState("#ff0000");
    const [image, setImage] = useState();
    const canvasRef = useRef(null);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const pagesContext = useContext(PagesContext);

    useEffect(() => {
        canvasRef.current?.reset();
    }, []);

    useEffect(() => {
        canvasRef.current?.reset();
    }, [pagesContext.pages]);

    const saveImage = () => {
        setImage(canvasRef.current?.toImage());
        console.log(image);
    };

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
                style={{ flex: 0.75 }}
            >
                <Tooltip
                    height={80}
                    width={300}
                    visible={tooltipOpen}
                    onOpen={() => setTooltipOpen(true)}
                    onClose={() => setTooltipOpen(false)}
                    containerStyle={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    popover={colorPalette.map((palette) => (
                        <Svg height="50" width="50" key={palette}>
                            <Circle
                                cx="25"
                                cy="25"
                                r="20"
                                stroke="#fff"
                                strokeWidth="1"
                                fill={palette}
                                onPress={() => {
                                    setColor(palette);
                                    setTooltipOpen(false);
                                }}
                            />
                        </Svg>
                    ))}
                >
                    <Svg height="50" width="50">
                        <Circle
                            cx="25"
                            cy="25"
                            r="20"
                            stroke="#000"
                            strokeWidth="2"
                            fill={color}
                        />
                    </Svg>
                </Tooltip>
                <Button
                    onPress={() => canvasRef.current?.reset()}
                    buttonBgColor="bg-green-500"
                    buttonStyle="px-4"
                    textStyle="text-white text-lg"
                >
                    やりなおし
                </Button>
                <Button
                    onPress={() => saveImage()}
                    buttonBgColor="bg-green-500"
                    buttonStyle="px-4"
                    textStyle="text-white text-lg"
                >
                    Save
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
    f: {
        flex: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
