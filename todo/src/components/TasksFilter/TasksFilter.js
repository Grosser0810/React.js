import React from "react";

import './TasksFilter.css'

class TasksFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFilterDate: '',
            inputTask: '',
        }
    }

    dateFilter = () => {
        const {inputFilterDate} = this.state.inputFilterDate;
        const {inputText} = this.state.inputTask;
        console.log(inputText);

        if (inputFilterDate) {
            this.props.dateFilter(inputFilterDate);
            this.setState({inputFilterDate: ''});
        }
       if (inputText) {
           this.props.dateFilter(inputText);
           this.setState({inputTask: ''});
       }
    };

    inputChange = (event) => {
        this.setState({inputFilterDate: event.target.value});
        this.props.onDateChange(event.target.value);

    };
    inputTaskChange = (event) => {
        this.setState({inputTask: event.target.value});
        this.props.onTaskChange(event.target.value);
    };

    render() {
        const {inputFilterDate} = this.state.inputFilterDate;
        const {inputTask} = this.state.inputTask;
        //console.log(inputTask);


        return (
            <div className='filterBlock'>
                <div className="">
                    <div>
                        <input onChange={this.inputTaskChange} placeholder='Search....' type="text" className='searchInput' value={inputTask} />
                    </div>
                    <div className="col-10">
                        <input onChange={this.inputChange} value={inputFilterDate} className="form-control" type="date"
                               id="example-date-input"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TasksFilter;