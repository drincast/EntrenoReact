import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

import Recipe from './Recipe';

const RecipesList = ({}) => {
    //extraer las recetas
    const { recipes } = useContext(RecipeContext);

    return (
        <div className='row mt-5'>
            {
                recipes.map( item => (
                    <Recipe
                        key={item.idDrink}
                        recipe={item}
                    />
                ))
            }
        </div>
    );
}
export default RecipesList;