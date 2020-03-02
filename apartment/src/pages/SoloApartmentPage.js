import React from "react";
import SoloApartment from "../components/SoloApartment/SoloApartment";
import {connect} from 'react-redux';
import {addApartmentToStore} from "../actions/actions";

class SoloApartmentPage extends React.Component{

    addApartmentToFavorites = (lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name) => {
        this.props.addApartmentToStore(lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name)
    };

    render() {
        console.log(this.props.apartments);
        return(
            <div>
                <SoloApartment
                    addApartmentToFavorites={this.addApartmentToFavorites}
                    apartment={this.props.location.myProps}
                />
            </div>
        )
    }

};

const getApartments = (apartments) => {
    return apartments;
};

const mapStateToProps = state => ({
    apartments: getApartments(state.apartments)
});

const mapDispatchToProps = dispatch => ({
    addApartmentToStore: (lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name) =>
    dispatch(addApartmentToStore(lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SoloApartmentPage);