import React from "react";


const tasks = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TASK':

            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    date: action.date,
                    completed: false
                }
            ];

        case 'COMPLETED_TASK':
            return state.map(task =>
                task.id === action.id ? { ...task, completed: !task.completed } : task
            );
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.id);
        default:
            return state
    }
};

export default tasks;