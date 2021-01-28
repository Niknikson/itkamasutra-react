import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id;
//     return (<div className={s.dialog}>
//         <NavLink to={path}>{props.name}</NavLink>
//     </div>)
// };

// const Message = (props) => {
//     return (
//         <div className={s.dialog}>{props.message}</div>
//     )
// };

const Dialog = (props) => {

    // let dialogsData = [
    //     { id: 1, name: 'Nick' },
    //     { id: 2, name: 'Kris' }
    // ];
    // let messageData = [
    //     { id: 1, message: 'Hello' },
    //     { id: 2, message: 'How are you' }
    // ];

    let dialogElement = props.dialogState.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />)

    let messageElement = props.dialogState.messageData.map((m) => <Message message={m.message} />)


    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem} >
                {dialogElement}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
            </div>
            <div className={s.messages}>
                {messageElement}
                {/* <Message message={messageData[0].message} />
                <Message message={messageData[1].message} /> */}
            </div>
        </div>
    )
};

export default Dialog; 