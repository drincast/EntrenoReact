import React, { useState } from 'react';
import Error from "./Error";
import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setConsult }) => {
    const [error, setError] = useState(false);

    const {city, country} = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(country.trim() === '' || city.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        console.log('test');
        setConsult(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                error ? 
                    // <p className="red darken-4 error">Todos los campos son obligatorios</p>
                    <Error message="Todos los campos son obligatorios" />
                :
                    null
                
            }
            <div className="input-field col s12">
                <input type="text"
                    id='city'
                    name='city'
                    value={city}
                    onChange={handleChange}/>
                <label htmlFor="city">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country"
                    value={country}
                    onChange={handleChange}>
                    <option value="">-- seleccione un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>

            <div className="input-field col s12">
                <input type="submit" value="Buscar clima" className="waves-effect waves-light btn-large btn-block yellow accent-4" /> 
            </div>
        </form>
    );
}

Form.protoTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setConsult: PropTypes.func.isRequired
}

export default Form;