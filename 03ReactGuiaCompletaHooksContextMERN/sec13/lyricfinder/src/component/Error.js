import React, { Fragment } from 'react';

const Error = ({msg}) => {
    return (
        <Fragment>
            <p className="my-3 p-4 text-center alert alert-primary">
                {msg}
            </p>
        </Fragment>
    );
}
export default Error;