import React from 'react'
import s from './Users.module.css'
import {Avatar,} from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'
import { unfollowedApi, followedApi } from '../../api/api';


let  Users = (props) => {

 let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

    return ( <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currenPage === p && s.page}
                        onClick={(e) => {props.onPageChange(p) }}> {p} </span>

                })}
            </div>

            { props.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                            <NavLink  to={'/profile/'+u.id}>
                            <Avatar  src={u.photos.small }/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                            ? <button onClick={() => {

                                unfollowedApi(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.followed(u.id)
                                        }
                                    })

                                
                            }} >unFollow</button>
                            : <button onClick={() => {
                                followedApi(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.followed(u.id)
                                    }
                                })
                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                </div>)
            }
        </div>
    )
}



export default Users