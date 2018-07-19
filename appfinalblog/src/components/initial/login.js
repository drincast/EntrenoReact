import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CRYPTO from 'crypto-js';

import LoginFormEnd from './loginformend';

const Login = () =>{
    const formFuction = (data) => {
        let val =  CRYPTO.enc.Utf16.parse(data.password);
        console.log(val.toString());
        
        console.log(CRYPTO.SHA3(val, {outputLength: 256}));
        console.log(CRYPTO.enc.Utf16.stringify(val));
        console.log(CRYPTO.SHA3(data.password).toString());
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