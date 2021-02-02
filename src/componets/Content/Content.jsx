import React from 'react';
import s from './Content.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostConteiner';

const Content = (props) => {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo />
                <MyPostContainer
                    store= {props.store}
                    
                />

            </div>

        </div>
    );
}

export default Content;