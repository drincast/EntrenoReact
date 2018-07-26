import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// import ContactForm from './form';
// import SyncValidationForm from './signuofromv';
import SignupFormFinal from './signupformfinal';

const Signup = (props) => {
    const fuctionForm = (data) => {
        //console.log("datos", data);
        axios.post('https://blog-api-u.herokuapp.com/users/',
                    {
                        user: {
                            name: data.username,
                            email: data.email,
                            password: data.password,
                            password_confirmation: data.passwordConfirmation
                        }
                    })
                .then(function(response){
                    console.log(response);
                    props.successFunctionDispache();
                })
                .catch(function(error) {
                    console.log(error);
                    props.errorFunctionDispache();
                });
    }

    const imp = () => {
        // console.log("fuctionForm", fuctionForm);
        // console.log("this.fuctionForm", this.fuctionForm);
        // console.log("this", this);
        // console.log("uno", uno);
        // console.log("este es un lescomponent, por tal motivo como no es una clase el this no se usa");
        uno++;
    }

    let uno = 0;

    return(
        <div>
            <h2>signup</h2>
            {/*<ContactForm onSubmit={fuctionForm} />*/}
            {/*<SyncValidationForm onSubmit={fuctionForm} />*/}
            {props.message && <div><br /><h4>{props.message}</h4><br /></div>}

            <SignupFormFinal onSubmit={fuctionForm} />
            <br />
            <button onClick={imp}>Imp Log</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.userStatus.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        successFunctionDispache: () => {
            dispatch({type: "USER_CREATED"});
            dispatch(reset('syncValidation')); //limpiar el formulario funcionalidad de redux-form
        },
        errorFunctionDispache: () =>{
            dispatch({type: "USER_ERROR"});
        }
    }
}

//export default Signup;
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
