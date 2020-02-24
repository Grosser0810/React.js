import React from "react";

import './AddTask.css';

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            inputDate: '',
        }
    }

    addTask = () => {
        const input = this.state.input;
        const inputDate = this.state.inputDate;

        let inputText = document.querySelector('input.inputText');
        let inputDateTask = document.querySelector('input.inputDate');

        if (!input && !inputDate) {
            inputText.classList.add('broken')
            inputDateTask.classList.add('broken')
        }
        if(!input && inputDate) {
            inputText.classList.add('broken');
            inputDateTask.classList.remove('broken')
        }
        if(input && !inputDate) {
            inputText.classList.remove('broken');
            inputDateTask.classList.add('broken');
        }
        if(input && inputDate) {
            inputText.classList.remove('broken');
            inputDateTask.classList.remove('broken');
            this.props.addTask(input, inputDate);
            this.setState({input: '', inputDate: ''})
        }
    };

    inputChange = (event) => {
        this.setState({input: event.target.value})
    };
    inputChangeDate = (event) => {
        this.setState({inputDate: event.target.value})
    };

    render() {

        return (
            <div className='addTask'>
                <div className='titleAdd'>Добавить задачу</div>
                <form className=''>
                    <div>
                        <input onChange={this.inputChange} value={this.state.input} className='inputText' type="text" />
                    </div>
                    <div className="">
                        <input onChange={this.inputChangeDate} value={this.state.inputDate} className="inputDate" type="date"
                               id="example-date-input" />
                    </div>
                    <div>
                        <button onClick={this.addTask} type='button' className='btnAdd'>Добавить</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTask;