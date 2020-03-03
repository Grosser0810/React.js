import React from "react";
import './FavoritesButton.css';
import {Link} from "react-router-dom";

const FavoritesButton = ({favoriteApartments}) => {
    console.log(favoriteApartments)
    return(
        <div>
            <Link to='/' className='favoritesButton'>Главная</Link>
            <Link to='/favorite' className='favoritesButton'>Избранное<div className='number'><span>{favoriteApartments.length + 1}</span></div></Link>
        </div>
    )
};

export default FavoritesButton;