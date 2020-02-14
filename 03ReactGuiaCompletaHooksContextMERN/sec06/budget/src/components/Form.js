import React, { useState } from 'react';
import shortid from 'shortid';

import Error from './Error';

const Form = ({addNewExpense}) => {
    const [nameExpense, setNameExpense] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);    

    const addExpense = (e) => {
        e.preventDefault();

        //validar
        if(quantity < 1 || isNaN(quantity) || nameExpense.trim() === "" ){
            setError(true);
            return;
        }

        setError(false);

        //construir gasto
        const expense = {
            nameExpense,
            quantity,
            id: shortid.generate()
        }

        addNewExpense(expense);

        setNameExpense('');
        setQuantity(0);
    }

    return (
        <form action=""
            onSubmit={addExpense}>
            <h2>Agregar gasto</h2>

            {
                error ?
                    <Error message="Error en los datos del gasto"/>
                :
                    null
            }
            
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nameExpense}
                    onChange={e => setNameExpense(e.target.value)}/>
            </div>

            <div className="campo">
                <label htmlFor="">Valor</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. 20000"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value, 10))}/>
            </div>

            <input type="submit"
                className="button-primary u-full-width"
                value="Agregar"/>
        </form>
    );
}

export default Form;