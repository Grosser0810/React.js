import React from 'react';

import Task from './components/Task/Task'
import AddTask from "./components/ AddTask/AddTask";
import DateFilter from "./components/DateFilter/DateFilter";

//import Sort from "./components/Sort/Sort";

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            tasks: JSON.parse(localStorage.getItem('allTasks')) || [],
            inputDate: '',
            inputText: '',
        }
    }

    addTask = (task, dateTask) => {
        this.setState(state => {
            let {tasks} = state;
            tasks.push({
                id: tasks.length !== 0 ? tasks.length + 1 : 1,
                title: task,
                date: dateTask,
                done: false,
            });
            localStorage.setItem('allTasks', JSON.stringify(this.state.tasks));
            return tasks;
        });
    };

// переводим такс в состояние выполненого
    doneTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            tasks[index].done = true;
            localStorage.setItem('allTasks', JSON.stringify(this.state.tasks));
            return tasks;
        })
    };
// удаляем таск из массива
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

    //фильтр рабоет не отправляет
    dateFilter = () => {
        //debugger
        let dateRenderTasks = [];
        let {tasks} = this.state;

        if (this.state.inputDate !== 0) {
            dateRenderTasks = tasks.filter(index => {
                let date = index.date;
                let filterDate = date.split('T')[0];
                return filterDate === this.state.inputDate;
            });
        }
        //console.log(dateRenderTasks);
        return dateRenderTasks;
    };

    onDateChange = (inputDate) => {
        this.setState({
            inputDate
        })
    };
    onTextChange = (inputText) => {
        this.state({
            inputText
        })
    };


    render() {

        const {tasks} = this.state;
        const arr = this.dateFilter();
        const activeTasks = tasks.filter(task => !task.done);
        const doneTasks = tasks.filter(task => task.done);
        let fullTasks;
        if (arr.length !== 0) {
            fullTasks = arr;
        } else {
            fullTasks = [...activeTasks, ...doneTasks];
        }
        //const fullTasks = (dateFilterTasks.length !== 0) ? dateFilterTasks : [...activeTasks, ...doneTasks];

        return (
            <div className="App">
                <div className="container">
                    <AddTask addTask={this.addTask}/>
                    <div className='SortBlock'>
                        <button onClick={this.sortAZ} type='button' className='btn btn-primary'>A-z</button>
                        <button onClick={this.sortZA} type='button' className='btn btn-primary'>Z-a</button>
                        <button onClick={this.sortDate} type='button' className='btn btn-primary'>Сротировать по дате
                        </button>
                    </div>


                    <DateFilter
                        onTextChange ={this.onTextChange}
                        onDateChange={this.onDateChange}
                    />

                    <ul className='listGroup'>
                        {
                            fullTasks.map(task => (
                                <Task
                                    doneTask={() => this.doneTask(task.id)}
                                    deleteTask={() => this.deleteTask(task.id)}
                                    dateFilter={() => this.dateFilter(tasks)}
                                    task={task}
                                    tasks={tasks}
                                    key={task.id}
                                />
                            ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;
