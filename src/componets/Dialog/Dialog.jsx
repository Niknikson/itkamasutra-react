import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Button from '@material-ui/core/Button';
import useStyles from './styles'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Prelouder/FormsControls/FormsControls';
import { maxLenghtCreator, required } from '../../utils/validators/validators';

const maxLength20 = maxLenghtCreator(20)

const Dialog = (props) => {
    
    
    let state = props.dialogState
    let dialogElement = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messageElement = state.messageData.map((m) => <Message message={m.message} key={m.id} />)
    let newMessageText = state.newMessageText

    // let addMessage = () => {props.addMessage()}
    // let onMessageChange = (e) => {let text = e.target.value;}

    const addMessage = (values) => {
       props.addMessage(values.neMessageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        
        
        <div className={s.dialogs}>
            <div className={s.dialogItem} >
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <AddMessageFormRedax onSubmit={addMessage} />
                </div>
            </div>
        </div>
    )
}





const AddMessageForm = (props) => {
    const classes = useStyles();
    return (
        <form onSubmit={props.handleSubmit} >
            <div  >
                <Field validate={[required, maxLength20]} component={Textarea} name={'neMessageBody'} placeholder={'Typ your message'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form >
    )
}


const AddMessageFormRedax = reduxForm({ form: 'dialogAddMessage' })(AddMessageForm)


export default Dialog; 