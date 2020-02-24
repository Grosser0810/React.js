

export const addTaskToStore = (title, date) => ({
    type: 'ADD_TASK_TO_STORE',
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
