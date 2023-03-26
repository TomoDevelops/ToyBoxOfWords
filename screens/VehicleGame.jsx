import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
} from "react-native";
import GameBoard from "../components/GameBoard";
import HeaderButtons from "../components/HeaderButtons";
import Title from "../components/Title";
import colors from "../constants/Colors";

import GAME_DATA from "../data/data";

const VehicleGame = () => {
    return (
        <SafeAreaView
            className={`flex-1 items-center justify-between pb-8`}
            style={styles.rootContainer}
        >
            <HeaderButtons />
            <Title fontSize={30}>{"のりもの を さわろう"}</Title>
            <GameBoard gameBoardLayout="w-full bg-slate-500">
                <ScrollView>
                    {GAME_DATA.vehicleGame.map((data) => (
                        <Image
                            source={data.image}
                            key={data.id}
                            className={data.size}
                        />
                    ))}
                </ScrollView>
            </GameBoard>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor:
            colors.gameBgColor[
                Math.floor(Math.random() * colors.gameBgColor.length)
            ],
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default VehicleGame;
