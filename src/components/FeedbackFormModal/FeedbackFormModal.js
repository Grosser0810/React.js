import React from "react";
import './FeedbackFormModal.css'
import CloseIcon from '@material-ui/icons/Close';

class FeedbackFormModal extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div className='feedbackModal'>
                <CloseIcon onClick={this.props.handlerModalForm}/>
                <div className='form'>
                    <span className='feedbackTitle'>Обратная связь</span>
                    <form action="">
                        <div className='nameForm'>
                            <label htmlFor="">Представтесь, пожалуйста:</label>
                            <input type="text" placeholder='Введите имя/псевдоним'/>
                        </div>
                        <div className='phoneForm'>
                            <label htmlFor="">Телефон</label>
                            <input type="text"/>
                            <span>или</span>
                        </div>

                        <div className='mailForm'>
                            <label htmlFor="">e-mail</label>
                            <input type="email" placeholder='Введите E-mail'/>
                        </div>
                        <div>
                            <label htmlFor="">текст</label>
                            <textarea cols="30" rows="10" placeholder='Введите текст сообщения...'></textarea>
                        </div>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default FeedbackFormModal;