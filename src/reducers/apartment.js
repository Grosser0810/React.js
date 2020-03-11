
const tasks = (state = [], action) => {

    switch (action.type) {
        case 'ADD_APARTMENT_TO_STORE':

            return [
                ...state,...action.apartments,
            ];
        default:
            return state
    }
};

export default tasks;