import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import React, { useContext, useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    useWindowDimensions,
    Vibration,
    View,
} from "react-native";

import Button from "../components/shared/Button";
import ConfirmationModal from "../components/shared/ConfirmationModal";
import GAME_DATA from "../data/data";
import { PagesContext } from "../store/context/pages-context";

const StartScreen = ({ navigation }) => {
    const pagesContext = useContext(PagesContext);
    const isFocused = useIsFocused();
    const [modalVisible, setModalVisible] = useState(false);
    const [guardianText, setGuardianText] = useState("");
    const [incorrect, setIncorrect] = useState(false);

    const vibrate = () => {
        Vibration.vibrate([500]);
    };

    const toggleModal = () => {
        setModalVisible((prevState) => !prevState);
        setGuardianText("");
        setIncorrect(false);
    };

    useEffect(() => {
        if (isFocused) {
            pagesContext.shuffleGamePages();
        }
    }, [isFocused]);

    const moveToGameScreen = () => {
        pagesContext.shufflePage();
        navigation.navigate(pagesContext.pages);
    };

    const moveToPurchaseScreen = () => {
        navigation.navigate("ゲーム購入");
    };

    const { width, height } = useWindowDimensions();
    let buttonContainerWidth = "85%";

    if (width < 380) {
        buttonContainerWidth = "90%";
    }
    if (height < 700) {
        buttonContainerWidth = "90%";
    }

    const checkGuardianText = () => {
        if (guardianText === "パスワード" || guardianText === "ぱすわーど") {
            setGuardianText("");
            setIncorrect(false);
            navigation.navigate("設定");
            toggleModal();
        } else {
            vibrate();
            setIncorrect(true);
        }
    };

    return (
        <LinearGradient colors={["#61c5ff", "#a0fff4"]} className="flex-1">
            <SafeAreaView className="flex-1 items-center justify-center">
                <LottieView
                    autoPlay
                    source={GAME_DATA.gameResources.robot}
                    className="h-80 w-52"
                />
                <View
                    className="flex-row justify-between mt-6 mb-5"
                    style={{ width: buttonContainerWidth }}
                >
                    <Button
                        buttonStyle="h-20 w-36"
                        textStyle="text-white text-3xl"
                        buttonBgColor="bg-[#ffac3e] border-[3px] border-white"
                        onPress={moveToGameScreen}
                    >
                        あそぶ
                    </Button>

                    <Button
                        buttonStyle="h-20 w-36"
                        textStyle="text-white text-3xl"
                        buttonBgColor="bg-[#49e683] border-[3px] border-white"
                        onPress={toggleModal}
                    >
                        せってい
                    </Button>
                </View>
                <ConfirmationModal
                    msg={`これ以降は、${"\n"}保護者の方が操作してください。`}
                    confirmMsg="次へ"
                    cancelMsg="キャンセル"
                    modalVisible={modalVisible}
                    onConfirm={checkGuardianText}
                    onCancel={toggleModal}
                    font="text-base text-center"
                >
                    <View>
                        <Text className="text-base">
                            ↓"パスワード"と入力してください↓
                        </Text>
                        <TextInput
                            className={`border-2 my-2 p-1 ${
                                incorrect ? "border-red-700" : "border-black"
                            }`}
                            value={guardianText}
                            onChangeText={(text) => setGuardianText(text)}
                        ></TextInput>
                    </View>
                </ConfirmationModal>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default StartScreen;
