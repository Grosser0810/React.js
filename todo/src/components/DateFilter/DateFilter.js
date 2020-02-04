import React from "react";

import './DateFilter.css'

class DateFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFilterDate: '',
            inputText: '',
        }
    }

    dateFilter = () => {
        const {inputFilterDate} = this.state.inputFilterDate;
        const {inputText} = this.state.inputText;

        if (inputFilterDate) {
            this.props.dateFilter(inputFilterDate);
            this.setState({inputFilterDate: ''});
        }
       if (inputText) {
           this.props.dateFilter(inputText);
           this.setState({inputText: ''});
       }
    };

    inputChange = (event) => {
        this.setState({inputFilterDate: event.target.value});
        this.props.onDateChange(event.target.value);

    };
    inputTextChange = (event) => {
        this.setState({inputText: event.target.value});
        this.props.onTextChange(event.target.value);
    };

    render() {
        const {inputFilterDate} = this.state.inputFilterDate;
        const {inputText} = this.state.inputText;


        return (
            <div className='filterBlock'>
                <div className="">
                    <div>
                        <input onChange={this.inputTextChange} type="text" className='searchInput' value={inputText} />
                    </div>
                    <div className="col-10">
                        <input onChange={this.inputChange} value={inputFilterDate} className="form-control" type="date"
                               id="example-date-input"/>
                    </div>
                </div>
               {/* <button onClick={this.dateFilter} type='submit' className='btn btn-primary'>Показать</button>*/}
            </div>
        )
    }
}

export default DateFilter;