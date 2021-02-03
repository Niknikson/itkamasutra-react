import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, upDateNewPostActionCreator } from '../../../redux/content-reducer';
import { connect } from 'react-redux';



// const MyPostContainer = (props) => {
//     return  <StoreContext.Consumer>
//             {
//                 (store) => {
//                 let state = store.getState()
            
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }

//                 let onPostChange = (text) => {
//                     store.dispatch(upDateNewPostActionCreator(text));
//                 }
           
//                 return   <MyPosts
//                     upDateNewPostText={onPostChange}
//                     addPost={addPost}
//                     contentState={state.contentState}
//                     newPostText={state.contentState.newPostText} />
//             }
//         }
//         </StoreContext.Consumer>          
// }

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
