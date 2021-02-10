import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import { setUserData, unfolowedThunk } from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.unfolowedThunk()
    }


    render() {

        return (<Header {...this.props}  />

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

export default connect(mapStateToProps, { setUserData, unfolowedThunk})(WithRouteHeader)
