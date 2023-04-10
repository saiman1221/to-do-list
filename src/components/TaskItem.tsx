import React, {useState} from 'react';
import '../styles/TaskItem.scss';
import {RefactorTaskWindow} from "./RefactorTaskWindow";

export const TaskItem = (props: any) => {
    const deleteImg: string = require("../assets/tasks-list/delete-task.svg").default;
    const refactorImg: string = require("../assets/tasks-list/refactor-task.svg").default;
    const [showWindow, setShowWindow] = useState(false);
    const saveChanges = (taskTitle: any, taskDescription: any, taskId: any, taskDate: any) => {
        props.refactorTask({
            title: taskTitle,
            description: taskDescription,
            id: taskId,
            date: taskDate
        })
    }

    return (
        <div className={'TaskItem'}>
            <p className={'TaskItem__date'}>{props.task.date}</p>
            <div className={'TaskItem__content'}>
                <div className='TaskItem__content__text'>
                    <h3 className={'TaskItem__content__text__title'}>{props.task.title}</h3>
                    <p className={'TaskItem__content__text__description'}>{props.task.description}</p>
                </div>
                <div className='TaskItem__content__buttons'>
                    <button className={'TaskItem__content__buttons__button'} onClick={() => setShowWindow(true)}>
                        <img src={refactorImg} alt="Редактировать задачу"/>
                    </button>
                    <button className={'TaskItem__content__buttons__button'} onClick={() => props.deleteTask(props.task.id)}>
                        <img src={deleteImg} alt="Удалить задачу"/>
                    </button>
                </div>
            </div>
            {showWindow ? <RefactorTaskWindow showWindow={showWindow} setShowWindow={setShowWindow} taskData={props.task} saveChanges={saveChanges}/> : null}
        </div>
    );
}