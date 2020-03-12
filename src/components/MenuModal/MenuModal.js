import React from "react";

import './MenuModal.css'
import CloseIcon from '@material-ui/icons/Close';

class MenuModal extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='modalMenuBlock'>
                <CloseIcon onClick={this.props.handlerModalMenu}/>
                <ul className='modalNav'>
                    <li><a href="">Главная</a></li>
                    <li><a href="">Почему мы?</a></li>
                    <li><a href="">Вы получаете</a></li>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Наши работы</a></li>
                    <li><a href="">Наши услуги</a></li>
                </ul>
            </div>
        )
    }

}

export default MenuModal;