import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { logoutThunk, loginThunk } from '../../../redux/auth-reducer'
import { maxLenghtCreator, required } from '../../../utils/validators/validators'
import { Input } from '../../Prelouder/FormsControls/FormsControls'

const maxLength30 = maxLenghtCreator(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={'email'} component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} type={'password'} component={Input} validate={[required, maxLength30]}/>  
             </div>
            <div>
                <Field type={'checkbox'} name={'remamberMe'} component={Input} validate={[required, maxLength30]}/> Remeber me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe )
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }


    return (<div>
        <h1>Login</h1>
        <LoginRedaxForm onSubmit={onSubmit } />
    </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}



export default connect(mapStateToProps , { loginThunk})(Login)


