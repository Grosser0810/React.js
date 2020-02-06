import React from "react";
import Task from "../Task/Task";

const TaskList = ({tasks, completedTask}) => {
    return (
        <ul className='listGroup'>
            { (tasks !== undefined) ?
                tasks.map(task => (
                    <Task
                        {...task}
                        onClick={() => completedTask(task.id)}
                        task={task}
                        key={task.id}
                    />
                )) : <div className='emptyList'>список пуст</div>}
        </ul>
    )
};


export default TaskList;