import React from 'react';
import Footer from "./components/Footer/Footer";
import FeedbackForm from './components/FeedbackForm/FeedbackForm'


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
                <Footer handlerModal={this.handlerModal}/>
            </div>
        )
    }
}

export default App;
