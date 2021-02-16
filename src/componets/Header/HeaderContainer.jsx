import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import { logoutThunk, setUserData, unfolowedThunk } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
   
    render() {
        return (<Header {...this.props} logoutThunk={this.props.logoutThunk} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

let WithRouteHeader = withRouter(HeaderContainer)

export default connect(mapStateToProps, { setUserData, logoutThunk})(WithRouteHeader)
