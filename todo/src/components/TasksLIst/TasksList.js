import Task from "../Task/Task";
import React from "react";

const TasksList = ({fullTasks, doneTask, deleteTask, ...props}) => {
    return(
        <ul className='listGroup'>
            { (fullTasks !== undefined) ?
                fullTasks.map(task => (
                    <Task
                        doneTask={() => doneTask(task.id)}
                        deleteTask={() => deleteTask(task.id)}
                        task={task}
                        tasks={props.tasks}
                        key={task.id}
                    />
                )) : <div className='emptyList'>список пуст</div>}
        </ul>
    )
};

export default TasksList;