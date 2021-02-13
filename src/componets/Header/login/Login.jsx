import React from 'react'
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={"Pasword"} name={'pasword'} component={'input'} />  
             </div>
            <div>
                <Field type={'checkbox'} name={'Remamber me'} component={'input'} /> Remeber me
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
        
    }
    return (<div>
        <h1>Login</h1>
        <LoginRedaxForm onSubmit={onSubmit } />
    </div>
    )
}


export default Login


