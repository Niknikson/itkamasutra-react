import React from 'react'
import Dialog from './Dialog'
import { addMessageActionCreator, upDateNewMessageActionCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';


// const DialogContainer = () => {
//     return <StoreContext.Consumer>
//             { (store) => {
//                 let state = store.getState().dialogState
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//                 let onMessageChange = (text) => {
//                     store.dispatch(upDateNewMessageActionCreator(text));
//                 };
//               return  <Dialog
//                     addMessage={addMessage}
//                     onMessageChange={onMessageChange}
//                     newMessageText={state.newMessageText}
//                     messageData={state.messageData}
//                     dialogsData={state.dialogsData} />
//             }
//         }
//         </StoreContext.Consumer>   
// }

let mapStateToProps = (state) => {
    return {
        dialogState: state.dialogState 
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