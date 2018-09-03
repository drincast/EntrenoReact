import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }
    else if (values.title.length < 10) {
        errors.title = 'Must be 10 characters or more';
    }
    else if (values.title.length > 50) {
        errors.title = 'Must be 50 characters or less';
    }

    if (!values.body) {
        errors.body = 'Required';
    }
    else if (values.body.length < 50){
        errors.body = 'Must be 50 characters or more';
    }
    else if (values.body.length > 200){
        errors.body = 'Must be 200 characters or less';
    }

    return errors;
}

const warn = values => {
  const warnings = {}
  // if (values.age < 19) {
  //   warnings.age = 'Hmm, you seem a bit young...'
  // }
  return warnings
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const renderTextArea = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder={label} type={type}></textarea>
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

//react-form SyncValidationForm
let EditPostForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <form onSubmit={handleSubmit}>
             <Field name="title" type="text" component={renderField} label="Title" />
             <Field name="body" type="text" component={renderTextArea} label="Body" />
             <br />
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

EditPostForm = reduxForm({
  form: 'EditPostForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(EditPostForm);

EditPostForm = connect (
    (state) => ({
        initialValues: {
            title: state.editPost.post.title,
            body: state.editPost.post.body
        }
    })
)(EditPostForm);

export default EditPostForm
