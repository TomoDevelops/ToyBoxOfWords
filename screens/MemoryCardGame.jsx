import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { Audio } from "expo-av";

import React, { useState, useEffect } from "react";

import HeaderButtons from "../components/HeaderButtons";

import colors from "../constants/Colors";
import GAME_DATA from "../data/data";

import GameBoard from "../components/GameBoard";
import SingleCard from "../components/memoryGame/SingleCard";
import Title from "../components/Title";
import Button from "../components/Button";
import Congratulations from "../components/Congratulations";

const MemoryCardGame = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [completed, setCompleted] = useState(false);

    const [sound, setSound] = useState();

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            GAME_DATA.gameResources.goodJob
        );
        setSound(sound);

        await sound.playAsync();
    };

    const playCardSound = async (card) => {
        const { sound } = await Audio.Sound.createAsync(card.audio);
        setSound(sound);

        setTimeout(() => {
            sound.playAsync();
        }, 500);
    };

    const shuffleCards = () => {
        const shuffledCards = [
            ...GAME_DATA["memoryGame"],
            ...GAME_DATA["memoryGame"],
        ]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
        setCompleted(false);
        setCorrect(0);
    };

    const handleUserChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCorrect((prevCorrect) => prevCorrect + 1);
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
                if (correct === 5) {
                    setTimeout(() => {
                        playSound();
                        setCompleted(true);
                    }, 700);
                }
            } else {
                setTimeout(() => {
                    resetTurn();
                }, 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
        setDisabled(false);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <SafeAreaView
            className={`flex-1 items-center justify-between pb-8`}
            style={styles.rootContainer}
        >
            <HeaderButtons />
            <Title fontSize={30}>{"かーど を そろえよう"}</Title>
            <GameBoard
                completed={completed}
                gameBoardLayout="content-around flex-row flex-wrap justify-around w-11/12"
            >
                {cards.map((card) => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleUserChoice={handleUserChoice}
                        playCardSound={playCardSound}
                        flipped={
                            card === choiceOne ||
                            card === choiceTwo ||
                            card.matched
                        }
                        disabled={disabled}
                    />
                ))}
            </GameBoard>
            <Congratulations
                completed={completed}
                restartButton={shuffleCards}
            />
        </SafeAreaView>
    );
};

export default MemoryCardGame;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor:
            colors.gameBgColor[
                Math.floor(Math.random() * colors.gameBgColor.length)
            ],
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    playAgainButton: {
        flex: 1,
    },
});
