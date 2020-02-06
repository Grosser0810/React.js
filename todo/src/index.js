import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App'


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    //localStorage.clear()
});

const getTaskId = () => {
    let tasks = persistedState.tasks;

    let arrId = [];

    if(tasks === undefined) {
        return 1;
    } else {
        for (let i = 0; i < tasks.length; i++) {
            arrId.push(tasks[i].id)
        }
        return Math.max.apply(null, arrId) + 1;
    }

};
console.log(persistedState.tasks);



render(
    <Provider store={store}>
        <App  taskId={getTaskId()} tasks={persistedState.tasks}/>
    </Provider>,
    document.getElementById('root')
);