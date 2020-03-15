import React from "react";
import './ApartmentList.css'
import Apartment from "./Apartment/Apartment";

class ApartmentList extends React.Component {
    getKey = (string) => {
        return parseInt(string.match(/\d+/));
    };

    render() {
        return (
            <div>
                <div className='container apartmentList'>
                    {
                        this.props.apartments.length ?
                            this.props.apartments.map(apartment => (
                                <Apartment
                                    apartment={apartment}
                                    key={this.getKey(apartment.lister_url)}
                                />
                            )) : <p className='empty'> В {this.props.searchString} не найдено квартир для аренды</p>
                    }
                </div>
            </div>
        )
    }
}

export default ApartmentList;