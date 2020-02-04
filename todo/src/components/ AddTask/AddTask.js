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
            inputText.style.border ='1px solid red';
            inputDateTask.style.border ='1px solid red';
        } else if(!input && inputDate) {
            inputDateTask.style.border ='1px solid grey';
            inputText.style.border ='1px solid red';
        } else if(input && !inputDate) {
            inputText.style.border ='1px solid grey';
            inputDateTask.style.border ='1px solid red';
        }else{
            inputText.style.border ='1px solid grey';
            inputDateTask.style.border ='1px solid grey';
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
        const {input} = this.state;
        const {inputDate} = this.state;


        return (
            <div className='addTask'>
                <div className='titleAdd'>Добавить задачу</div>
                <form className=''>
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