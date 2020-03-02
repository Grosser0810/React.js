import React from "react";

const tasks = (state = [], action) => {

    let getApartmentId = () => {
        let apartments = state;
        let arrId = [];
        if (apartments.length === 0) {
            return 1;
        } else {
            for (let i = 0; i < apartments.length; i++) {
                arrId.push(apartments[i].id)
            }
            return Math.max.apply(null, arrId) + 1;
        }
    };

    switch (action.type) {
        case 'ADD_APARTMENT_TO_STORE':
            return [
                ...state,
                {
                    id: getApartmentId(),
                    img_url:action.img_url,
                    title: action.title,
                    price_formatted: action.price_formatted,
                    bedroom_number: action.bedroom_number,
                    bathroom_number: action.bathroom_number,
                    car_spaces: action.car_spaces,
                    summary: action.summary,
                    updated_in_days_formatted: action.updated_in_days_formatted,
                    datasource_name: action.datasource_name,
                }
            ];
        case 'DELETE_APARTMENT':
            return state.filter(apartment => apartment.id !== action.id);
        default:
            return state
    }
};

export default tasks;