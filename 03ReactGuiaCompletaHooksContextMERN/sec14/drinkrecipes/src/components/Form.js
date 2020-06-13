import React, { useContext, useState } from 'react';
import CategoryProvider, { CategoryContext } from '../context/CategoryContext';
import RecipeProvider, { RecipeContext } from '../context/RecipeContext';

const Form = ({}) => {
    const [finder, setFinder] = useState({
        name: '',
        category: ''
    });

    const { categories } = useContext(CategoryContext);
    const { setFindRecipe, setFlagSubmit } = useContext(RecipeContext);

    //function to get content
    const GetDataRecipe = e => {
        setFinder({
            ...finder,
            [e.target.id]: e.target.value 
        })
    }

    return (
        <form className='col-12'
            onSubmit={ e => {
                e.preventDefault();
                setFindRecipe(finder);
                setFlagSubmit(true);
            }}>
            <fieldset className='text-center'>
                <legend>Buscar bebida por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input type="text" name="name" id="name"
                        className='form-control'
                        placeholder='Buscar ingrediente'
                        onChange={GetDataRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select name="category" id="category"
                        className='form-control'
                        onChange={GetDataRecipe}
                    >
                        <option value="">-- Seleccionar categoria --</option>
                        {
                            categories.map( item => (
                                <option
                                    key={item.strCategory}
                                    value={item.strCategory}
                                >
                                    {item.strCategory}                                    
                                </option>
                            ))
                        }

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