import React from "react";
import './SoloApartment.css';

class SoloApartment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apartment: this.props.apartment,
        }
    }

    addApartment = () => {
        const apartment = this.props.apartment;
        this.props.addApartmentToFavorites(
            apartment.lister_url,
            apartment.img_url,
            apartment.title,
            apartment.price_formatted,
            apartment.bedroom_number,
            apartment.bathroom_number,
            apartment.car_spaces,
            apartment.summary,
            apartment.updated_in_days_formatted,
            apartment.datasource_name,
        )
    };

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
                            <p className='soloPrice'>
                                {apartment.price_formatted}
                            </p>
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
                            <div>
                                <button
                                    className='addToFavorites'
                                    onClick={this.addApartment}
                                >Добавить в избранное
                                </button>
                            </div>
                        </div>
                        : <div></div>
                }
            </div>
        )
    }

};

export default SoloApartment;