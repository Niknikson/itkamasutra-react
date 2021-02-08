import React from "react";
import s from './Users.module.css'
import * as axios from 'axios'


let Users1 = (props) => {
    
    if (props.users.lenght === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.getUsers(response.data.items)
            })
    }

    return <div>
    
</div>




}