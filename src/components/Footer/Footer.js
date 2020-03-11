import React from "react";
import './Footer.css'
import IconGroup from "./IconGroup/IconGroup";

class Footer extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div className='footerBlock'>
                <h2>Продвигайте бизнес рационально</h2>
                <div>
                    <button onClick={this.props.handlerModal}>Оставить заявку на звонок</button>
                </div>
                <IconGroup/>
            </div>
        )
    }
}

export default Footer;