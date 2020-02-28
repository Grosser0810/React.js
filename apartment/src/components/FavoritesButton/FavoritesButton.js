import React from "react";
import './FavoritesButton.css';
import {Link} from "react-router-dom";

const FavoritesButton = () => {
    return(
        <div>
            <Link to='/' className='favoritesButton'>Главная</Link>
            <Link to='/favorite' className='favoritesButton'>Избранное</Link>
        </div>
    )
};

export default FavoritesButton;