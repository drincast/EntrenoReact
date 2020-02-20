import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StlError = styled.div
`
    background-color: red;
    color: white;
    padding: 0.1rem;
    text-align: center;
    margin: 2rem 0;
`

const Error = ({show, message}) => {
    return (
        show ?
            <StlError>
                <p>{message}</p>
            </StlError>
        :
        null
    );
}

Error.propTypes = {    
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
}

export default Error;