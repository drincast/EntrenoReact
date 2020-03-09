import React, { useState, useEffect } from 'react';
import axios  from "axios";
import styled from "@emotion/styled";

//custom components
import Form from "./component/Form";
import Quote from "./component/quote";
import Spinner from "./component/Spinner";

//media
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
    const [coin, setCoin] = useState('');
    const [currency, setCurrency] = useState('');
    const [response, setResponse] = useState({});
    const [activeSpinner, setActiveSpinner] = useState(false);

    useEffect(() => {
        const callAPIQuote = async () => {
            if(coin === '')
                return;

            setActiveSpinner(true);

            //api call
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=${currency}`;

            const responseAPI = await axios.get(url);
            setResponse(responseAPI.data.DISPLAY[coin][currency]);
            setActiveSpinner(false);
        }
        console.log('llamando API');
        callAPIQuote();
    }, [coin, currency]);

    const ContainerDetail = activeSpinner ? <Spinner /> : <Quote response={response} />

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

                <Form setCoin={setCoin} setCurrency={setCurrency} />

                { ContainerDetail }
            </div>
        </Container>
    );
}

export default App;
