import React from "react";

import './TasksFilter.css'

class TasksFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    inputDateChange = (event) => {
        this.props.onDateChange(event.target.value);
    };

    inputTaskChange = (event) => {
        this.props.onTaskChange(event.target.value);
    };

    render() {

        return (
            <div className='filterBlock'>
                <div className="">
                    <div>
                        <input onChange={this.inputTaskChange} placeholder='Search....' type="text" className='searchInput' />
                    </div>
                    <div className="col-10">
                        <input onChange={this.inputDateChange} className="form-control" type="date"
                               id="example-date-input"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TasksFilter;