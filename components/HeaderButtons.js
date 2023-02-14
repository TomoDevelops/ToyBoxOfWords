import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";
import LottieView from "lottie-react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { PagesContext } from "../store/context/pages-context";

import Button from "./Button";
import colors from "../constants/Colors";

const HeaderButtons = () => {
    const navigation = useNavigation();
    const moveHome = () => {
        navigation.navigate("Start");
    };

    const pagesContext = useContext(PagesContext);

    const shuffleGame = () => {
        pagesContext.shufflePage();
    };

    useEffect(() => {
        navigation.navigate(pagesContext.pages);
    }, [pagesContext.pages]);

    return (
        <View style={styles.buttonsContainer}>
            <Button
                buttonBgColor={{ backgroundColor: "#fff" }}
                onPress={moveHome}
            >
                <LottieView
                    autoPlay
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "transparent",
                    }}
                    source={require("../assets/images/system/home.json")}
                />
                {/* <Ionicons name="home" size={30} color="black" /> */}
            </Button>
            <View style={styles.innerButtonsContainer}>
                <Button
                    buttonSpace={styles.buttonSpace}
                    buttonBgColor={{
                        backgroundColor: colors.vaibrantBlue,
                        borderWidth: 3,
                        borderColor: "#fff",
                    }}
                    onPress={shuffleGame}
                >
                    <Entypo name="cycle" size={50} color="#fff" />
                </Button>
                <Button
                    buttonSpace={styles.buttonSpace}
                    buttonBgColor={{
                        backgroundColor: colors.vaibrantRed,
                        borderWidth: 3,
                        borderColor: "#fff",
                    }}
                >
                    <Entypo name="grid" size={50} color="#fff" />
                </Button>
            </View>
            <View style={styles.spacer}></View>
        </View>
    );
};

export default HeaderButtons;

const styles = StyleSheet.create({
    buttonsContainer: {
        alignItems: "flex-start",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        width: "95%",
    },
    innerButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "30%",
    },
    buttonSpace: {
        marginHorizontal: 6,
    },
    spacer: {
        height: 30,
        width: 30,
    },
});
