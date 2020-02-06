import React from 'react';


import AddTask from "./components/ AddTask/AddTask";
import TasksFilter from "./components/TasksFilter/TasksFilter";
import TaskList from "./components/TaskList/TaskList";
import SortBlock from "./components/SortBlock/SortBlock";
import VisibileTaskList from "./containers/VisibileTaskList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: JSON.parse(localStorage.getItem('allTasks')) || [],
            inputDate: '',
            inputTask: '',
        }
    }

    addTask = (task, dateTask) => {
        this.setState(state => {
            let {tasks} = state;
            tasks.push({
                id: tasks.length !== 0 ? this.getTaskId() : 1,
                title: task,
                date: dateTask,
                done: false,
            });
            localStorage.setItem('allTasks', JSON.stringify(this.state.tasks));

            return tasks;
        });

    };

    doneTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            tasks[index].done = true;
            localStorage.setItem('allTasks', JSON.stringify(this.state.tasks));
            return tasks;
        })
    };

    deleteTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            tasks.splice(index, 1);
            localStorage.setItem('allTasks', JSON.stringify(this.state.tasks));
            return tasks;
        })
    };

    sortAZ = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks.sort((a, b) => {
                    let taskA = a.title, taskB = b.title;
                    if (taskA < taskB)
                        return -1;
                    if (taskA > taskB)
                        return 1;
                });
                return renderTasks;
            }
        )
    };

    sortZA = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks.sort((a, b) => {
                    let taskA = a.title, taskB = b.title;
                    if (taskA > taskB)
                        return -1;
                    if (taskA < taskB)
                        return 1;
                });
                return renderTasks;
            }
        )
    };

    sortDate = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks.sort((a, b) => {
                    let dateA = new Date(a.date), dateB = new Date(b.date);
                    return dateA - dateB
                });
                return renderTasks;
            }
        )
    };

    sortOF = () => {
        this.setState(state => {
                let {tasks} = state;
                let renderTasks = tasks.sort((a, b) => {
                    let taskA = a.id, taskB = b.id;
                    if (taskA > taskB)
                        return 1;
                    if (taskA < taskB)
                        return -1;
                });
                return renderTasks;
            }
        )
    };

    tasksFilter = () => {
        let dateRenderTasks = [];
        let {tasks} = this.state;

        if (this.state.inputDate === '' && this.state.inputTask === ''){
            dateRenderTasks = this.state.tasks;
        }

        if (this.state.inputTask !== ''){
            dateRenderTasks = tasks.filter(index => {
                let name = index.title;
                let inputValue = this.state.inputTask;
                return name.indexOf(inputValue) !== -1;
            })
        }

        if (this.state.inputDate !== '') {
            dateRenderTasks = tasks.filter(index => {
                let date = index.date;
                let filterDate = date.split('T')[0];
                return filterDate === this.state.inputDate;
            });
            if (this.state.inputTask) {
                dateRenderTasks = dateRenderTasks.filter(index => {
                    let name = index.title;
                    let inputValue = this.state.inputTask;
                    return name.indexOf(inputValue) !== -1;
                })
            }
        }

        return dateRenderTasks;
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

        //const {tasks} = this.state;
       // console.log(this.props.tasks)

        const fullTasks = this.tasksFilter();

        return (
            <div className="App">
                <div className="container">
                    <AddTask taskId={this.props.taskId}/>
                    <SortBlock/>
                    <TasksFilter
                        onTaskChange ={this.onTaskChange}
                        onDateChange={this.onDateChange}
                    />
                    <VisibileTaskList tasks={this.props.tasks}/>
                </div>
            </div>
        )
    }
}

export default App;
