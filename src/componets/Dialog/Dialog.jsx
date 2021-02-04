import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Button from '@material-ui/core/Button';
import useStyles from './styles'



const Dialog = (props) => {
    
    const classes = useStyles();
    let state = props.dialogState
    let dialogElement = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messageElement = state.messageData.map((m) => <Message message={m.message} key={m.id} />)
    let newMessageText = state.newMessageText

    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem} >
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div className={s.boton}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={addMessage}>
                        Send
             </Button>
                </div>

                <div>
                    <p><textarea onChange={onMessageChange}  value={newMessageText} name="" id="" cols="15" rows="5" className={s.textarea}></textarea></p>
                </div>
            </div>
        </div>
    )
};

export default Dialog; 