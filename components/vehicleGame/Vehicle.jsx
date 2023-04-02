import { TouchableWithoutFeedback, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
    cancelAnimation,
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import { Audio } from "expo-av";
import GAME_DATA from "../../data/data";

const Vehicle = ({ data, index, imageData }) => {
    const { width } = useWindowDimensions();
    const [paused, setPaused] = useState(false);
    const myAnimation = useSharedValue(width * 1.5);
    const endPos = useSharedValue(width * -1.5);

    const [sound, setSound] = useState();

    const playCardSound = async (index) => {
        const { sound } = await Audio.Sound.createAsync(
            GAME_DATA.vehicleGame[index].audio
        );
        setSound(sound);

        sound.playAsync();
    };

    useEffect(() => {
        myAnimation.value = withRepeat(
            withDelay(
                imageData.delay,
                withTiming(endPos.value, {
                    duration: imageData.duration,
                    easing: Easing.linear,
                })
            ),
            -1,
            undefined
        );

        return () => {
            cancelAnimation(myAnimation);
        };
    }, []);

    const horizontalAnimation = useAnimatedStyle(() => {
        return {
            left: paused ? "30%" : myAnimation.value,
        };
    });

    const handleImagePress = (index) => {
        setPaused((prevState) => !prevState);
        playCardSound(index);
        setTimeout(() => {
            setPaused((prevState) => !prevState);
        }, 3000);
    };

    return (
        <TouchableWithoutFeedback onPress={() => handleImagePress(index)}>
            <Animated.Image
                source={data.image}
                className={`${imageData.size}`}
                style={[
                    { position: "absolute", left: width },
                    imageData.yPosition,
                    horizontalAnimation,
                ]}
                resizeMode={data.id === "shinkansen" ? "contain" : "cover"}
            />
        </TouchableWithoutFeedback>
    );
};

export default Vehicle;
