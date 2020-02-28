import React from "react";
import SoloApartment from "../components/SoloApartment/SoloApartment";

class SoloApartmentPage extends React.Component{
    render() {

        return(
            <div>
                <SoloApartment
                    apartment={this.props.location.myProps}
                />
            </div>
        )
    }

};


export default SoloApartmentPage;