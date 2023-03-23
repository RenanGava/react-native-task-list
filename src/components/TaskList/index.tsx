import React, { useState } from 'react'
import { View, Text, StyleSheet,  } from 'react-native'
import CheckBox from 'react-native-bouncy-checkbox'
import { theme } from '../../../global'


interface ListTaskProps {
    id: number
    title: string
    status: boolean
}

export function ListTask({ id, title, status }: ListTaskProps) {

    const [isChecked, setIsChecked] = useState<boolean>()

    return (
        <View style={styled.TaskContainer} key={id}>
            <CheckBox 
                fillColor={theme.button} 
                isChecked={status}
                // onPress={ e => console.log(e)}
            />
            <Text style={styled.Text}>{title}</Text>
        </View>
    )
}


const styled = StyleSheet.create({
    TaskContainer:{
        flexGrow: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
        flex: 1,
        marginLeft: 20,
        marginVertical: 10,
    },
    Text:{
        fontWeight: 'bold',
        fontSize: 16.5,
        fontStyle: 'italic'
    }
})