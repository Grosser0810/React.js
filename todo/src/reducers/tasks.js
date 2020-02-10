import React from "react";

const tasks = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TASK_TO_STORE':
            return [
                ...state,
                {
                    id: action.id,
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