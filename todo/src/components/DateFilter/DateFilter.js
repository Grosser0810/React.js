import React from "react";

class DateFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFilterDate: '',
        }
    }

    dateFilter = ({tasks, ...props}) => {
        const {inputFilterDate} = this.state;

        if (inputFilterDate) {
            this.props.dateFilter(inputFilterDate);
            this.setState({inputFilterDate: ''});
            console.log(tasks)
        }
    };

    inputChange = (event)=> {
        this.setState({inputFilterDate: event.target.value})
    };



    render() {
        const {inputFilterDate} = this.state;

        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="example-date-input" className="col-2 col-form-label">Date</label>
                    <div className="col-10">
                        <input onChange={this.inputChange} value={inputFilterDate}  className="form-control" type="date" id="example-date-input"/>
                    </div>
                </div>
                <button onClick={this.dateFilter} type='button' className='btn btn-primary'>Показать</button>

            </div>

        )
    }
}

export default DateFilter;