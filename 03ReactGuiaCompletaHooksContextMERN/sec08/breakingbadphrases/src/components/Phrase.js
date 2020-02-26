import React from 'react';

import styled from '@emotion/styled';

const StlContainer = styled.div`
    background-color: #fff;
    border-radius: .5rem;
    margin-top: 10rem;
    max-width: 800px;
    padding: 3rem;

    @media (min-width: 992px){
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    
    p{
        font-family: Verdana, Geneva, tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

// const StlContainer = styled.div`
//     background-color: #fff;
//     border-radius: .5rem;
//     max-width: 800px;
//     padding: 3rem;
// `;

const Phrase = ({phrase}) => {
    return (
        <StlContainer>
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author}</p>
        </StlContainer>
    );
}

export default Phrase;