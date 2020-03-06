import React from "react";
import './FavoritesButton.css';
import {Link} from "react-router-dom";

const FavoritesButton = ({favoriteApartments}) => {
    return(
        <div>
            <Link to='/' className='favoritesButton'>Главная</Link>
            <Link to='/favorite' className='favoritesButton'>
                Избранное
                <div className={favoriteApartments.length === 0 ? 'hidden' : 'number'}>
                    <span>{favoriteApartments.length}</span>
                </div>
            </Link>
        </div>
    )
};

export default FavoritesButton;