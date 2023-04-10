import React from 'react';
import '../styles/TasksContent.scss';
import {TaskItem} from "./TaskItem";

export const TasksContent = (props: any) => {
    const renderTasks = (tasksList: any) => {
        return tasksList.map((task: any) => <TaskItem task={task} deleteTask={deleteTask} refactorTask={refactorTask}/>)
    }
    const deleteTask = (taskId: string) => {
        props.deleteTaskFunction(taskId)
    }
    const refactorTask = (taskData: any) => {
        props.refactorTaskFunction(taskData);
    }

    return (
        <div className={'TasksContent'}>
            {renderTasks(props.tasksList)}
        </div>
    );
}