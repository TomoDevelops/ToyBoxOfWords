import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

import GameBoard from "../components/shared/GameBoard";
import HeaderButtons from "../components/shared/HeaderButtons";
import Title from "../components/shared/Title";
import Vehicle from "../components/vehicleGame/Vehicle";
import colors from "../constants/Colors";

import GAME_DATA from "../data/data";

const imageData = {
    airplane: {
        size: "w-44 h-20",
        delay: 0,
        yPosition: { top: 0 },
        duration: 7000,
    },
    shinkansen: {
        size: "w-[150%] h-12",
        delay: 3000,
        yPosition: { top: 80 },
        duration: 9000,
    },
    bicycle: {
        size: "w-36 h-28",
        delay: 0,
        yPosition: { bottom: 0 },
        duration: 30000,
    },
    car: {
        size: "w-44 h-20",
        delay: 1000,
        yPosition: { bottom: 100 },
        duration: 20000,
    },
    policecar: {
        size: "w-52 h-20",
        delay: 5000,
        yPosition: { bottom: 100 },
        duration: 20000,
    },
    bus: {
        size: "w-52 h-20",
        delay: 10000,
        yPosition: { bottom: 100 },
        duration: 20000,
    },
    ambulance: {
        size: "w-36 h-20",
        delay: 15000,
        yPosition: { bottom: 100 },
        duration: 20000,
    },
    excavator: {
        size: "w-44 h-36",
        delay: 3000,
        yPosition: { bottom: 175 },
        duration: 17000,
    },
    firetruck: {
        size: "w-52 h-28",
        delay: 2000,
        yPosition: { bottom: 300 },
        duration: 15000,
    },
    truck: {
        size: "w-60 h-20",
        delay: 6000,
        yPosition: { bottom: 300 },
        duration: 15000,
    },
    garbagetruck: {
        size: "w-52 h-28",
        delay: 11000,
        yPosition: { bottom: 300 },
        duration: 15000,
    },
};

const VehicleGame = () => {
    return (
        <SafeAreaView
            className={`flex-1 items-center justify-between pb-8`}
            style={styles.rootContainer}
        >
            <HeaderButtons />
            <Title fontSize={30}>{"のりもの を さわろう"}</Title>
            <GameBoard gameBoardLayout="w-full">
                {GAME_DATA.vehicleGame.map((data, index) => (
                    <Vehicle
                        key={data.id}
                        data={data}
                        index={index}
                        imageData={imageData[data.id]}
                    />
                ))}
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
