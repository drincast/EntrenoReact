import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return (
        <Fragment>
            <p className="alert alert-danger error">{message}</p>
        </Fragment>
    );
}

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error;