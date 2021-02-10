import React from 'react'
import Dialog from './Dialog'
import { addMessageActionCreator, upDateNewMessageActionCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogState: state.dialogState,
         isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())} ,
        onMessageChange: (text) => {dispatch(upDateNewMessageActionCreator(text))} 
    }
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)



export default DialogContainer; 