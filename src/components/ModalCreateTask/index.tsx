import React, { useState } from "react";
import { Modal, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { theme } from "../../../global";
import { useTasks } from "../../contexts/ContextTasks";

interface TaskModalProps {
    isOpen: boolean
    onRequestClose: () => void
}


export function TaskModal({ isOpen, onRequestClose }: TaskModalProps) {


    const { createTask } = useTasks()
    const [titleTask, setTitleTask] = useState('')

    function handleCreateTask() {

        createTask({ title: titleTask })
        setTitleTask('')
        onRequestClose()
    }


    return (
        <Modal
            visible={isOpen}
            transparent={true}
            animationType="fade"
            onRequestClose={onRequestClose}

        >
            <View style={style.Modal}>
                <View style={style.ModalContent}>
                    <TouchableOpacity
                        onPress={onRequestClose}
                        style={style.close}
                    >
                        <Text style={style.text}>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={style.TextInput}
                        placeholder="Titulo da Task"
                        onChangeText={e => setTitleTask(e)}
                    />
                    <TouchableOpacity
                        onPress={handleCreateTask}
                        style={style.submitButton}

                    >
                        <Text style={style.textButton}>
                            Criar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}



const style = StyleSheet.create({
    Modal: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        flex: 1

    },
    ModalContent: {
        margin: 10,
        backgroundColor: theme.textIcons,
        borderRadius: 10,
        height: 200,
        padding: 5,
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: "black",
        borderColor: theme.background,
        shadowOpacity: 5,
        shadowRadius: 8,
        elevation: 150,
        top: 200,
    },
    TextInput: {
        width: 200,
        height: 40,
        lineHeight: 40,
        fontSize: 18,
        borderRadius: 6,
        padding: 10,
        textAlign: "center",
        borderColor: theme.background,
        borderWidth: 1,
    },
    submitButton:{
        width: 150,
        height: 40,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: theme.button
    },
    close:{
        position: "absolute",
        top: 5,
        right: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    text:{
        fontSize: 30,
        color: theme.background,
        fontWeight: "bold"
    },
    textButton:{
        textAlign: "center",
        lineHeight: 40,
        fontWeight: "bold",
        fontSize: 18,
        color: theme.textIcons
       
    }
})