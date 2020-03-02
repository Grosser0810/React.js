import React from "react";

import {connect} from 'react-redux';
import {deleteApartment} from "../actions/actions";
import FavoritesApartmentList from '../components/FavoritesApartmentstList/FavoritesApartmentsList'

class FavoritPage extends React.Component{

    deleteApartmentInStore = id => {
        const index = this.props.apartments.map(apartments => apartments.id).indexOf(id);
        let tasks = this.props.apartments;
        this.props.deleteApartment(tasks[index].id);
    };

    render() {
        return(
            <div>
                <FavoritesApartmentList
                    apartments={this.props.apartments}
                    deleteApartmentInStore={this.deleteApartmentInStore}
                />
            </div>
        )
    }
}

const getApartments = (apartments) => {
    return apartments;
};

const mapStateToProps = state => ({
    apartments: getApartments(state.apartments)
});

const mapDispatchToProps = dispatch => ({
    deleteApartment: id => dispatch(deleteApartment(id)),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FavoritPage);