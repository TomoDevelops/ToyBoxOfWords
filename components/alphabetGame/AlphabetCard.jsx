import React from "react";

import Button from "../shared/Button";

const AlphabetCard = ({ item, onPress }) => {
    return (
        <Button
            buttonBgColor="bg-green-500"
            buttonSpace="rounded-full justify-center items-center w-16 h-16 mx-3 "
            textStyle="text-white text-2xl font-archivo"
            onPress={() => onPress(item.alphabet, item.alphabetAudio)}
        >
            {item.alphabet}
        </Button>
    );
};

export default AlphabetCard;
