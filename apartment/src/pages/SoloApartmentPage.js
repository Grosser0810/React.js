import React from "react";
import SoloApartment from "../components/SoloApartment/SoloApartment";
import {connect} from 'react-redux';
import {addApartmentToStore, deleteApartment} from "../actions/actions";

class SoloApartmentPage extends React.Component{

    addApartmentToFavorites = (lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name, price_type,) => {
        this.props.addApartmentToStore(lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name, price_type,)
    };

    deleteApartmentInStore = (id) => {
        this.props.deleteApartment(id)
    };

    render() {
        console.log(this.props.apartments);
        return(
            <div>
                <SoloApartment
                    addApartmentToFavorites={this.addApartmentToFavorites}
                    deleteApartmentInStore={this.deleteApartmentInStore}
                    apartments={this.props.apartments}
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
    apartments: getApartments(state.apartments),

});

const mapDispatchToProps = dispatch => ({
    addApartmentToStore: (lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name, price_type,) =>
    dispatch(addApartmentToStore(lister_url, img_url, title, price_formatted, bedroom_number, bathroom_number, car_spaces, summary,updated_in_days_formatted, datasource_name, price_type,)),
    deleteApartment: id => dispatch(deleteApartment(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SoloApartmentPage);