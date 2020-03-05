import React, { Fragment, useState } from 'react';

import styled from "@emotion/styled";

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Noto Sans TC', 'Anton', 'Roboto', cursive;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 2rem;
    text-transform: uppercase;
`;

const Select = styled.select`
    border: none;
    border-radius: 10px;
    display:block;
    font-size: 1.2rem;
    padding: 1rem;
    width: 100%;
    -webkit-appearance: none;
`

const useCryptoCoin = (label, iniState, options) => {
    const [state, setState] = useState(iniState);

    console.log(options);

    const SelectedCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select name="" id=""
                onChange={ e => setState(e.target.value)}
                value={state}>
                <option value="">- Seleccione -</option>
                {
                    options.map( item => {                    
                        return <option key={item.CoinInfo.Name} value={item.CoinInfo.Name}>{item.CoinInfo.FullName}</option>
                    })
                }
            </Select>
        </Fragment>
    );

    return [state, SelectedCrypto, setState];
}

export default useCryptoCoin;