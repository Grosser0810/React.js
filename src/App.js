import React from 'react';
import Footer from "./components/Footer/Footer";
import FeedbackForm from './components/FeedbackFormModal/FeedbackForm'
import FirstSection from "./components/FirstSection/FirstSection";
import MultiCarousel from "./components/MultiCarousel/MultiCarousel";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hiddenModal: false,
        }
    }


    handlerModal = () => {
        this.setState(()=>{
            return {hiddenModal: !this.state.hiddenModal}
        })
    };

    render() {
        if(this.state.hiddenModal) return <FeedbackForm handlerModal={this.handlerModal}/>
        return (
            <div className="App">
                <FirstSection/>
                <MultiCarousel/>
                <Footer handlerModal={this.handlerModal}/>
            </div>
        )
    }
}

export default App;
