import React from "react";
import SoloApartment from "../components/SoloApartment/SoloApartment";

class SoloApartmentPage extends React.Component{

    render() {
        return(
            <div>
                <SoloApartment
                    addApartmentsToFavorite={this.props.addApartmentsToFavorite}
                    deleteTask={this.props.deleteTask}
                    deleteApartmentInStore={this.deleteApartmentInStore}
                    apartments={this.props.apartments}
                    apartment={this.props.location.myProps}
                />
            </div>
        )
    }
}

export default SoloApartmentPage;