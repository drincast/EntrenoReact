import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "core-js/stable";

import React from 'react';
import Header from './components/Header';

import styled from '@emotion/styled';

const StlDivContainer = styled.div
`
    max-width: 600px;
    margin: 0 auto;
`;

const StlDivFormContainer = styled.div
`
    background-color: #fff;
    padding: 3rem;
`;

function App() {
    return (
        <StlDivContainer>
            <Header title='Cotizador de seguros'/>

            <StlDivFormContainer>
            
            </StlDivFormContainer>
        </StlDivContainer>
    );
}

export default App;
