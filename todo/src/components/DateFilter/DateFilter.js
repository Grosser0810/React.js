import React from "react";

import './DateFilter.css'

class DateFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFilterDate: '',
        }
    }

    dateFilter = () => {
        const {inputFilterDate} = this.state;
        if (inputFilterDate) {
            this.props.dateFilter(inputFilterDate);
            this.setState({inputFilterDate: ''});
        }
    };

    inputChange = (event) => {
        this.setState({inputFilterDate: event.target.value});
        this.props.onDateChange(event.target.value)
    };

    render() {
        const {inputFilterDate} = this.state;

        return (
            <div className='filterBlock'>
                <div className="">
                    <div>
                        <input type="text" className='searchInput'/>
                    </div>
                    <div className="col-10">
                        <input onChange={this.inputChange} value={inputFilterDate} className="form-control" type="date"
                               id="example-date-input"/>
                    </div>
                </div>
                {/*<button onClick={this.dateFilter} type='submit' className='btn btn-primary'>Показать</button>*/}
            </div>
        )
    }
}

export default DateFilter;