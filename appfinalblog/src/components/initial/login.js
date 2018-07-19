import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CRYPTO from 'crypto-js';

import LoginFormEnd from './loginformend';

const Login = () =>{
    const formFuction = (data) => {
        let valParse =  CRYPTO.enc.Utf16.parse(data.password);
        let valstringify =  CRYPTO.enc.Utf16.stringify(data.password);
        console.log('valParse', valParse);
        console.log('valParse.toString()', valParse.toString());
        console.log('valstringify', valstringify);
        console.log('valstringify.toString()', valstringify.toString());

        //convirtiendo
        let valHex = CRYPTO.enc.Hex.parse(valParse.toString());
        console.log('valHex', valHex, 'valHex.toString()', valHex.toString());
        console.log('respuesta', CRYPTO.enc.Utf16.stringify(valHex));
        
        
        // console.log(CRYPTO.SHA3(val, {outputLength: 256}));
        // console.log(CRYPTO.enc.Utf16.stringify(val));
        //console.log(CRYPTO.SHA3(data.password).toString());
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