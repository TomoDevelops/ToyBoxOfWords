import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { Audio } from "expo-av";

import React, { useState, useEffect } from "react";

import HeaderButtons from "../components/HeaderButtons";

import colors from "../constants/Colors";
import GAME_DATA from "../data/data";

import GameBoard from "../components/GameBoard";
import SingleCard from "../components/memory_game/SingleCard";
import Title from "../components/Title";
import Button from "../components/Button";

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
            GAME_DATA.game_resources.goodJob
        );
        setSound(sound);

        await sound.playAsync();
    };

    const shuffleCards = () => {
        const shuffledCards = [
            ...GAME_DATA["memory-game"],
            ...GAME_DATA["memory-game"],
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
        <SafeAreaView style={styles.rootContainer}>
            <HeaderButtons />
            <Title fontSize={30}>{"かーど を そろえよう"}</Title>
            <GameBoard completed={completed}>
                {cards.map((card) => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleUserChoice={handleUserChoice}
                        flipped={
                            card === choiceOne ||
                            card === choiceTwo ||
                            card.matched
                        }
                        disabled={disabled}
                    />
                ))}
            </GameBoard>
            {completed && (
                <Button
                    style={styles.playAgainButton}
                    buttonBgColor={{ backgroundColor: "#00a0fc" }}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.buttonText}
                    onPress={shuffleCards}
                >
                    もう いっかい
                </Button>
            )}
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
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 32,
    },
    homeButton: {
        height: 75,
        width: 75,
    },
    changeButton: {
        height: 75,
        width: 145,
    },
    changeButtonText: {
        fontFamily: "kodomo",
        fontSize: 28,
    },
    image: {
        height: 500,
        width: "75%",
    },
    playAgainButton: {
        flex: 1,
    },
    buttonStyle: {
        height: 70,
        width: 250,
    },
    buttonText: {
        fontSize: 24,
    },
});
