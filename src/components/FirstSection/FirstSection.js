import React from "react";
import './FirstSection.css'
import NavigationBlock from "../NavigationBlock/NavigationBlock";


class FirstSection extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='firstSection'>
                <div className='upright'>стратегия охват результат вовлечение коммуникация</div>
                <div className='container'>
                    <NavigationBlock handlerModalMenu={this.props.handlerModalMenu}/>
                    <div className='img'>
                        <div className='firstSectionTitle'>
                            <div>Oh what</div>
                            <div>Охват</div>
                        </div>
                        <img src="" alt=""/>
                        <div className='firstSectionFooter'>
                            <p>Агенство</p>
                            <p>Эффективного</p>
                            <p>Продвижения в</p>
                            <p>социальных сетях</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FirstSection;