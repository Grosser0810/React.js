const tasks = (state = [], action) => {

    switch (action.type) {
        case 'ADD_APARTMENT_TO_STORE':

            return [
                ...state, ...action.apartments,
            ];

        case 'SEARCH_BUTTON':
            return action.apartments;

        default:
            return state
    }
};

export default tasks;