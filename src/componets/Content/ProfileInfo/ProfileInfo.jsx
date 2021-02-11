import React from 'react';
import s from './ProfileInfo.module.css';
import Prelouder from '../../../componets/Prelouder/Prelouder'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Prelouder/>
    }
    return (
        <div className={s.marin}>
           
            <img src={props.profile.photos.small} />
            <div> {props.profile.fullName}</div>
            <div></div>
            
            <ProfileStatus status={props.status} upDateStatusThunk={props.upDateStatusThunk} />
        </div>

    );
}

export default ProfileInfo;