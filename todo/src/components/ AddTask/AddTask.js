import React from "react";
import {connect} from 'react-redux'
import './AddTask.css';
import {addTask} from "../../actions";

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        //     this.state = {
        //         input: '',
        //         inputDate: '',
        //     }
        // }

        // addTask = () => {
        //     const {input} = this.state;
        //     const {inputDate} = this.state;
        //     let inputText = document.querySelector('input.inputText');
        //     let inputDateTask = document.querySelector('input.inputDate');
        //
        //
        //     if (!input && !inputDate) {
        //         inputText.style.border ='1px solid #ff7043';
        //         inputDateTask.style.border ='1px solid #ff7043';
        //     } else if(!input && inputDate) {
        //         inputDateTask.style.border ='1px solid #e0e0e0';
        //         inputText.style.border ='1px solid #ff7043';
        //     } else if(input && !inputDate) {
        //         inputText.style.border ='1px solid #e0e0e0';
        //         inputDateTask.style.border ='1px solid #ff7043';
        //     }else{
        //         inputText.style.border ='1px solid #e0e0e0';
        //         inputDateTask.style.border ='1px solid #e0e0e0';
        //         this.props.addTask(input, inputDate);
        //         this.setState({input: '', inputDate: ''})
        //     }
        // };

        // inputChange = (event) => {
        //     this.setState({input: event.target.value})
        // };
        // inputChangeDate = (event) => {
        //     this.setState({inputDate: event.target.value})
        // };
    }

    render() {

        let inputTitle;
        let inputDate;
        let {dispatch} = this.props;

        return (
            <div className='addTask'>
                <div className='titleAdd'>Добавить задачу</div>
                <form
                    onSubmit={() => {
                        if (!inputTitle.value.trim() && !inputDate.value.trim()) {
                            inputTitle.style.border = '1px solid #ff7043';
                            inputDate.style.border = '1px solid #ff7043';
                        } else if (!inputTitle.value.trim() && inputDate.value.trim()) {
                            inputTitle.style.border = '1px solid #ff7043';
                        } else if (!inputDate.value.trim() && inputTitle.value.trim()) {
                            inputDate.style.border = '1px solid #ff7043';
                        } else {
                            inputTitle.style.border = '1px solid #e0e0e0';
                            inputDate.style.border = '1px solid #e0e0e0';
                            dispatch(addTask(inputTitle.value, inputDate.value, this.props.taskId));
                            inputTitle.value = ''
                        }

                    }
                    }
                    className=''>
                    <div>
                        <input ref={node => (inputTitle = node)} className='inputText' type="text" />
                    </div>
                    <div className="">
                        <input  ref={node => (inputDate = node)} className="inputDate" type="date"
                               id="example-date-input" />
                    </div>

                        <button type='submit' className='btnAdd'>Добавить</button>

                </form>
            </div>
        )
    }
}

export default connect()(AddTask);