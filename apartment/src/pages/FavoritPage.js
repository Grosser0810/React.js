import React from "react";
import Favorites from "../components/Favorites/Favorites";

class FavoritPage extends React.Component{
    render() {

        return(
            <div>
                <Favorites
                    apartment={this.props.location.myProps}
                />
            </div>
        )
    }

};


export default FavoritPage;