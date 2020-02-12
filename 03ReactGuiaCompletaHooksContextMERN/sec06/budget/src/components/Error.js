import React, { Fragment } from 'react';

const Error = ({message}) => {
    return (
        <Fragment>
            <p className="alert alert-danger error">{message}</p>
        </Fragment>
    );
}

export default Error;