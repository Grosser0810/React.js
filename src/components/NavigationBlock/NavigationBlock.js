import React from "react";
import './NavigationBlock.css';

class NavigationBlock extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div className='navigationBlock'>
                <button>Оставить заявку</button>
                <button>-</button>
            </div>
        )
    }
}

export default NavigationBlock;