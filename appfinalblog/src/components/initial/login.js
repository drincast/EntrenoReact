import React from 'react';
import { Field, reduxForm } from 'redux-form'

import LoginFormEnd from './loginformend';

const Login = () =>{
    const formFuction = (data) => {
        console.log("in login", data);
    }

    return(
        <div>
            <h2>Login</h2>
            <LoginFormEnd onSubmit={formFuction} nuevo="nuevo"></LoginFormEnd>
        </div>
    )
}

export default Login