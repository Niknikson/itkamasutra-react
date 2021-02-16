import React from 'react'
import { connect } from 'react-redux'
import {
    followed, disabelFollowAc, getUsersThunkCreator, getNewPagUserThunk, folowedThunk, unfolowedThunk
} from '../../redux/users-reducer'
import Users from './Users'
import Prelouder from '../../componets/Prelouder/Prelouder'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getUsers, getPageSize, getDisabelFollow, getIsFetching, getCurrenPage, getTotalUsersCount  } from '../../redux/users-selectors'


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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currenPage: getCurrenPage(state),
        isFetching: getIsFetching(state),
        disabelFollow: getDisabelFollow(state),
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





