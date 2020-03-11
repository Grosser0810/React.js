import React from "react";
import FavoritesApartmentList from '../components/FavoritesApartmentstList/FavoritesApartmentsList'

class FavoritesPage extends React.Component{

    render() {
        return(
            <div>
                <FavoritesApartmentList
                    favoritesApartments={this.props.favoritesApartments}
                />
            </div>
        )
    }
}

export default FavoritesPage;
