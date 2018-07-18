import React from 'react'
import { Field, reduxForm } from 'redux-form'

var bandera = 1;

const validate = values => {
    const errors = {}    

    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length < 5) {
        errors.username = 'Must be 5 characters or more'
    } else if (values.username.length > 20) {
        errors.username = 'Must be 20 characters or less'
    }

    if (!values.email) {
        errors.email = 'Required'
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
    {
        errors.email = 'Invalid email address'
    }
  
    if (!values.password) {
        errors.password = 'Required'
    }
    else{
        if(values.password.length < 8){
            errors.password = 'The password length it must be greater than 7 characters'
        }

        // if (isNaN(Number(values.age))) {
        //     errors.age = 'Must be a number'
        // }
        // else 
        //     if (Number(values.age) < 18) {
        //         errors.age = 'Sorry, you must be at least 18 years old'
        //      }
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Required'
    }
    else{
        if(values.passwordConfirmation.length < 8){
            errors.passwordConfirmation = 'The password length it must be greater than 7 characters'
        }

        if(values.password !== values.passwordConfirmation){
            errors.passwordConfirmation = 'The password and password confirmation must be the same'
        }
    }
        
    
    return errors
}

// const warn = values => {
//     const warnings = {}

//     if (values.age < 19) {
//         warnings.age = 'Hmm, you seem a bit young...'
//     }

//     return warnings
// }

const renderField = ({
    input,
    label,
    type,
    uno,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} id={input.name} uno={uno}/>
            {touched && 
             ((error && <span>{error}</span>) ||
             (warning && <span>{warning}</span>))}
        </div>
        {/* {console.log("input",Object.prototype.toString.call(input))}
        <p>{bandera}</p> {bandera++} */}
    </div>
)

const SignupFormFinal = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" id="username"
                component={renderField} label="Username" uno={bandera}
            />
            {/* <h4>{bandera}</h4> */}

            <Field name="email" type="email" component={renderField} 
                label="Email" />
            <Field name="password" type="password" component={renderField} label="Password" />
            <Field name="passwordConfirmation" type="password" component={renderField} label="Password confirmation" />
      
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>

                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'syncValidation', // a unique identifier for this form
    validate   // <--- validation function given to redux-form
    // warn        // <--- warning function given to redux-form
})(SignupFormFinal)