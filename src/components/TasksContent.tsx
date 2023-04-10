import React, {useEffect, useState} from 'react';
import '../styles/TasksContent.scss';
import {TaskItem} from "./TaskItem";

export const TasksContent = (props: any) => {
    const [test, setTest] = useState([]);

    const renderTasks = (tasksList: any) => {
        return tasksList.map((task: any) => <TaskItem task={task} deleteTask={deleteTask} refactorTask={refactorTask}/>)
    }
    const deleteTask = (taskId: string) => {
        props.deleteTaskFunction(taskId)
    }
    const refactorTask = (taskData: any) => {
        props.refactorTaskFunction(taskData);
    }

    useEffect(() => {
        setTest(props.tasksList);
    }, [props.tasksList])

    return (
        <div className={'TasksContent'}>
            {test.map((task: any) => <TaskItem task={task} deleteTask={deleteTask} refactorTask={refactorTask}/>)}
        </div>
    );
}