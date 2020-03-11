import React from "react";
import './Apartment.css'
import {Link} from "react-router-dom";

class Apartment extends React.Component {
    render() {
        const apartment = this.props.apartment;

        return (
            <Link to={{
                pathname: '/apartment/' + parseInt(apartment.lister_url.match(/\d+/)),
                myProps: apartment,
            }}
                  className='listing_list'
            >
                <div className='listing_list__image'>
                    <img src={apartment.img_url} alt=""/>
                </div>
                <div className='listing_list__info'>
                    <p className='title'> {apartment.title}</p>
                    <p>{apartment.property_type}</p>
                    <p className='summary'>{apartment.summary}</p>
                    <div className='updated'>
                        <span className='updated_time'>{apartment.updated_in_days_formatted}</span>
                        <span> on </span>
                        <span className='updated_who'>{apartment.datasource_name}</span>
                    </div>

                </div>
                <div className='listing_list__price'>
                    <div>{apartment.price_formatted}</div>

                </div>

            </Link>
        )
    }
}

export default Apartment;