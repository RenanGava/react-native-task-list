import React, { useState, BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import { StyleSheet, TouchableOpacity, View, NativeTouchEvent } from "react-native";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "../../../global";


interface OpenModalProps{
    setModalOpen: () => void
}


export function CreateTaskButton({ setModalOpen }:OpenModalProps){

    
    return(
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={style.Button}
            onPress={setModalOpen}
        >
            <View>
        	    <FontAwesomeIcon icon={faPlus} color={ theme.textIcons} size={23} />
            </View>
        </TouchableOpacity>
    )
}



const style = StyleSheet.create({
    Button:{
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 50,
        bottom: -25,
        backgroundColor: theme.button,

    }
})