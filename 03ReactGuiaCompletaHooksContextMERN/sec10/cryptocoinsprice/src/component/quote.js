import React from 'react';
import styled from "@emotion/styled";

const StlDivResponse = styled.div`
    color: #fff;
    font-family: 'Anton', 'Noto Sans TC', cursive;
`

const StlP = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`

const StlPPrice = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Quote = ({ response }) => {
    if(Object.keys(response).length === 0)
        return null;

    return (
        <StlDivResponse>
            <StlPPrice>El precio es: <span>{response.PRICE}</span></StlPPrice>
            <StlP>El precio más alto del día: <span>{response.HIGHDAY}</span></StlP>
            <StlP>El precio más bajo del día: <span>{response.LOWDAY}</span></StlP>
            <StlP>Variación últinas 24 horas: <span>{response.CHANGEPCT24HOUR}</span></StlP>
            <StlP>Última actualización: <span>{response.LASTUPDATE}</span></StlP>
        </StlDivResponse>
    );
}

export default Quote;