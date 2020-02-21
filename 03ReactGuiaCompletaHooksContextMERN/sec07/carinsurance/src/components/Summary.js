import React from 'react';
import { ShowFirtsLetterToUpperCase } from '../helper';
import './Summary.css';

const Summary = ({ data }) => {
    const { brand, year, plan } = data;

    if( brand === '' || year === '' || plan === '') return null;

    return (
        <div className='divContainer'>
            <h1>Resumen de Cotización</h1>
            <ul>
                <li>Marca: {ShowFirtsLetterToUpperCase(brand)}</li>
                <li>Year: {year}</li>
                <li>Plan: {ShowFirtsLetterToUpperCase(plan)}</li>
            </ul>
        </div>
    );
}

export default Summary;