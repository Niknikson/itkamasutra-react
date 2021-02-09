import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import { setUserData } from '../../redux/auth-reducer'
import { authApi } from '../../api/api'

class HeaderContainer extends React.Component {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        authApi().then(response => {
                if (response.resultCode === 0) {       // статус  0 вертається якщо пройшла перевірка авторизаціі і вертаються дані
                    let {id, email, login} = response.data
                    this.props.setUserData(id, email, login)
                    
                }
                
            })
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

export default connect(mapStateToProps, {setUserData})(WithRouteHeader)
