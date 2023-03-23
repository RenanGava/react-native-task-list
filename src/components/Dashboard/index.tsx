import React from 'react'
import { FlatList, ScrollView, StyleSheet} from 'react-native'
import { useTasks } from '../../contexts/ContextTasks'
import { ListTask } from '../TaskList'

export function Dashboard(): JSX.Element {


    const { tasks} = useTasks()

    

    return (

        // o ScrollView deve ter uma altura definida para funcionar corretamente
        <ScrollView style={style.Container} >

            <FlatList
                data={tasks}

                renderItem={({item, index}) => (
                    <ListTask 
                    key={index}
                    id={item.id} 
                    title={item.title} 
                    status={item.status}/>
                )}
                scrollEnabled={false} // para evitar o erro de virtualização
            />

        </ScrollView>
    )
}



const style = StyleSheet.create({
    Container: {
        paddingBottom: 70,
        height: 535
    }
})