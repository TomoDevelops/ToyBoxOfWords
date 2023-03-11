import { Image, Pressable, Platform, useWindowDimensions } from "react-native";
import * as Animatable from "react-native-animatable";

import React from "react";
import LottieView from "lottie-react-native";
import GAME_DATA from "../../data/data";

const SingleCard = ({
    card,
    handleUserChoice,
    playCardSound,
    flipped,
    disabled,
}) => {
    const { width, height } = useWindowDimensions();
    let cardHeight = "20%";
    let cardWidth = "30%";

    if (width < 380) {
        cardWidth = "28%";
    }
    if (height < 700) {
        cardHeight = "20%";
    }

    const cardSize = {
        flexBasis: cardWidth,
        height: cardHeight,
    };

    const handlePress = () => {
        if (!disabled && !card.matched && !flipped) {
            handleUserChoice(card);
            playCardSound(card);
        }
    };
    return (
        <Pressable style={cardSize} onPress={handlePress}>
            <Animatable.View
                className="items-center justify-center bg-card-bg h-full w-full rounded-lg absolute top-0"
                style={{
                    overflow: Platform.OS === "android" ? "hidden" : "visible",
                }}
                animation={{
                    from: {
                        rotateY: "180deg",
                    },
                    to: {
                        rotateY: flipped ? "720deg" : "180deg",
                    },
                }}
                duration={500}
                useNativeDriver
            >
                <Image
                    source={card.src}
                    className="w-full h-full"
                    style={{ resizeMode: "contain" }}
                />
            </Animatable.View>
            <Animatable.View
                className="items-center justify-center bg-card-bg h-full w-full rounded-lg absolute"
                style={{
                    overflow: Platform.OS === "android" ? "hidden" : "visible",
                    backfaceVisibility: "hidden",
                }}
                animation={{
                    from: {
                        rotateY: "0deg",
                    },
                    to: {
                        rotateY: flipped ? "540deg" : "0deg",
                    },
                }}
                duration={500}
                useNativeDriver
            >
                <LottieView
                    autoPlay
                    speed={0.5}
                    source={GAME_DATA.gameResources.star}
                    className="w-full h-full"
                    style={{ resizeMode: "contain" }}
                />
            </Animatable.View>
        </Pressable>
    );
};

export default SingleCard;
