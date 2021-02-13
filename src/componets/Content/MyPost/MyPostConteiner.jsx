import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, upDateNewPostActionCreator } from '../../../redux/content-reducer';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        postData: state.contentState.postData ,
        newPostText: state.contentState.newPostText 
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;
