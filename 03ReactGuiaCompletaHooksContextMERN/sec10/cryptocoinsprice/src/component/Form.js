import React, { useEffect, useState } from 'react';
import styled  from "@emotion/styled";
import axios  from "axios";

//custom hook
import useCurrency from "../hooks/useCurrency";
import useCryptoCoin from "../hooks/useCryptoCoin";

//custom components
import Error from "./Error";

const Button = styled.input`
    background-color: #66a2fe;
    border: none;
    border-radius: 10px;
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Form = ({ setCoin, setCurrency }) => {
    const CURRENCY = [
        { code: 'COP', name: 'Peso Colombiano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' },
        { code: 'MXN', name: 'Peso Mexicanos' },
        { code: 'USD', name: 'Dolar USA' }        
    ];

    const [lstCoin, setLstCoin] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const callAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD' ;

            const response = await axios.get(url);            
            setLstCoin(response.data.Data);
        }

        callAPI();
    }, []);

    //use hook useCoin
    const [currency, SelectCurrency] = useCurrency('Seleciona una moneda', '', CURRENCY);

    //use hook useCryptoCoin
    const [coin, SelectCryptoCoin] = useCryptoCoin('Seleciona un coin', '', lstCoin);

    //enviar inormación
    const quoteCoin = e => {
        e.preventDefault();

        if(currency === '' || coin === ''){
            setError(true);
            return;
        }

        //pasar datos al componente principal
        setError(false);
        setCoin(coin);
        setCurrency(currency);

        console.log('el click');
    }

    return (
        <form onSubmit={quoteCoin}>
            {
                error ?
                    <Error message='Todos los campos son obligatorios' />
                :
                    null
            }
            <SelectCurrency />
            <SelectCryptoCoin />
            <Button type='submit' value='Calcular' />
        </form>
    );
}

export default Form;