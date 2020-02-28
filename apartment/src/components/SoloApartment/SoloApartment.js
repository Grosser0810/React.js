import React from "react";
import './SoloApartment.css';

class SoloApartment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apartment: this.props.apartment,
        }
    }

    render() {
        const apartment = this.props.apartment;

        return (
            <div className='apartment'>
                {
                    apartment !== undefined ?
                        <div className='apartmentCard'>

                            <div className='img'>
                                <img src={apartment.img_url} alt=""/>
                            </div>
                            <div className='title'>
                                {apartment.title}
                            </div>
                            <div className='flex'>
                                <table>
                                    <thead>
                                    <tr>
                                        <td>Комнаты:</td>
                                        <td>{apartment.bedroom_number}</td>
                                    </tr>
                                    <tr>
                                        <td>Ванные комнаты:</td>
                                        <td>{apartment.bathroom_number === '' ? "-" : apartment.bathroom_number}</td>
                                    </tr>
                                    <tr>
                                        <td>Автомобильные места:</td>
                                        <td>{apartment.car_spaces === '' ? "-" : apartment.car_spaces}</td>
                                    </tr>
                                    </thead>
                                </table>
                                <div className='description'>{apartment.summary}</div>
                            </div>
                        </div>
                        : <div></div>
                }
            </div>
        )
    }

};

export default SoloApartment;