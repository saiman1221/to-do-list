import React from 'react';
import '../styles/TasksBarTopSide.scss';

import {FilterTasksButton} from "./FilterTasksButton";
import {NewTaskButton} from "./NewTaskButton";

export const TasksBarTopSide = (props: any) => {
    const newTask = (taskData: any) => {
        props.newTaskFunction(taskData);
    }

    return (
        <div className={'TasksBarTopSide'}>
            <FilterTasksButton/>
            <NewTaskButton newTask={newTask}/>
        </div>
    );
};