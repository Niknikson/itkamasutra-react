import React from 'react'
import { connect } from 'react-redux'
import { getUsers, followed,setCurrenPage, isFethcing } from '../../redux/users-reducer'
import * as axios from 'axios'
import Users from './Users'
import Prelouder from '../../componets/Prelouder/Prelouder'


class UsersAC extends React.Component {

    componentDidMount() {
        this.props.isFethcing(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&counnt=${this.props.pageSize}`)
            .then(response => {
                this.props.isFethcing(false)
                this.props.getUsers(response.data.items)
               
            })

    }
     
    onPageChange = (pageNuber) => {
        this.props.setCurrenPage(pageNuber)
        this.props.isFethcing(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNuber}&counnt=${this.props.pageSize}`).then(response => {
            this.props.isFethcing(false)
            this.props.getUsers(response.data.items)
        })
    }

    
    render() {
        return <>
        {this.props.isFetching?<Prelouder /> : null}
        <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currenPage={this.props.currenPage}
        users={this.props.users}
        followed={this.props.followed}
        onPageChange={this.onPageChange}
        
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currenPage: state.usersPage.currenPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//             getUsers: (users) => {
//              dispatch(getUsers(users))
//             },
//              followed: (userId) => {
//              dispatch(followed(userId))
//              },
//             setCurrenPage: (page) => {
//              dispatch(setCurrenPage(page))
//              },
//              isFethcing: (isFetch) => {
//              dispatch(isFethcing(isFetch))
//              },
//             // setTotalCount: (totalUsers) => {
//             // dispatch(setTotalCountAC(totalUsers))
//             //  },
//     }
// }

 export default  connect(mapStateToProps, 
           {getUsers,
             followed,
            setCurrenPage,
             isFethcing,
             })(UsersAC)



















