import React, {useState} from 'react';
import '../styles/TaskItem.scss';
import {RefactorTaskWindow} from "./RefactorTaskWindow";
import {Transition} from "react-transition-group";

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

    const duration = 300;
    interface transitionClassesInterface {
        entering: string,
        entered: string,
        exiting: string,
        exited: string
    }
    const transitionClasses = {
        entering: 'show',
        entered: 'show',
        exiting: 'hide',
        exited: 'hide',
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
                    <button className={'TaskItem__content__buttons__button'}
                            onClick={() => props.deleteTask(props.task.id)}>
                        <img src={deleteImg} alt="Удалить задачу"/>
                    </button>
                </div>
            </div>
            <Transition in={showWindow} timeout={duration} unmountOnExit={true}>
                {(state: string) => (
                    <RefactorTaskWindow showWindow={transitionClasses[state as keyof transitionClassesInterface]} setShowWindow={setShowWindow} taskData={props.task} saveChanges={saveChanges}/>
                )}
            </Transition>
        </div>
    );
}