import { StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import GAME_DATA from "../data/data";

const GameBoard = ({ children, completed }) => {
    return (
        <View style={styles.rootContainer}>
            {children}
            {completed && (
                <>
                    <LottieView
                        autoPlay
                        source={GAME_DATA.gameResources.confetti}
                        style={{
                            transform: [{ rotate: "15deg" }],
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <LottieView
                        autoPlay
                        source={GAME_DATA.gameResources.confetti}
                        style={{
                            transform: [{ rotate: "75deg" }],
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <LottieView
                        autoPlay
                        source={GAME_DATA.gameResources.confetti}
                        style={{
                            transform: [{ rotate: "105deg" }],
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <LottieView
                        autoPlay
                        source={GAME_DATA.gameResources.confetti}
                        style={{
                            transform: [{ rotate: "165deg" }],
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </>
            )}
        </View>
    );
};

export default GameBoard;

const styles = StyleSheet.create({
    rootContainer: {
        alignContent: "space-around",
        flex: 6,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "90%",
    },
    confettiGif: {
        position: "absolute",
        top: -50,
        width: "100%",
    },
});
