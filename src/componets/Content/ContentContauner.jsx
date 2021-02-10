import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { userProfileThunk } from '../../redux/content-reducer'
import { Redirect, withRouter } from 'react-router-dom'

class ContentContauner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { return userId = 2}
        this.props.userProfileThunk(userId) }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return (<Content {...this.props} profile={this.props.profile} />

        )
    }
}



let mapStateToProps = (state) => {
    return {
        profile: state.contentState.profile,
        isAuth: state.auth.isAuth 
    }
}

let WithRouterContent = withRouter(ContentContauner)

export default connect(mapStateToProps, { userProfileThunk })(WithRouterContent)
