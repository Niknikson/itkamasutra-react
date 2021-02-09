import React from 'react'
import Content from './Content'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/content-reducer'
import { withRouter } from 'react-router-dom'

class ContentContauner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
           return userId = 2;
        }
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.getUserProfile(response.data)
            })
    }


    render() {

        return (<Content {...this.props} profile={this.props.profile} />

        )
    }
}



let mapStateToProps = (state) => {
    return {
        profile: state.contentState.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (profile) => {
            dispatch(getUserProfile(profile))
        },
    }
}


let WithRouterContent = withRouter(ContentContauner)

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterContent)
