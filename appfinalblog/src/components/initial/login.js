import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CRYPTO from 'crypto-js';
import axios from 'axios';
import { connect } from 'react-redux';

import LoginFormEnd from './loginformend';

const Login = (props) =>{
    const funcProps = () => {
        console.log(props.own);
    }

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

        let dataPost = {
          login: {
            email: data.email,
            password: data.password
          }
        }
        axios.post('https://blog-api-u.herokuapp.com/v1/login', dataPost)
        .then((response)=>{
          console.log(response);
          props.successLoginFunctionDispache(response.data);
          props.history.push('/');
        })
        .catch((error) => {
          console.log(error);
          props.errorLoginFunctionDispache();
        });
    }

    return(
        <div>
            {funcProps()}
            <h2>Login</h2>
            {props.message && <div><br /><h4>{props.message}</h4><br /></div>}
            <LoginFormEnd onSubmit={formFuction} nuevo="nuevo"></LoginFormEnd>
        </div>
    )
}



const mapStateToProps = (state, ownProps) => {
    return {
        message: state.userStatus.message,
        own: ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        successLoginFunctionDispache: (data) => {
            dispatch({type: "LOGIN", data: data});
            // dispatch(reset('syncValidation'));
        },
        errorLoginFunctionDispache: () =>{
            dispatch({type: "USER_ERROR"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
