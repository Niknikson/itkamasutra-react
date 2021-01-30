import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';
import useStyles  from "./styles";
import { addPostActionCreator, apDateNewPostActionCreator } from '../../../redux/state';



const MyPost = (props) => {
    const classes = useStyles();
    
    let newPostElement = React.createRef();
    let postElement = props.postData
        .map((p) => <Post message={p.message} lickesCount={p.lickesCount} />)



    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator())
        // props.updateNewPostText("");
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(apDateNewPostActionCreator(text));};

    
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