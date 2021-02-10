import React from 'react'
import { connect } from 'react-redux'
import {
    followed, disabelFollowAc, getUsersThunkCreator, getNewPagUserThunk, folowedThunk, unfolowedThunk
} from '../../redux/users-reducer'
import Users from './Users'
import Prelouder from '../../componets/Prelouder/Prelouder'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


class UsersAC extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currenPage, this.props.pageSize)
    }
    onPageChange = (pageNuber) => {
        this.props.getNewPagUserThunk(pageNuber, this.props.pageSize)
        // this.props.setCurrenPage(pageNuber)
        // this.props.isFethcing(true)
        // resUsersApi(pageNuber, this.props.pageSize).then(response => {
        //     this.props.isFethcing(false)
        //     this.props.getUsers(response.items)
        // })
    }
    render() {
        return <>
            {this.props.isFetching ? <Prelouder /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currenPage={this.props.currenPage}
                users={this.props.users}
                onPageChange={this.onPageChange}
                disabelFollow={this.props.disabelFollow}
                folowedThunk={this.props.folowedThunk}
                unfolowed={this.props.unfolowed}

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



export default compose(connect(mapStateToProps, {
         followed,
         disabelFollowAc,
         getUsersThunkCreator,
         getNewPagUserThunk,
         folowedThunk,
    unfolowed: unfolowedThunk,
}),
    // withAuthRedirect
)(UsersAC)

    











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
// }  or



    // connect(mapStateToProps,
    // {     
    //     followed,
    //     disabelFollowAc,
    //     getUsersThunkCreator,
    //     getNewPagUserThunk,
    //     folowedThunk,
    //     unfolowed: unfolowedThunk,     //
    // })(UsersAC)





