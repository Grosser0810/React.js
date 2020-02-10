import React from 'react';

import AddTask from "./components/ AddTask/AddTask";
import TasksFilter from "./components/TasksFilter/TasksFilter";
import SortBlock from "./components/SordBlock/SortBlock";
import TasksList from "./components/TasksLIst/TasksList";
import {connect} from 'react-redux'
import {addTaskToStore, deleteTask, doneTask } from "./actions/actions";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: this.props.tasks || [],
            inputDate: '',
            inputTask: '',
        }
    }

    getTaskId = () => {
        let tasks = this.props.tasks;
        let arrId = [];
        if (tasks.length === 0) {
            return 1;
        } else {
            for (let i = 0; i < tasks.length; i++) {
                arrId.push(tasks[i].id)
            }
            return Math.max.apply(null, arrId) + 1;
        }
    };

    addTask = (task, dateTask) => {
        this.props.addTaskToStore(task,dateTask,this.getTaskId())
    };

    doneTask = id => {
        const index = this.props.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let tasks = this.props.tasks;
            this.props.doneTaskStore(tasks[index].id);
        });
    };

    deleteTask = id => {
        const index = this.props.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let tasks = this.props.tasks;
            this.props.deleteTaskInStore(tasks[index].id);
        })
    };

    sortAZ = () => {
        this.setState(state => {
                let tasks = this.props.tasks;
                return tasks.sort((a, b) => {
                    let taskA = a.title, taskB = b.title;
                    if (taskA < taskB)
                        return -1;
                    if (taskA > taskB)
                        return 1;
                });
            }
        )
    };

    sortZA = () => {
        this.setState(state => {
                let tasks = this.props.tasks;
                return tasks.sort((a, b) => {
                    let taskA = a.title, taskB = b.title;
                    if (taskA > taskB)
                        return -1;
                    if (taskA < taskB)
                        return 1;
                });
            }
        )
    };

    sortDate = () => {
        this.setState(state => {
                let tasks = this.props.tasks;
                return tasks.sort((a, b) => {
                    let dateA = new Date(a.date), dateB = new Date(b.date);
                    return dateA - dateB
                });
            }
        )
    };

    sortOff = () => {
        this.setState(state => {
                let tasks = this.props.tasks;
                return tasks.sort((a, b) => {
                    let taskA = a.id, taskB = b.id;
                    if (taskA > taskB)
                        return 1;
                    if (taskA < taskB)
                        return -1;
                });
            }
        )
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
        const {tasks} = this.state;
        const RenderTasks = this.tasksFilter();

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
                        tasksOnStore={this.props.tasks}
                        fullTasks={RenderTasks}
                        doneTask={this.doneTask}
                        deleteTask={this.deleteTask}
                        tasks={tasks}
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
    addTaskToStore: (tasks, dateTasks, id) => dispatch(addTaskToStore(tasks, dateTasks, id)),
    deleteTaskInStore: id => dispatch(deleteTask(id)),
    doneTaskStore: id => dispatch(doneTask(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
