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
                    newPostText={props.contentState.newPostText}
                    dispatch={props.dispatch}
                   />
            </div>
    
         </div>
    );
  }

export default Content;