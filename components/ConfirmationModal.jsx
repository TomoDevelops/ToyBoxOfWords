import { View, Text, Modal } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Button from "./Button";

const ConfirmationModal = ({
    msg,
    confirmMsg,
    cancelMsg,
    modalVisible,
    onCancel,
    onConfirm,
}) => {
    return (
        <Modal visible={modalVisible} transparent={true} animationType="slide">
            <View className="flex-1 justify-center items-center bg-[#00000080]">
                <StatusBar
                    backgroundColor="#00000080"
                    barStyle="light-content"
                />
                <View className="items-center rounded-xl py-10 w-11/12 bg-white">
                    <Text className="text-3xl font-[kodomo] mb-8">{msg}</Text>
                    <View className="flex-row space-x-5">
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
