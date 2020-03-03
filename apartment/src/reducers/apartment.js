import React from "react";

const tasks = (state = [], action) => {

    switch (action.type) {
        case 'ADD_APARTMENT_TO_STORE':
            for(let i=0; i<state.length ;i++){
                if(state[i].id === parseInt(action.lister_url.match(/\d+/))){
                    alert('уже добавлен в избранное');
                    return state;
                }
            }
            return [
                ...state,
                {
                    id: parseInt(action.lister_url.match(/\d+/)),
                    img_url:action.img_url,
                    title: action.title,
                    price_formatted: action.price_formatted,
                    bedroom_number: action.bedroom_number,
                    bathroom_number: action.bathroom_number,
                    car_spaces: action.car_spaces,
                    summary: action.summary,
                    updated_in_days_formatted: action.updated_in_days_formatted,
                    datasource_name: action.datasource_name,
                    price_type: action.price_type,
                    added: true,
                }
            ];

        case 'DELETE_APARTMENT':
            return state.filter(apartment => apartment.id !== action.id);
        default:
            return state
    }
};

export default tasks;