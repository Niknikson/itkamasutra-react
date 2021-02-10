import React from 'react'
import { connect } from 'react-redux'
import { getUsers, followed, setCurrenPage, isFethcing, disabelFollowAc } from '../../redux/users-reducer'
import Users from './Users'
import Prelouder from '../../componets/Prelouder/Prelouder'
import { getUsersApi, resUsersApi } from '../../api/api'

class UsersAC extends React.Component {

    componentDidMount() {
        this.props.isFethcing(true)

        getUsersApi(this.props.currenPage, this.props.pageSize).then(response => {
            this.props.isFethcing(false)
            this.props.getUsers(response.items)
        })
    }

    onPageChange = (pageNuber) => {
        this.props.setCurrenPage(pageNuber)
        this.props.isFethcing(true)
        resUsersApi(pageNuber, this.props.pageSize).then(response => {
            this.props.isFethcing(false)
            this.props.getUsers(response.items)
        })
    }


    render() {
        return <>
            {this.props.isFetching ? <Prelouder /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currenPage={this.props.currenPage}
                users={this.props.users}
                followed={this.props.followed}
                onPageChange={this.onPageChange}
                disabelFollowAc={this.props.disabelFollowAc}
                disabelFollow={this.props.disabelFollow}

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
        disabelFollow: state.usersPage.disabelFollow,
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

export default connect(mapStateToProps,
    {
        getUsers,
        followed,
        setCurrenPage,
        isFethcing,
        disabelFollowAc,
    })(UsersAC)



















