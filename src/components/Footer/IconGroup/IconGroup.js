import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

class IconGroup extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='iconGroup'>
                <a href=""><InstagramIcon fontSize={"large"}/></a>
                <a href=""><MailOutlineIcon fontSize={"large"}/></a>
                <a href=""><PhoneIphoneIcon fontSize={"large"}/></a>
            </div>
        )
    }

}

export default IconGroup;