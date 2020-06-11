import React from 'react';

const Form = ({}) => {
    return (
        <form className='col-12'>
            <fieldset className='text-center'>
                <legend>Buscar bebida por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input type="text" name="nombre" id="nombre"
                        className='form-control'
                        placeholder='Buscar ingrediente'
                    />
                </div>
                <div className="col-md-4">
                    <select name="categoria" id="categoria"
                        className='form-control'
                    >
                        <option value="">-- Seleccionar categoria --</option>

                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit"
                        className='btn btn-block btn-primary'
                        value='Buscar bebida'
                    />              
                </div>
            </div>
        </form>
    );
}
export default Form;