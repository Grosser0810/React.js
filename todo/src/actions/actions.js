
export const addTaskToStore = (title, date, id) => ({
    type: 'ADD_TASK_TO_STORE',
    id,
    title,
    date,
});

export const doneTask = id => ({
    type: 'DONE_TASK',
    id
});

export const deleteTask = id => ({
    type: 'DELETE_TASK',
    id
});
