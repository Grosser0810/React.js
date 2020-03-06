import React from "react";
import './FavoritesApartmentsList.css'
import Favorites from "./Favorites/Favorites";


class ApartmentList extends React.Component {

    render() {

        return (
            <div>
                <div className='container apartmentList'>
                    {
                        this.props.apartments.map(apartment => (
                            <Favorites
                                apartment={apartment}
                                key={apartment.id}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ApartmentList;