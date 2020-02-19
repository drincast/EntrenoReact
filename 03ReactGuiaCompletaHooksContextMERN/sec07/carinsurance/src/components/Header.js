import React from 'react';
import styled from '@emotion/styled';

const StlHeader = styled.header
`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

const StlH1 = styled.h1
`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

function Header({title}) {
    return(
        <StlHeader>
            <StlH1>{title}</StlH1>
        </StlHeader>
    );
}

export default Header;