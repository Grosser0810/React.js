import React from 'react';

import AddTask from "./components/ AddTask/AddTask";
import TasksFilter from "./components/TasksFilter/TasksFilter";
import TaskList from "./components/TaskList/TaskList";
import SortBlock from "./components/SortBlock/SortBlock";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: JSON.parse(localStorage.getItem('allTasks')) || [],
            inputDate: '',
            inputTask: '',
        }
    }

    getTaskId = () => {
        let tasks = this.state.tasks;
        let arrId = [];
        for (let i = 0; i < tasks.length; i++) {
            arrId.push(tasks[i].id)
        }
        return Math.max.apply(null, arrId) + 1;
    };

    addTask = (task, dateTask) => {
        this.setState(state => {
            let {tasks} = state;
            let arr = [];
            arr.push({
                id: tasks.length !== 0 ? this.getTaskId() : 1,
                title: task,
                date: dateTask,
                done: false,
            });
            localStorage.setItem('allTasks', JSON.stringify([...tasks, ...arr]));
            return {tasks: [...tasks, ...arr]}
        });
    };

    doneTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            let newTasks = tasks.slice();
            newTasks[index].done = true;
            localStorage.setItem('allTasks', JSON.stringify(newTasks));
            return {tasks: newTasks};
        })
    };

    deleteTask = id => {
        this.setState(state => {
            let {tasks} = state;
            let newTasks = tasks.filter(task => task.id !== id);
            localStorage.setItem('allTasks', JSON.stringify(newTasks));
            return {tasks: newTasks}
        })
    };

    sortAZ = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks.slice();
                renderTasks.sort((a, b) => {
                    let taskA = a.title, taskB = b.title;
                    if (taskA < taskB)
                        return -1;
                    if (taskA > taskB)
                        return 1;
                });
                return {tasks: renderTasks}
            }
        )
    };

    sortZA = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks.slice();
                renderTasks.sort((a, b) => {
                    let taskA = a.title, taskB = b.title;
                    if (taskA > taskB)
                        return -1;
                    if (taskA < taskB)
                        return 1;
                });
                return {tasks: renderTasks};
            }
        )
    };

    sortDate = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks.slice()
                renderTasks.sort((a, b) => {
                    let dateA = new Date(a.date), dateB = new Date(b.date);
                    return dateA - dateB
                });
                return {tasks: renderTasks};
            }
        )
    };

    sortOF = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks;
                renderTasks.sort((a, b) => {
                    let taskA = a.id, taskB = b.id;
                    if (taskA > taskB)
                        return 1;
                    if (taskA < taskB)
                        return -1;
                });
                return {tasks: renderTasks};
            }
        )
    };

    tasksFilter = () => {
        let filterTasks = [];
        let {tasks} = this.state;

        if (this.state.inputDate === '' && this.state.inputTask === '') {
            filterTasks = this.state.tasks;
        }

        if (this.state.inputTask !== '') {
            filterTasks = tasks.filter(index => {
                let name = index.title;
                let inputValue = this.state.inputTask;
                return name.indexOf(inputValue) !== -1;
            })
        }

        if (this.state.inputDate !== '') {
            filterTasks = tasks.filter(index => {
                let date = index.date;
                let filterDate = date.split('T')[0];
                return filterDate === this.state.inputDate;
            });
            if (this.state.inputTask) {
                filterTasks = filterTasks.filter(index => {
                    let name = index.title;
                    let inputValue = this.state.inputTask;
                    return name.indexOf(inputValue) !== -1;
                })
            }
        }
        return filterTasks;
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
        const fullTasks = this.tasksFilter();


        return (
            <div className="App">
                <div className="container">
                    <AddTask addTask={this.addTask}/>

                    <SortBlock
                        sortAZ={this.sortAZ}
                        sortZA={this.sortZA}
                        sortDate={this.sortDate}
                        sortOF={this.sortOF}
                    />

                    <TasksFilter
                        onTaskChange={this.onTaskChange}
                        onDateChange={this.onDateChange}
                    />

                    <TaskList
                        fullTasks={fullTasks}
                        doneTask={this.doneTask}
                        deleteTask={this.deleteTask}
                        tasks={tasks}
                    />
                </div>
            </div>
        )
    }
}

export default App;