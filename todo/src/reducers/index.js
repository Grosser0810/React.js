import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './VisibilityFilter'


export default combineReducers({
    tasks,
    visibilityFilter,
})