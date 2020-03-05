import React, { Fragment, useEffect, useState } from 'react';
import styled  from "@emotion/styled";
import axios  from "axios";

//custom hook
import useCurrency from "../hooks/useCurrency";
import useCryptoCoin from "../hooks/useCryptoCoin";

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

const Form = () => {
    const CURRENCY = [
        { code: 'COP', name: 'Peso Colombiano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' },
        { code: 'MXN', name: 'Peso Mexicanos' },
        { code: 'USD', name: 'Dolar USA' }        
    ];

    const [lstCoin, setLstCoin] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD' ;

            const response = await axios.get(url);
            setLstCoin(response.data.Data);
        }

        callAPI();
    }, []);

    //use hook useCoin
    const [currency, SelectCurrency, setState] = useCurrency('Seleciona una moneda', '', CURRENCY);

    //use hook useCryptoCoin
    const [coin, SelectCryptoCoin, setCoin] = useCryptoCoin('Seleciona un coin', '', lstCoin);

    return (
        <form>
            <SelectCurrency />
            <SelectCryptoCoin />
            <Button type='submit' value='Calcular' />
        </form>
    );
}

export default Form;