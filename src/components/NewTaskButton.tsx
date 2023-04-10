import React, {useState} from 'react';
import '../styles/NewTaskButton.scss';
import {RefactorTaskWindow} from "./RefactorTaskWindow";
import {v4 as uuid} from 'uuid'
import {Transition} from "react-transition-group";

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
        <div className={'NewTaskButton'}>
            <button className={'NewTaskButton__button'} onClick={() => setShowWindow(true)}>
                <img src={newTaskImg} alt="Добавить задачу"/>
            </button>
            <Transition in={showWindow} timeout={duration} unmountOnExit={true}>
                {(state: string) => (
                    <RefactorTaskWindow showWindow={transitionClasses[state as keyof transitionClassesInterface]} setShowWindow={setShowWindow} saveChanges={saveChanges}/>
                )}
            </Transition>
        </div>
    );
}