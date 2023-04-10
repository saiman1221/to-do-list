import React, {useState} from 'react';
import '../styles/RefactorTaskWindow.scss';

export const RefactorTaskWindow = (props: any) => {
    const now = new Date;
    const [taskTitle, setTaskTitle] = useState(props.taskData?.title);
    const [taskDescription, setTaskDescription] = useState(props.taskData?.description);
    const [taskId, setTaskId] = useState(props.taskData?.id);
    const [taskDate, setTaskDate] = useState(now.toLocaleDateString());

    const cancelButton = () => {
        props.setShowWindow(false);
        setTaskTitle('');
        setTaskDescription('');
        setTaskId('');
        setTaskDate('')
    }

    const saveButton = () => {
        props.setShowWindow(false);
        props.saveChanges(taskTitle, taskDescription, taskId, taskDate);
        setTaskTitle('');
        setTaskDescription('');
        setTaskId('');
        setTaskDate('')
    }

    return (
        <div className={props.showWindow ? 'RefactorTaskWindow show' : 'RefactorTaskWindow hide'}>
            <div className={'RefactorTaskWindow__content'}>
                <input type="text" placeholder={'Заголовок'} className={'RefactorTaskWindow__content__title'} onChange={e => setTaskTitle(e.target.value)} value={taskTitle}/>
                <textarea className={'RefactorTaskWindow__content__description'} placeholder={'Описание'} onChange={e => setTaskDescription(e.target.value)} value={taskDescription}/>
                <div className={'RefactorTaskWindow__content__buttons'}>
                    <button className={'button'} onClick={() => cancelButton()}>Cancel</button>
                    <button className={'button'} onClick={() => saveButton()}>Save</button>
                </div>
            </div>
        </div>
    );
}