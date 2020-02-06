import React from "react";

import './Task.css';
import RemoveTask from "../../containers/RemoveTask";


const Task = ({ onClick, completed, title, date, id, task }) => {
    console.log(task);


    const ActionButton = () => <span className='actionBtn'>
        {
            completed ?
                <RemoveTask id={id}/> :

                <button
                    onClick={onClick}
                    type="button"
                    className="btnDone">Выполнить</button>
        }
                            </span>;

    return (

        <li className={task.completed ? 'doneTask task' : 'noDoneTask task'}>
            <span>{task.title}</span>
            <span className='task-date'>{task.date}</span>
            <ActionButton/>
        </li>
    )
};
export default Task;