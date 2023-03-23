import React, { useState } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { theme } from "../../../global";
import { CreateTaskButton } from "../CreateTaskButton";
import { TaskModal } from "../ModalCreateTask";


export function Header() {

    const [modalOpen, setModalOpen] = useState<boolean>(false)


    return (
        <View style={style.container}>
            <View style={style.textCenter}>
                <Text style={style.title}>
                    Tasks
                </Text>
            </View>

            <CreateTaskButton
                setModalOpen={() => setModalOpen(!modalOpen)}
            />

            <TaskModal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(!modalOpen)}
            />
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        display: "flex",
        height: 200,
        borderBottomColor: theme.lineDivisor,
        borderBottomWidth: 2,
    },
    textCenter: {
        justifyContent: "center",
        alignItems: "center",
        height: 200
    },
    title: {
        fontSize: 40,
        color: theme.textIcons,
        display: "flex",
        fontWeight: "bold",
        fontStyle: "italic"
    }
})