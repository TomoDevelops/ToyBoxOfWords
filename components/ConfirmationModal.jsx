import { View, Text, Modal } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Button from "./Button";

const ConfirmationModal = ({
    children,
    msg,
    confirmMsg,
    cancelMsg,
    modalVisible,
    onCancel,
    onConfirm,
    font,
}) => {
    return (
        <Modal visible={modalVisible} transparent={true} animationType="slide">
            <View className="flex-1 justify-center items-center bg-[#00000040]">
                <StatusBar
                    backgroundColor="#00000040"
                    barStyle="light-content"
                />
                <View className="items-center justify-around rounded-xl py-7 px-3 w-11/12 bg-white">
                    <Text className={`text-3xl my-3 ${font}`}>{msg}</Text>
                    {children}
                    <View className="flex-row space-x-5 my-3">
                        <Button
                            buttonBgColor="bg-red-400"
                            buttonSpace="py-2 px-3 mx-3"
                            textStyle="text-white text-xl"
                            onPress={onCancel}
                        >
                            {cancelMsg}
                        </Button>
                        <Button
                            buttonBgColor="bg-emerald-400"
                            buttonSpace="py-2 px-3 mx-3"
                            textStyle="text-white text-xl"
                            onPress={onConfirm}
                        >
                            {confirmMsg}
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationModal;
