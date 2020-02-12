import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const addExpense = (e) => {
        e.preventDefault();

        //validar

        //construir gasto
    }

    return (
        <form action=""
            onSubmit={addExpense}>
            <h2>Agregar gasto</h2>
            
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => setName(e.target.value)}/>
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