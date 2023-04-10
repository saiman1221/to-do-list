import React, {useState} from 'react';
import '../styles/NewTaskButton.scss';
import {RefactorTaskWindow} from "./RefactorTaskWindow";
import {v4 as uuid} from 'uuid'

export const NewTaskButton = (props: any) => {
    const newTaskImg: string = require("../assets/tasks-list/new-task.svg").default;
    const [showWindow, setShowWindow] = useState(false);
    const saveChanges = (taskTitle: any, taskDescription: any, taskId: any, taskDate: any) => {
        props.newTask({
            title: taskTitle,
            description: taskDescription,
            id: uuid(),
            date: taskDate
        })
    }

    return (
        <div className={'NewTaskButton'}>
            <button className={'NewTaskButton__button'} onClick={() => setShowWindow(true)}>
                <img src={newTaskImg} alt="Добавить задачу"/>
            </button>
            <RefactorTaskWindow showWindow={showWindow} setShowWindow={setShowWindow} saveChanges={saveChanges}/>
        </div>
    );
}