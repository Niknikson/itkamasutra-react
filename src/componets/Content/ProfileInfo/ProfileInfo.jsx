import React from 'react';
import s from './ProfileInfo.module.css';
import Prelouder from '../../../componets/Prelouder/Prelouder'

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Prelouder/>
    }
    return (
        <div >
            <img src={props.profile.photos.large}   />
        </div>

    );
}

export default ProfileInfo;