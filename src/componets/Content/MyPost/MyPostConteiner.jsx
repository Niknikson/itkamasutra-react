import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, upDateNewPostActionCreator } from '../../../redux/content-reducer';


const MyPostContainer = (props) => {
    
    let state = props.store.getState()
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    
    let onPostChange = (text) => {
        props.store.dispatch(upDateNewPostActionCreator(text));
    }

    return (<MyPosts
        upDateNewPostText={onPostChange}
        addPost={addPost}
        postData = {state.contentState.postData}
        newPostText={state.contentState.newPostText}
        />)
}

export default MyPostContainer;
