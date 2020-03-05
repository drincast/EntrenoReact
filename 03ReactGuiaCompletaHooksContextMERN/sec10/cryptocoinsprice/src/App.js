import React from 'react';
import styled from "@emotion/styled";

import Form from "./component/Form";

import imgCrypto from './cryptomonedas.png';

const Container = styled.div`
    margin: 0 auto;
    max-width: 800px;

    @media (min-width:810px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    margin-top: 5rem;
    max-width: 100%;
`

const Heading = styled.h1`
    color: #fff;
    font-family: 'Anton', 'Noto Sans TC', cursive;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 50px;
    margin-top: 80px;
    text-align:left;

    &::after {
        content: '';
        background-color: #66A2FE;
        display:block;
        height: 6px;
        width: 100px
    }
`

function App() {
    return (
        <Container>
            <div>
                <Image src={imgCrypto}
                    alt='imagen cryptocoin' 
                />
            </div>

            <div>
                <Heading>
                    Precio de CriptoMonedas
                </Heading>

                <Form />
            </div>

        </Container>
        
    );
}

export default App;
