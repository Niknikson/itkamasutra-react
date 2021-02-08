import React from "react";
import s from './Users.module.css'
import { Avatar, Button } from '@material-ui/core'
import * as axios from 'axios'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&counnt=${this.props.pageSize}`)
            .then(response => {
                this.props.getUsers(response.data.items)
            })

    }

    onPageChange = (pageNuber) => {
        this.props.setCurrenPage(pageNuber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNuber}&counnt=${this.props.pageSize}`).then(response => {
            this.props.getUsers(response.data.items)
        })
    }

    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
      
        return <div>

            <div>
                {pages.map(p => {
                    return <span className={this.props.currenPage === p && s.page}
                        onClick={(e) => { this.onPageChange(p) }}> {p} </span>

                })}
            </div>

            {
                this.props.users.map(u => <div key={u.id}>

                    <span>
                        <div ><Avatar>H</Avatar></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.followed(u.id) }} >unFollow</button>
                                : <button onClick={() => { this.props.followed(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                </div>)
            }
        </div>
    }


}





export default (Users)

//export default withStyles(styles)(Users)