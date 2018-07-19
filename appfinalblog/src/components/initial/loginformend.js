import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let propsPpal;

const validate = values => {
    const errors = {}

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
    else{ //la siguiente validación, seria poner una variable que verifique si es mayor a 8 caracteres para indicar que no se realice la peticion al servicio y muetre que el login no es correcto
        if(values.password.length < 8){            
            propsPpal.validPassword(false);
        }
        else{
            propsPpal.validPassword(true);            
        }
    }
    
    return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} id={input.name}/>
            {touched && 
             ((error && <span>{error}</span>))}
        </div>
    </div>
)

const LoginFormEnd = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    propsPpal = props;
    //console.log('propsPpal', propsPpal);

    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="email" component={renderField} 
                label="Email" />
            <Field name="password" type="password" component={renderField} label="Password" />
            
      
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

const mapStateToProps = (state) => {
    return {
        passwordValid: state.passwordValid.valid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        validPassword: (val) => {
            //console.log('in validPassword', val);            
            dispatch({type: "VALID_PASSWORD", val});
        }
    }
}

var lfe = (reduxForm({
    form: 'loginformend', // a unique identifier for this form
    validate: validate   // <--- validation function given to redux-form
}))(LoginFormEnd);

lfe = connect(mapStateToProps, mapDispatchToProps)(lfe);

// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//     form: 'syncValidation', // a unique identifier for this form
//     validate   // <--- validation function given to redux-form
// }))(LoginFormEnd);

export default lfe;