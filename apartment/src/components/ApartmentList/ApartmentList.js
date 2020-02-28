import React from "react";
import './ApartmentList.css'
import Apartment from "./Apartment/Apartment";

class ApartmentList extends React.Component {

    render() {
        //console.log()
        return(
            <div>
                <div className='container apartmentList'>
                    {
                        this.props.apartments.length !== 0 ?
                            this.props.apartments.map(apartment => (
                                <Apartment
                                    apartment={apartment}
                                    key={apartment.latitude + apartment.longitude}
                                />
                            ) ) : <p className='empty'> В {this.props.searchString} не найдено квартир для аренды</p>
                    }
                </div>
            </div>
        )
    }
}

export default ApartmentList;