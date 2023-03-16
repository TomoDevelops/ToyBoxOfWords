import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";

const SingleCard = ({ alphabet }) => {
    const [sound, setSound] = useState();

    const playAlphabetSound = async (alphabetSound) => {
        const { sound } = await Audio.Sound.createAsync(alphabetSound);
        setSound(sound);

        setTimeout(() => {
            sound.playAsync();
        }, 500);
    };

    return (
        <Pressable
            className="justify-center items-center bg-white rounded-3xl py-5 gap-y-10"
            onPress={() => playAlphabetSound()}
        >
            <View className="flex-row">
                {alphabet.image.map((image) => (
                    <Image
                        source={image}
                        className="w-36 h-28"
                        style={{ resizeMode: "contain" }}
                    />
                ))}
            </View>
            <Text className="text-7xl">{alphabet.alphabet}</Text>
        </Pressable>
    );
};

export default SingleCard;
