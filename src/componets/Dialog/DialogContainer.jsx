import Dialog from './Dialog'
import React from 'react';
import { addMessageActionCreator, upDateNewMessageActionCreator } from '../../redux/dialog-reducer';


const DialogContainer = (props) => {
   
    let state = props.store.getState().dialogState
  
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(upDateNewMessageActionCreator(text));
    };

    return (
        <Dialog addMessage={addMessage}
            onMessageChange={onMessageChange}
            newMessageText={state.newMessageText }
            messageData={state.messageData }
            dialogsData={state.dialogsData }
            />
    )
};

export default DialogContainer; 