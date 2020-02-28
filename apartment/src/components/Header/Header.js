import React from "react";

import './Header.css'
import FavoritesButton from "../FavoritesButton/FavoritesButton";

const Header = () => {
    return (
        <div>
            <div className='header-panel'>
                <div className='flex'>
                    <div className='logo'>LOGO</div>
                    <FavoritesButton/>
                </div>
            </div>
        </div>
    )
};

export default Header;