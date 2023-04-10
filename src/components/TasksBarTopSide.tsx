import React from 'react';
import '../styles/TasksBarTopSide.scss';

import {FilterTasksButton} from "./FilterTasksButton";
import {NewTaskButton} from "./NewTaskButton";

export const TasksBarTopSide = (props: any) => {
    const newTask = (taskData: any) => {
        props.newTaskFunction(taskData);
    }

    const filterTasks = (filterTypes: any) => {
        props.filterTasksFunction(filterTypes)
    }

    return (
        <div className={'TasksBarTopSide'}>
            <FilterTasksButton filterTasks={filterTasks}/>
            <NewTaskButton newTask={newTask}/>
        </div>
    );
};