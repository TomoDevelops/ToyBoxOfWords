import {
    FlatList,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";

import React, { useEffect, useState } from "react";

import GAME_DATA from "../data/data";

import SingleCard from "../components/alphabetGame/SingleCard";
import GameBoard from "../components/shared/GameBoard";
import colors from "../constants/Colors";

import AlphabetCard from "../components/alphabetGame/AlphabetCard";

import { Audio } from "expo-av";
import HeaderButtons from "../components/shared/HeaderButtons";

const AlphabetCardGame = () => {
    const [currentAlphabet, setCurrentAlphabet] = useState("A");
    const [alphabetIndex, setAlphabetIndex] = useState(0);
    const [sound, setSound] = useState();

    const playAlphabetSound = async (audio) => {
        const { sound } = await Audio.Sound.createAsync(audio);
        setSound(sound);

        setTimeout(() => {
            sound.playAsync();
        }, 500);
    };

    useEffect(() => {
        setAlphabetIndex(
            GAME_DATA.alphabetGame.findIndex(
                (item) => item.alphabet === currentAlphabet
            )
        );
    }, [currentAlphabet]);

    const handleAlphabetCardPress = (char, audio) => {
        setCurrentAlphabet(char);
        playAlphabetSound(audio);
    };

    return (
        <SafeAreaView
            className="items-center justify-between"
            style={styles.rootContainer}
        >
            <HeaderButtons />
            <GameBoard gameBoardLayout="content-around justify-around w-11/12">
                <SingleCard
                    alphabet={GAME_DATA.alphabetGame[alphabetIndex]}
                    key={GAME_DATA.alphabetGame[alphabetIndex].id}
                />
                <View className="bg-slate-50 border-4 border-green-300 rounded-3xl w-full items-center px-3 py-4">
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={GAME_DATA.alphabetGame}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <AlphabetCard
                                item={item}
                                key={item.alphabet}
                                onPress={handleAlphabetCardPress}
                            />
                        )}
                    />
                </View>
            </GameBoard>
        </SafeAreaView>
    );
};

export default AlphabetCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor:
            colors.gameBgColor[
                Math.floor(Math.random() * colors.gameBgColor.length)
            ],
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
