import { View, Text, Image, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";

const SingleCard = ({ alphabet }) => {
    const [sound, setSound] = useState();

    const playAlphabetSound = async (audioFile) => {
        const { sound } = await Audio.Sound.createAsync(audioFile);
        setSound(sound);

        setTimeout(() => {
            sound.playAsync();
        }, 400);
    };

    return (
        <Pressable
            className={`justify-center items-center bg-white rounded-3xl py-5 gap-y-10 ${
                Platform.OS === "android" ? "" : "shadow-sm"
            }`}
            style={Platform.OS === "android" ? { elevation: 3 } : ""}
            onPress={() => playAlphabetSound(alphabet.alphabetAudio)}
        >
            <View className="flex-row">
                {alphabet.image.map((image, index) => (
                    <Pressable
                        key={index}
                        onPress={() => playAlphabetSound(alphabet.audio[index])}
                    >
                        <Image
                            source={image}
                            className="w-36 h-28"
                            style={{ resizeMode: "contain" }}
                        />
                    </Pressable>
                ))}
            </View>
            <Text className="text-7xl">{alphabet.alphabet}</Text>
        </Pressable>
    );
};

export default SingleCard;
