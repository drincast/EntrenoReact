import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
//import logo from './logo.svg';

import Phrase from './components/Phrase';

const StlContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const StlButton = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    border: 2px solid black;
    color: #fff;
    font-family:  Arial, Helvetica, sans-serif;
    font-size: 2rem;
    margin-top: 3rem;
    padding: 1rem 3rem;
    transition: background-size .8s ease;
    
    :hover {
        cursor:pointer;
        background-size: 400px;
    }
`;


function App() {
    const [phrase, setPhrase] = useState({});

    //cargar frase
    useEffect(() => {
        getDataForAPI();
    }, []);

    // const getDataForAPI = () => {
    //     const response = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //     const phrase = response.then( response => {
    //         return response.json();
    //     });

    //     phrase.then(response => console.log(response));
    // }

    const getDataForAPI = async () => {
        const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const phrase = await response.json();

        setPhrase(phrase[0]);
    }

    return (
        <StlContainer>
            <Phrase phrase={phrase}/>
            <StlButton onClick={getDataForAPI}>
                <h1>Breaking Bad</h1>
            </StlButton>
        </StlContainer>        
    );
}

export default App;
