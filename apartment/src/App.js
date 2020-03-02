import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import StartPage from './pages/StartPage'
import SoloApartmentPage from './pages/SoloApartmentPage'
import FavoritPage from './pages/FavoritPage'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            message: '',
            loadedApartment: [],
            pageNumber: 1,
        };
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
        console.log(arrApartments);
        this.setState(() => {
            return {
                loadedApartment: arrApartments,
                pageNumber: this.state.pageNumber + 1,
            }
        })
    }

    onSearchPressed() {
        this.setState(() => {
            return {pageNumber: 1}
        });
        let query = this.urlForQueryAndPage('place_name', this.state.searchString, 1);
        return this.executeQuery(query);
    }


//-------------------more--------------------------------
    executeQueryMore(query) {
        fetch('https://cors-anywhere.herokuapp.com' + query)
            .then(response => response.json())
            .then(json => this.handleResponseMore(json.response))
            .catch(error =>
                this.setState({
                    message: 'Что то пошло не так' + error
                }));
    }

    handleResponseMore(response) {
        let arrApartments = response.listings;
        this.setState(() => {
            return {
                pageNumber: this.state.pageNumber + 1,
                loadedApartment: [...this.state.loadedApartment, ...arrApartments],
            }
        })
    }

    onSearchPressedMore() {
        let query = this.urlForQueryAndPage('place_name', this.state.searchString, this.state.pageNumber);
        return this.executeQueryMore(query);
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

    render() {

        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path='/'
                               render={(props) => <StartPage
                                   onSearchPressed={this.onSearchPressed.bind(this)}
                                   onSearchChanged={this.onSearchChanged}
                                   searchString={this.state.searchString}
                                   apartments={this.state.loadedApartment}
                                   onSearchPressedMore={this.onSearchPressedMore.bind(this)}
                                   {...props}
                               />}

                        />
                        <Route path='/apartment'
                               render={(props) => <SoloApartmentPage
                                   {...props}
                               />}
                        />
                        <Route path='/favorite'
                               render={(props) => <FavoritPage
                                   {...props}
                               />}
                        />
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}


export default App;
