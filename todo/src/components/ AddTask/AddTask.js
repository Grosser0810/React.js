import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }
    }

    addTask = () => {
        const {input} = this.state;
        if(input){
            this.props.addTask(input);
            this.setState({input: ''})
        }
    };

    inputChange = (event)=> {
        this.setState({input: event.target.value})
    };

    render() {
        const {input} = this.state;
        return(
            <form className='form-inline mb-4'>
                    <input onChange={this.inputChange} value={input} className='form-control' type="text"/>
                <button onClick={this.addTask} type='button' className='btn btn-primary'>Добавить</button>
            </form>
        )
    }
}

export default AddTask;