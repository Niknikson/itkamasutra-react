import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={s.nav}>
            <div className={s.container}>
                <NavLink to='/content'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Dialogs</NavLink>
            </div>

        </div>
    );
}

export default Nav;