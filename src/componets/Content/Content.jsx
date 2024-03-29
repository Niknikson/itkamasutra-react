import React from 'react';
import s from './Content.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostConteiner';

const Content = (props) => {
    return (
        <div className={s.content}>
            <div>
                <div className={s.profile}>
                    <ProfileInfo
                        profile={props.profile}
                        status={props.status}
                        upDateStatusThunk={props.upDateStatusThunk}
                    />
                </div>
                
                <div className={s.postcontainer}>
                    <MyPostContainer />
                </div>
               
            </div>

        </div>
    );
}

export default Content;