import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ApartmentList from "../components/ApartmentList/ApartmentList";



const StartPage = ({onSearchPressed, onSearchChanged, searchString, apartments}) => {
    return(
        <div>
            <SearchBar
                onSearchPressed={onSearchPressed}
                onSearchChanged={onSearchChanged}
            />
            <ApartmentList
                apartments={apartments}
                searchString={searchString}
            />
        </div>
    )
};

export default StartPage;
