import React from 'react';

import AddTask from "./components/ AddTask/AddTask";
import TasksFilter from "./components/TasksFilter/TasksFilter";
import SortBlock from "./components/SordBlock/SortBlock";
import TasksList from "./components/TasksLIst/TasksList";
import {connect} from 'react-redux'
import {addTaskToStore, deleteTask, doneTask} from "./actions/actions";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputDate: '',
            inputTask: '',
            sortFlag: ''
        }
    }

    addTask = (task, dateTask) => {
        this.props.addTaskToStore(task, dateTask)
    };

    doneTask = id => {
        const index = this.props.tasks.map(task => task.id).indexOf(id);
        let tasks = this.props.tasks;
        this.props.doneTaskStore(tasks[index].id);

    };

    deleteTask = id => {
        const index = this.props.tasks.map(task => task.id).indexOf(id);
        let tasks = this.props.tasks;
        this.props.deleteTaskInStore(tasks[index].id);
    };

    sortAZ = () => {
        this.setState(() => {
            return {sortFlag:'az'}
        })
    };

    sortZA = () => {
        this.setState(() => {
            return {sortFlag:'za'}
        })
    };

    sortDate = () => {
        this.setState(() => {
            return {sortFlag:'date'}
        })
    };

    sortOff = () => {
        this.setState(() => {
            return {sortFlag:'off'}
        })
    };

    tasksFilter = () => {
        let RenderTasks = [];
        let tasks = this.props.tasks;

        if (this.state.inputDate === '' && this.state.inputTask === '') {
            RenderTasks = tasks;
        }

        if (this.state.inputTask !== '') {
            RenderTasks = tasks.filter(index => {
                let name = index.title.toLowerCase();
                let inputValue = this.state.inputTask.toLowerCase();
                return name.indexOf(inputValue) !== -1;
            });
        }

        if (this.state.inputDate !== '') {
            RenderTasks = tasks.filter(index => {
                let date = index.date;
                let filterDate = date.split('T')[0];
                return filterDate === this.state.inputDate;
            });
            if (this.state.inputTask) {
                RenderTasks = RenderTasks.filter(index => {
                    let name = index.title.toLowerCase();
                    let inputValue = this.state.inputTask.toLowerCase();
                    return name.indexOf(inputValue) !== -1;
                })
            }
        }
        return RenderTasks;
    };

    finalSort = () => {
        let tasks = this.tasksFilter().slice();
        if (this.state.sortFlag === 'az') {
            return tasks.sort((a, b) => {
                let taskA = a.title, taskB = b.title;
                if (taskA < taskB)
                    return -1;
                if (taskA > taskB)
                    return 1;
            });
        }
        if (this.state.sortFlag === 'za') {
            return tasks.sort((a, b) => {
                let taskA = a.title, taskB = b.title;
                if (taskA > taskB)
                    return -1;
                if (taskA < taskB)
                    return 1;
            });
        }
        if (this.state.sortFlag === 'date') {
            return tasks.sort((a, b) => {
                let dateA = new Date(a.date), dateB = new Date(b.date);
                return dateA - dateB
            });
        }
        if (this.state.sortFlag === 'off') {
            return this.tasksFilter();
        }
        return tasks;
    };

    onDateChange = (inputDate) => {
        this.setState({
            inputDate
        })
    };
    onTaskChange = (inputTask) => {
        this.setState({
            inputTask
        })
    };

    render() {
        const RenderTasks = this.finalSort();
        return (
            <div className="App">
                <div className="container">
                    <AddTask addTask={this.addTask}/>
                    <SortBlock
                        sortOF={this.sortOff}
                        sortAZ={this.sortAZ}
                        sortZA={this.sortZA}
                        sortDate={this.sortDate}
                    />
                    <TasksFilter
                        onTaskChange={this.onTaskChange}
                        onDateChange={this.onDateChange}
                    />
                    <TasksList
                        fullTasks={RenderTasks}
                        doneTask={this.doneTask}
                        deleteTask={this.deleteTask}
                    />
                </div>
            </div>
        )
    }
}

const getTasks = (tasks) => {
    return tasks;
};

const mapStateToProps = state => ({
    tasks: getTasks(state.tasks)
});

const mapDispatchToProps = dispatch => ({
    addTaskToStore: (tasks, dateTasks) => dispatch(addTaskToStore(tasks, dateTasks)),
    deleteTaskInStore: id => dispatch(deleteTask(id)),
    doneTaskStore: id => dispatch(doneTask(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
