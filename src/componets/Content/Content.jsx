import React from 'react';
import s from './Content.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPost/MyPost';
    
const Content= (props) =>{
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo />
                <MyPost
                    postData={props.contentState.postData}
                    addPosts={props.addPosts}
                    newPostText={props.contentState.newPostText}
                    updateNewPostText={props.updateNewPostText}
                   />
            </div>
    
         </div>
    );
  }

export default Content;