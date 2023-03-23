import React, { createContext, ReactNode, useContext, useState } from "react";




interface TaskProviderProps {
    children: ReactNode
}

interface TaskProps {
    id: number,
    title: string
    status: boolean
}

type CreateTask = Omit<TaskProps, "status" | "id">




interface TaskContextData {
    tasks: TaskProps[]
    createTask: (data: CreateTask) => void
    deleteTask: () => void
    changeStatusTask: () => void
}



const TaskContext = createContext({} as TaskContextData)



export function TaskProvider({ children }: TaskProviderProps) {

    const [tasks, setTask] = useState([
        {
            id: 1,
            title: "Task 1",
            status: false
        },
        {
            id: 2,
            title: "Task 2",
            status: false
        },
        {
            id: 3,
            title: "Task 3",
            status: false
        },
        
    ])

    // 
    function createTask({ title }: CreateTask) {

        let uuid = Math.floor(Math.random() * tasks.length)



        if (title === "") {
            console.log('Digite um titulo por favor');

            return
        }


        

        setTask(oldValues => [...oldValues, { id: uuid, status: false, title }])

        console.log(tasks);
        

        return
    }

    function deleteTask() {
        return
    }

    function changeStatusTask() {
        return
    }
    return (
        <TaskContext.Provider value={{ tasks, createTask, changeStatusTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}



export function useTasks() {
    return useContext(TaskContext)
}