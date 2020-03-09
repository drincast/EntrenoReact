import React from 'react';
import styled from "@emotion/styled";

const StlPError = styled.p`
    background-color: #b7322c;
    color: #fff;
    font-family: 'Anton', 'Noto Sans TC', cursive;
    font-size: 30px;
    font-weight: bold;
    padding: 1rem;
    text-transform: uppercase;
`

const Error = ({message}) => {
    return (
        <StlPError>{message}</StlPError>
    );
}

export default Error;