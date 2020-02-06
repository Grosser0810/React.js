import { VisibilitySorts } from '../actions'

const visibilitySort = (state = VisibilitySorts.SORT_OFF, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_SORT':
            return action.sort;
        default:
            return state
    }
};

export default visibilitySort;