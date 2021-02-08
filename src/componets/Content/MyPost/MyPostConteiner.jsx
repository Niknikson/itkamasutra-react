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
        onPostChange: (text) => {
            dispatch(upDateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;
