import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import StartPage from './pages/StartPage'
import SoloApartmentPage from './pages/SoloApartmentPage'
import FavoritesPage from './pages/FavoritesPage'

import {connect} from 'react-redux';
import {addApartmentToStore} from "./actions/actions";




class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            message: '',
            favoritesApartments: JSON.parse(localStorage.getItem('favoriteLocal')) || [],
            pageNumber: 1,
        };
    }

    componentDidMount() {
        if (this.props.apartments.length === 0) {
            this.startLoad()
        }
    }

    onSearchChanged = (searchString) => {
        this.setState({
            searchString
        })
    };

    executeQuery(query) {
        fetch('https://cors-anywhere.herokuapp.com' + query)
            .then(response => response.json())
            .then(json => this.handleResponse(json.response))
            .catch(error =>
                this.setState({
                    message: 'Что то пошло не так' + error
                }));
    }

    handleResponse(response) {
        let arrApartments = response.listings;
        this.setState(() => {
            return {
                loadedApartment: arrApartments,
                pageNumber: this.state.pageNumber + 1,
            }
        });
        this.props.addApartmentToStore(arrApartments)
    }

    onSearchPressed() {
        this.setState(() => {
            return {pageNumber: 1}
        });
        let query = this.urlForQueryAndPage('place_name', this.state.searchString, 1);
        return this.executeQuery(query);
    }

    executeQueryMore(query) {
        fetch('https://cors-anywhere.herokuapp.com' + query)
            .then(response => response.json())
            .then(json => this.handleResponseMore(json.response))
            .catch(error =>
                this.setState(() => {
                    return {message: 'Что то пошло не так' + error}
                }))
    }

    handleResponseMore(response) {
        let arrApartments = response.listings;
        this.setState(() => {
            return {
                pageNumber: this.state.pageNumber + 1,
                loadedApartment: [...this.state.loadedApartment, ...arrApartments],
            }
        });
        this.props.addApartmentToStore(arrApartments)
    }

    onSearchPressedMore() {
        let query = this.urlForQueryAndPage('place_name', this.state.searchString || 'london', this.state.pageNumber);
        return this.executeQueryMore(query);
    }

    startLoad() {
        let query = this.urlForQueryAndPage('place_name', 'london', 1);
        return this.executeQuery(query);
    }

    urlForQueryAndPage = (key, value, pageNumber) => {
        let data = {
            country: 'uk',
            pretty: '1',
            encoding: 'json',
            listing_type: 'rent',
            action: 'search_listings',
            page: pageNumber
        };
        data[key] = value;

        let queryString = Object.keys(data)
            .map(key => key + '=' + encodeURIComponent(data[key]))
            .join('&');

        return '/api.nestoria.co.uk/api?' + queryString;
    };

    addApartmentsToFavorite = (apartment) => {
        this.setState(() => {
            for (let i = 0; i < this.state.favoritesApartments.length; i++) {
                if (this.state.favoritesApartments[i].id === parseInt(apartment.lister_url.match(/\d+/))) {
                    alert('уже добавлен в избранное');
                    return this.state.favoritesApartments;
                }
            }
            let arr = [];
            arr.push({
                id: parseInt(apartment.lister_url.match(/\d+/)),
                img_url: apartment.img_url,
                title: apartment.title,
                price_formatted: apartment.price_formatted,
                bedroom_number: apartment.bedroom_number,
                bathroom_number: apartment.bathroom_number,
                car_spaces: apartment.car_spaces,
                summary: apartment.summary,
                updated_in_days_formatted: apartment.updated_in_days_formatted,
                datasource_name: apartment.datasource_name,
                price_type: apartment.price_type,
                added: true,
            });
            localStorage.setItem('favoriteLocal', JSON.stringify([...this.state.favoritesApartments, ...arr]));
            return {favoritesApartments: [...this.state.favoritesApartments, ...arr]}
        });
    };

    deleteTask = id => {
        this.setState(() => {
            let apartments = this.state.favoritesApartments;
            let newApartments = apartments.filter(task => task.id !== id);
            localStorage.setItem('favoriteLocal', JSON.stringify(newApartments));
            return {favoritesApartments: newApartments}
        })
    };

    render() {
        
        return (
            <div className="App">
                <BrowserRouter >
                    <Header favoriteApartments={this.props.apartments}/>

                    <Switch>
                        <Route exact path='/'
                               render={(props) => <StartPage
                                   onSearchPressed={this.onSearchPressed.bind(this)}
                                   onSearchChanged={this.onSearchChanged}
                                   searchString={this.state.searchString}
                                   apartments={this.props.apartments}
                                   onSearchPressedMore={this.onSearchPressedMore.bind(this)}
                                   {...props}
                               />}
                        />
                        <Route path='/apartment/:id'
                               render={(props) => <SoloApartmentPage
                                   apartments={this.props.apartments}
                                   addApartmentsToFavorite={this.addApartmentsToFavorite}
                                   deleteTask={this.deleteTask}
                                   {...props}
                               />}
                        />
                        <Route path='/favorite'
                               render={(props) => <FavoritesPage
                                   favoritesApartments={this.state.favoritesApartments}
                                   {...props}
                               />}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

const getApartments = (apartments) => {
    return apartments;
};

const mapStateToProps = state => ({
    apartments: getApartments(state.apartments),
});

const mapDispatchToProps = dispatch => ({
    addApartmentToStore: (apartments) =>
        dispatch(addApartmentToStore(apartments)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
