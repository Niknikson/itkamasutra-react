import React from 'react';
import s from './ProfileInfo.module.css';
import Prelouder from '../../../componets/Prelouder/Prelouder'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Prelouder/>
    }
    return (
        <div >
            { props.profile.fullName}
            <img src={props.profile.photos.small} />
            Profile!!!!
            <ProfileStatus status={ 'Hellou'} />
        </div>

    );
}

export default ProfileInfo;