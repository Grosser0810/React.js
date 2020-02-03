import React from "react";

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
        if (input && inputDate) {
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
            <div>
                <div className='titleAdd'>Добавить задачу</div>
                <form className='form-inline mb-4 was-validated' noValidate>
                    <div>
                        <input onChange={this.inputChange} value={input} className='form-control' type="text" required/>
                        <div className="invalid-feedback">
                            Введите задачу
                        </div>
                    </div>
                    <div className="">
                        <input onChange={this.inputChangeDate} value={inputDate} className="form-control" type="date"
                               id="example-date-input" required/>
                        <div className="invalid-feedback">
                            Введите дату
                        </div>
                    </div>
                    <div>
                        <button onClick={this.addTask} type='button' className='btn btn-primary'>Добавить</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTask;