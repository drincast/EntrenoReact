import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable';

import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

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
    const [summary, setSummary] = useState({});

    const { data, price=0 } = summary;

    return (
        <StlDivContainer>
            <Header title='Cotizador de seguros'/>

            <StlDivFormContainer>
                <Form setSummary={setSummary} />
                {
                    data ?
                        <Summary data={summary.data}/>
                    :
                        null
                }
                <Result price={price}/>
            </StlDivFormContainer>
        </StlDivContainer>
    );
}

export default App;
