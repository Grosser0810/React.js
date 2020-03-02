import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ApartmentList from "../components/ApartmentList/ApartmentList";



const StartPage = ({onSearchPressed, onSearchPressedMore, onSearchChanged, searchString, apartments}) => {
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
            <div className='more container'>
                <button onClick={onSearchPressedMore} className={apartments.length === 0 ? 'hidden button' : 'button'}>Показать ещё</button>
            </div>
        </div>
    )
};

export default StartPage;
