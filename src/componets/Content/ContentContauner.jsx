import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { userProfileThunk } from '../../redux/content-reducer'
import {  withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';


class ContentContauner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
         userId = 14802
        }
        this.props.userProfileThunk(userId)
         debugger
    }
    render() { 
        return (<Content {...this.props} profile={this.props.profile} />
        )}}

let mapStateToProps = (state) => ({
        profile: state.contentState.profile,   
})

export default compose(connect(mapStateToProps, { userProfileThunk }),
    withRouter,
    // withAuthRedirect
    )(ContentContauner)
    
