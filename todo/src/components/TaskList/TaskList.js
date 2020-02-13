import React from "react";
import Task from "../Task/Task";


const TaskList = ({fullTasks, doneTask, deleteTask, tasks}) => {
    return(
        <div>
            <ul className='listGroup'>
                {(fullTasks.length !== 0) ?
                    fullTasks.map(task => (
                        <Task
                            doneTask={() => doneTask(task.id)}
                            deleteTask={() => deleteTask(task.id)}
                            task={task}
                            tasks={tasks}
                            key={task.id}
                        />
                    )) : <div className='emptyList'>список пуст</div>}
            </ul>
        </div>
    )
};

export default TaskList;