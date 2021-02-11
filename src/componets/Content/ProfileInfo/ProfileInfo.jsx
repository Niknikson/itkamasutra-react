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
            { props.profile.fullName}
            <img src={props.profile.photos.small} />
           
            <ProfileStatus status={ 'Hellou'} />
        </div>

    );
}

export default ProfileInfo;