import {connect} from 'react-redux'
import {completedTask, VisibilitySorts} from '../actions'
import {VisibilityFilters} from '../actions';
import TaskList from "../components/TaskList/TaskList";

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case VisibilitySorts.DATE_FILTER:
            return tasks.sort((a, b) => {
                let dateA = new Date(a.date), dateB = new Date(b.date);
                return dateA - dateB
            });
        case VisibilityFilters.SHOW_ALL:
            return tasks;
        case VisibilityFilters.COMPLETED_TASK:
            return tasks.filter(t => t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    completedTask: id => dispatch(completedTask(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)