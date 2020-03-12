import React from 'react';
import Footer from "./components/Footer/Footer";
import FeedbackFormModal from './components/FeedbackFormModal/FeedbackFormModal'
import FirstSection from "./components/FirstSection/FirstSection";
import MultiCarousel from "./components/MultiCarousel/MultiCarousel";
import MenuModal from "./components/MenuModal/MenuModal";
import SecondSection from "./components/SecondSection/SecondSection";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            handlerModalForm: false,
            handlerModalMenu: false,
        }
    }

    handlerModalForm = () => {
        this.setState({handlerModalForm: !this.state.handlerModalForm})
    };

    handlerModalMenu = () => {
        this.setState({handlerModalMenu: !this.state.handlerModalMenu})
    };

    render() {

        if(this.state.handlerModalForm) return <FeedbackFormModal handlerModalForm={this.handlerModalForm}/>
        if(this.state.handlerModalMenu) return <MenuModal handlerModalMenu={this.handlerModalMenu}/>
        return (
            <div className="App" >
                <FirstSection handlerModalMenu={this.handlerModalMenu}/>
                <SecondSection handlerModalMenu={this.handlerModalMenu}/>
                <MultiCarousel/>
                <Footer handlerModalForm={this.handlerModalForm}/>
            </div>
        )
    }
}

export default App;
