import React from 'react'
import Dialog from './Dialog'
import { addMessageActionCreator, upDateNewMessageActionCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogState: state.dialogState,
         
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())} ,
        onMessageChange: (text) => {dispatch(upDateNewMessageActionCreator(text))} 
    }
}

// compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialog)
// let AuthRedirectComponet = withAuthRedirect(Dialog)
// const DialogContainer = (connect(mapStateToProps, mapDispatchToProps))(AuthRedirectComponet)

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog)