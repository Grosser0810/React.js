import React from "react";

const tasks = (state = [], action) => {

    let getTaskId = () => {
        let tasks = state;
        let arrId = [];
        if (tasks.length === 0) {
            return 1;
        } else {
            for (let i = 0; i < tasks.length; i++) {
                arrId.push(tasks[i].id)
            }
            return Math.max.apply(null, arrId) + 1;
        }
    };

    switch (action.type) {
        case 'ADD_TASK_TO_STORE':
            return [
                ...state,
                {
                    id: getTaskId(),
                    title: action.title,
                    date: action.date,
                    done: false
                }
            ];
        case 'DONE_TASK':
            return state.map(task =>
                task.id === action.id ? {
                    id: action.id,
                    title: task.title,
                    date: task.date,
                    done: true
                } : task
            );
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.id);
        default:
            return state
    }
};

export default tasks;