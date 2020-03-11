import React from "react";
import './SearchBar.css'

class SearchBar extends React.Component {

    changedInput = (event) => {
        this.props.onSearchChanged(event.target.value);
    };

    render() {

        return (
            <form className='searchForm' action="">
                <div className='container'>
                    <input type="text"
                           placeholder='Enter Town'
                           onChange={this.changedInput}
                    />
                    <button type='button' onClick={this.props.onSearchPressed}>Search</button>
                </div>
            </form>
        )
    }
}

export default SearchBar;