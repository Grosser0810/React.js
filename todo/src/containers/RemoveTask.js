import React from 'react'
import {connect} from 'react-redux'
import {deleteTask} from '../actions'

let RemoveTask = ({id, dispatch}) => {
    return (

        <button
            type="button"
            className="btnDelete"
            onClick={e => {
                e.preventDefault();
                dispatch(deleteTask(id))

                console.log(dispatch(deleteTask(id)));
            }}>Удалить</button>

    )
};

RemoveTask = connect()(RemoveTask);
export default RemoveTask;