import React, {useState} from 'react';
import '../styles/TasksBar.scss';

import {TasksBarTopSide} from "./TasksBarTopSide";
import {TasksContent} from "./TasksContent";

export const TasksBar = () => {
    const [tasksList, setTasksList] = useState([
        {
            'title': 'Задача 1',
            'description': 'Описание 1',
            'id': '1111',
            'date': '10.01.2003'
        },
        {
            'title': 'Задача 2',
            'description': 'Описание 2',
            'id': '2222',
            'date': '10.01.2003'
        },
        {
            'title': 'Задача 3',
            'description': 'Описание 3',
            'id': '3333',
            'date': '10.01.2003'
        },
    ])

    const newTaskFunction = (newTaskData: any) => {
        setTasksList([newTaskData, ...tasksList])
    }
    const deleteTaskFunction = (taskId: any) => {
        setTasksList(tasksList.filter((task: any) => task.id !== taskId))
    }
    const refactorTaskFunction = (taskData: any) => {
        deleteTaskFunction(taskData.id)
        newTaskFunction(taskData);
    }

    return (
        <div className={'TasksBar'}>
            <h1 className={'TasksBar__title'}>Tasks list</h1>
            <TasksBarTopSide newTaskFunction={newTaskFunction}/>
            <TasksContent tasksList={tasksList} deleteTaskFunction={deleteTaskFunction} refactorTaskFunction={refactorTaskFunction}/>
        </div>
    )
}