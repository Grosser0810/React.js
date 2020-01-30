import React from "react";

import './Task.css';


const Task = ({task, ...props}) => {
    const ActionButton = () =><span className='action-btn'>
        {
            task.done ?
            <button
                onClick={props.deleteTask}
                type="button"
                className="btn btn-danger">Удалить</button> :

            <button
                onClick={props.doneTask}
                type="button"
                className="btn btn-success">Выполнить</button>
        }
                            </span>;

    return(

        <li className={task.done ? 'list-group-item list-group-item-action list-group-item-secondary' : 'list-group-item list-group-item-action'} >
            <span>{task.title}</span>
            <span className='task-date'>{task.date}</span>
            <ActionButton />
        </li>
    )
};
export default Task;