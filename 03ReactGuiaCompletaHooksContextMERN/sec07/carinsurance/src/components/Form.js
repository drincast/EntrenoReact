import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';
import { getDateDifference, getIncrementForBrand 
        ,getIncrementForPlan } from '../helper';

import { StlButtom, StlField, StlInputRadio, StlLabel, StlSelect } from './FormStyle';



const Form = ({ setSummary, setSpinnerLoad }) => {
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState({
        show: false,
        message: ''
    });

    const { brand, plan, year } = data;

    //read data from of form and add to the state
    const getInformation = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const quoteInsurance = e => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError({
                show: true,
                message: 'Los campos son obligatorios'
            });
            return;
        }

        setError({
            show: false,
            message: ''
        });

        const difference = getDateDifference(year);
        //base de 2000

        let result = 2000;

        //restar el 3% por cada año
        result -= (result * 0.03) * difference;
        
        //incrementar segun la marca, americano 15%, asiatico 5%, europeo 30%
        result += getIncrementForBrand(result, brand);

        //incrementar segun el plan, basico el 20%, completo 50%
        result = parseFloat(getIncrementForPlan(plan) * result).toFixed(2);

        setSpinnerLoad(true);

        setTimeout(() => {
            setSpinnerLoad(false);

            setSummary({
                price: Number(result),
                data
            })
        }, 3000);

        
    }

    return (
        <form onSubmit={quoteInsurance}>
            <Error show={error.show} message={error.message} />

            <StlField>
                <StlLabel htmlFor="">Marca</StlLabel>
                <StlSelect name="brand" 
                    value={brand}
                    onChange={getInformation}>
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </StlSelect>
            </StlField>

            <StlField>
                <StlLabel htmlFor="">Marca</StlLabel>
                <StlSelect name="year" value={year} onChange={getInformation}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </StlSelect>
            </StlField>

            <StlField>
                <StlLabel htmlFor="">Plan</StlLabel>
                <StlInputRadio type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={getInformation}/> Básico

                <StlInputRadio type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={getInformation}/> Completo
            </StlField>

            <StlButtom type="submit">Cotizar</StlButtom>
        </form>
    );
}


Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setSpinnerLoad: PropTypes.func.isRequired
}

export default Form;