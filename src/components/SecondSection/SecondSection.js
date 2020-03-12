import React from "react";
import './SecondSection.css'
import NavigationBlock from "../NavigationBlock/NavigationBlock";

class SecondSection extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='secondSection'>
                <div className='upright'>стратегия охват результат вовлечение коммуникация</div>
                <div className='container'>
                    <NavigationBlock handlerModalMenu={this.props.handlerModalMenu}/>
                    <div className='flex'>
                        <div className='left'>
                            <span>01.</span>
                            <p>Мы создаем позиционирование <br/>бренда и <b>стратегию продвижения в социальных сетях.</b></p>
                        </div>
                        <div className='right'>
                            <span>02.</span>
                            <p>Страницы станут площадкой для близкой и <b>эффективной коммуникации с клиентами.</b></p>
                        </div>
                        <div className='whiteCube'>
                            <p>Мы сделаем так, чтобы вашим брендом восхищались.</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default SecondSection;