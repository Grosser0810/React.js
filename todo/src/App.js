import React from 'react';

import Task from './components/Task/Task'
import AddTask from "./components/ AddTask/AddTask";
import DateFilter from "./components/DateFilter/DateFilter";
//import Sort from "./components/Sort/Sort";

class App extends React.Component{
    constructor() {
        super();

        this.state = {
            tasks: JSON.parse(localStorage.getItem('allTasks')) || []
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

    dateFilter = (inputFilterData) => {
        this.setState(state => {
            let {tasks} = state;
            console.log(tasks);
            let filterArr = tasks.filter((index) => {
                let date = index.date;
                let filterDate = date.split('T')[0];
                return filterDate === inputFilterData;
            });
            console.log(filterArr);
            return filterArr;
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
            tasks.splice(index,1);
            localStorage.setItem('allTasks', JSON.stringify(this.state.tasks));
            return tasks;
        })
    };
    sortAZ = () => {
        this.state.tasks.sort(function(a, b){
            let nameA=a.title, nameB=b.title;
            if (nameA < nameB) //сортируем строки по возрастанию
                return -1
        });
        this.setState(state => {
            let {tasks} = state;
            localStorage.setItem('allTasks', JSON.stringify(this.state.tasks));
            return tasks;
        })

    };

    render() {
        const {tasks} = this.state;
        const activeTasks = tasks.filter(task => !task.done);
        const doneTasks = tasks.filter(task => task.done);
        return(
            <div className="App">
                <div className="container">
                    <AddTask addTask={this.addTask}/>
                    <DateFilter dateFilter={this.dateFilter}/>


                    <ul className='list-group'>
                        {[...activeTasks, ...doneTasks].map(task => (
                            <Task
                                doneTask={() => this.doneTask(task.id)}
                                deleteTask={() => this.deleteTask(task.id)}
                                task={task}
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
