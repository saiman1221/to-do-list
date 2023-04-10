import React, {useEffect, useState} from 'react';
import '../styles/TasksBar.scss';

import {TasksBarTopSide} from "./TasksBarTopSide";
import {TasksContent} from "./TasksContent";

export const TasksBar = () => {
    JSON.parse(localStorage.getItem('tasks')!).length ? console.log('wdad') : localStorage.setItem('tasks', JSON.stringify([]));
    const [tasksList, setTasksList] = useState(JSON.parse(localStorage.getItem('tasks')!))

    const newTaskFunction = (newTaskData: any) => {
        filterTasksFunction('default')
        const oldTasks = JSON.parse(localStorage.getItem('tasks')!);
        oldTasks.unshift(newTaskData);
        localStorage.setItem('tasks', JSON.stringify(oldTasks));
        const newTasks = JSON.parse(localStorage.getItem('tasks')!);
        setTasksList(newTasks);
    }
    const deleteTaskFunction = (taskId: any) => {
        const oldTasks = JSON.parse(localStorage.getItem('tasks')!);
        localStorage.setItem('tasks', JSON.stringify(oldTasks.filter((task: any) => task.id !== taskId)));
        const newTasks = JSON.parse(localStorage.getItem('tasks')!);
        setTasksList(newTasks);
    }
    const refactorTaskFunction = (taskData: any) => {
        deleteTaskFunction(taskData.id)
        newTaskFunction(taskData);
    }

    const filterTasksFunction = (filterType: any) => {
        let oldTasks = JSON.parse(localStorage.getItem('tasks')!);
        switch (filterType) {
            case 'filter_new':
                setTasksList(oldTasks.sort(sortTasksByNew));
                break;
            case 'filter_old':
                setTasksList(oldTasks.sort(sortTasksByOld));
                break;
            case 'filter_alphabet':
                setTasksList(oldTasks.sort(sortTasksByAlphabet));
                break;
            case 'filter_alphabet_reverse':
                setTasksList(oldTasks.sort(sortTasksByAlphabetReverse));
                break;
            default:
                setTasksList(oldTasks);
                break;
        }
    }
    const sortTasksByNew = (a: any, b: any) => {
        if (a.date < b.date) {return 1;}
        if (a.date > b.date) {return -1;}
        return 0;
    }
    const sortTasksByOld = (a: any, b: any) => {
        if (a.date < b.date) {return -1;}
        if (a.date > b.date) {return 1;}
        return 0;
    }
    const sortTasksByAlphabet = (a: any, b: any) => {
        if (a.title < b.title) {return -1;}
        if (a.title > b.title) {return 1;}
        return 0;
    }
    const sortTasksByAlphabetReverse = (a: any, b: any) => {
        if (a.title < b.title) {return 1;}
        if (a.title > b.title) {return -1;}
        return 0;
    }

    return (
        <div className={'TasksBar'}>
            <h1 className={'TasksBar__title'}>Tasks list</h1>
            <TasksBarTopSide newTaskFunction={newTaskFunction} filterTasksFunction={filterTasksFunction}/>
            <TasksContent tasksList={tasksList} deleteTaskFunction={deleteTaskFunction} refactorTaskFunction={refactorTaskFunction}/>
        </div>
    )
}