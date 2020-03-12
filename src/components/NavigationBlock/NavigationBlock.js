import React from "react";
import './NavigationBlock.css';
import MenuIcon from '@material-ui/icons/Menu';

class NavigationBlock extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div className='navigationBlock'>
                <div>Оставить заявку</div>
                <MenuIcon onClick={this.props.handlerModalMenu} />
            </div>
        )
    }
}

export default NavigationBlock;