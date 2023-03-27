import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Pressable,
} from "react-native";
import * as Animatable from "react-native-animatable";

import GameBoard from "../components/GameBoard";
import HeaderButtons from "../components/HeaderButtons";
import Title from "../components/Title";
import colors from "../constants/Colors";

import GAME_DATA from "../data/data";

const imageSize = {
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

const VehicleGame = ({ navigation }) => {
    const [offScreen, setOffScreen] = useState(400);
    const [rerenderKey, setRerenderKey] = useState(Date.now());
    const [animationPaused, setAnimationPaused] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            setOffScreen(400);
            setRerenderKey(Date.now());
        });

        return unsubscribe;
    }, [navigation]);

    const handleImagePress = () => {
        console.log("Image Pressed");

        setTimeout(() => {
            setAnimationPaused(false);
        }, 5000);
    };

    return (
        <SafeAreaView
            className={`flex-1 items-center justify-between pb-8`}
            style={styles.rootContainer}
        >
            <HeaderButtons />
            <Title fontSize={30}>{"のりもの を さわろう"}</Title>
            <GameBoard gameBoardLayout="w-full bg-slate-500">
                {GAME_DATA.vehicleGame.map((data) => (
                    <Pressable
                        onPress={handleImagePress}
                        key={`${data.id}-${rerenderKey}`}
                        className={`${imageSize[data.id].size}`}
                        style={[
                            {
                                position: "absolute",
                            },
                            imageSize[data.id].yPosition,
                        ]}
                    >
                        <Animatable.Image
                            source={data.image}
                            style={[
                                {
                                    flex: 1,
                                    width: "100%",
                                    height: "100%",
                                },
                            ]}
                            resizeMode={
                                data.id === "shinkansen" ? "contain" : "cover"
                            }
                            animation={{
                                from: {
                                    transform: [{ translateX: offScreen }],
                                },
                                to: {
                                    transform: [{ translateX: -600 }],
                                },
                            }}
                            iterationCount={"infinite"}
                            paused={animationPaused}
                            duration={imageSize[data.id].duration}
                            delay={imageSize[data.id].delay}
                            easing="linear"
                            useNativeDriver={true}
                        />
                    </Pressable>
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
