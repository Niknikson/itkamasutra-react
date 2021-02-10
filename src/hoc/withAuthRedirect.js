import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Components) => {
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />;
            return <Components {...this.props} />;
        }
    }

    
    
    let ConectedComponet = connect(mapStateToProps)(RedirectComponent);

    return ConectedComponet;
}
