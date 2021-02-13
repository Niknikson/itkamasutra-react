import React from 'react'


 const LoginForm = (props) => {
     return (
         <form>
             <div>
                 <input placeholder={"Login" }/>
             </div>
             <div>
                 <input placeholder={"Pasword"} /> Remeber me
             </div>
             <div>
                 <input type={'checkboox' }/>
             </div>
             <div>
                 <buton>Login</buton>
             </div>
         </form>
    )
}


const Login = (props) => {
    return (<div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
    )
}


export default Login


