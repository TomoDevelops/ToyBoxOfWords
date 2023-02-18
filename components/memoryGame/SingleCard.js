import { StyleSheet, Image, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";

import React from "react";

import colors from "../../constants/Colors";

const SingleCard = ({
    card,
    handleUserChoice,
    playCardSound,
    flipped,
    disabled,
}) => {
    const handlePress = () => {
        if (!disabled && !card.matched && !flipped) {
            handleUserChoice(card);
            playCardSound(card);
        }
    };
    return (
        <Pressable style={styles.card} onPress={handlePress}>
            <Animatable.View
                style={[styles.cardContainer, styles.cardFront]}
                animation={{
                    from: {
                        rotateY: "180deg",
                    },
                    to: {
                        rotateY: flipped ? "360deg" : "180deg",
                    },
                }}
                duration={500}
                useNativeDriver
            >
                <Image source={card.src} style={styles.cardImage} />
            </Animatable.View>
            <Animatable.View
                style={[styles.cardContainer, styles.cardBack]}
                animation={{
                    from: {
                        rotateY: "0deg",
                    },
                    to: {
                        rotateY: flipped ? "180deg" : "0deg",
                    },
                }}
                duration={500}
                useNativeDriver
            >
                <Image
                    source={require("../../assets/images/memoryGame/card-back.png")}
                    style={styles.cardImage}
                />
            </Animatable.View>
        </Pressable>
    );
};

export default SingleCard;

const styles = StyleSheet.create({
    card: {
        flexBasis: "30%",
        height: "20%",
    },
    cardContainer: {
        alignItems: "center",
        backgroundColor: colors.cardBgColor,
        borderWidth: 2,
        borderColor: "#505050",
        borderRadius: 8,
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    cardImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    cardFront: {
        position: "absolute",
        top: 0,
    },
    cardBack: {
        position: "absolute",
        backfaceVisibility: "hidden",
    },
});
