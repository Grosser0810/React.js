import React from "react";

import './Task.css';


const Task = ({task, ...props}) => {


    const ActionButton = () => <span className='actionBtn'>
        {
            task.done ?
                <button
                    onClick={props.deleteTask}
                    type="button"
                    className="btn">Удалить</button> :

                <button
                    onClick={props.doneTask}
                    type="button"
                    className="btn">Выполнить</button>
        }
                            </span>;

    return (

        <li className={task.done ? 'doneTask task' : 'noDoneTask task'}>
            <span>{task.title}</span>
            <span className='task-date'>{task.date}</span>
            <ActionButton/>
        </li>
    )
};
export default Task;