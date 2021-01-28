import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const MyPost = (props) => {
    const classes = useStyles();
    // let postData = [
    //     { id: 1, message: 'Hello', lickesCount: 23 },
    //     { id: 2, message: 'How are you my freand', lickesCount: 49 },
    // ];

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPosts();
        // props.updateNewPostText("");

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    let postElement = props.postData
        .map((p) => <Post message={p.message} lickesCount={p.lickesCount} />)

    return (
        <div className={s.myPost}>
            <div>My Post</div>
            <div>
                <p><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="" id="" cols="15" rows="5" className={s.textarea}></textarea></p>
            </div>
            <div>
                {/* <button onClick={addPost} >Add post</button> */}
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={addPost}>
                    Add
                   </Button>
            </div>
            <div className={s.post}>
                {postElement}
            </div>

        </div>

    );
}

export default MyPost;