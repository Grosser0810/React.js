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
            isLoading: false,
            message: '',
            loadedApartment: [],
        };
    }

    onSearchChanged = (searchString) => {
        this.setState({
            searchString
        })
    };

    executeQuery(query) {

        this.setState({isLoading: true});
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
            return {loadedApartment: arrApartments}
        })
    }

    onSearchPressed() {
        let query = this.urlForQueryAndPage('place_name', this.state.searchString, 1);
        return this.executeQuery(query);
    }

    onSearchPressedState() {
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

    render() {
        //this.onSearchPressedState().bind(this); // как то надо загружать сходу квартиры?????????
        //console.log(this.state.loadedApartment)

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
                                   {...props}
                               />}

                        />
                        <Route path='/apartment'
                               render={(props) => <SoloApartmentPage
                                   //apartments={this.state.loadedApartment}
                                   {...props}
                               />}
                        />
                        <Route path='/favorite'
                               render={(props) => <FavoritPage
                                   //apartments={this.state.loadedApartment}
                                   {...props}
                               />}
                        />
                    </Switch>

                    {/*<SearchBar*/}
                    {/*    onSearchPressed={this.onSearchPressed.bind(this)}*/}
                    {/*    onSearchChanged={this.onSearchChanged}*/}
                    {/*/>*/}
                    {/*<ApartmentList*/}
                    {/*    apartments={this.state.loadedApartment}*/}
                    {/*    searchString={this.state.searchString}*/}
                    {/*/>*/}

                </BrowserRouter>

            </div>
        );
    }
}


export default App;
