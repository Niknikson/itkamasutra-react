import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { userProfileThunk, getUserStatusThunk, upDateStatusThunk } from '../../redux/content-reducer'
import {  withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';


class ContentContauner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.isAuth === true ) {
            userId = this.props.userId
        }
        this.props.userProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
        
    }
    render() { 
        return (<Content {...this.props} profile={this.props.profile} status={this.props.status}
            upDateStatusThunk={this.props.upDateStatusThunk}
        />
        )}}

let mapStateToProps = (state) => ({
    profile: state.contentState.profile,
    status: state.contentState.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(connect(mapStateToProps, { userProfileThunk, getUserStatusThunk, upDateStatusThunk }),
    withRouter,
    // withAuthRedirect
    )(ContentContauner)
    
