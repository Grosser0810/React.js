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
        const {input} = this.state;
        const {inputDate} = this.state;
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
        let inputText = document.querySelector('input.inputText');
        this.setState({input: event.target.value})
        inputText.classList.remove('broken');


    };
    inputChangeDate = (event) => {
        let inputDateTask = document.querySelector('input.inputDate');
        this.setState({inputDate: event.target.value})
        inputDateTask.classList.remove('broken');
    };

    render() {
        const {input} = this.state;
        const {inputDate} = this.state;


        return (
            <div className='addTask'>
                <div className='titleAdd'>Добавить задачу</div>
                <form>
                    <div>
                        <input onChange={this.inputChange} value={input} className='inputText' type="text" />
                    </div>
                    <div className="">
                        <input onChange={this.inputChangeDate} value={inputDate} className="inputDate" type="date"
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