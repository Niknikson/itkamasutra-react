import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { getUsersAC, followAC, unfollowAC, currentPageAC } from '../../redux/users-reducer'



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currenPage: state.usersPage.currenPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
            getUsers: (users) => {
                dispatch(getUsersAC(users))
            },
             followed: (userId) => {
                    dispatch(followAC(userId))
                },
             unfollowed: (userId) => {
                        dispatch(unfollowAC(userId))
                    },
            setCurrenPage: (page) => {
                            dispatch(currentPageAC(page))
                        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;

















