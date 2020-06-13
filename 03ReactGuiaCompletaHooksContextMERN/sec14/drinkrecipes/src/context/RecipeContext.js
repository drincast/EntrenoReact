import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [flagSubmit, setFlagSubmit] = useState(false);
    const [findRecipe, setFindRecipe] = useState({
        name: '',
        category: ''
    });

    const { name, category } = findRecipe;

    useEffect(() => {
        if(flagSubmit){
            const GetRecipe = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const data = await axios.get(url);
                //console.log('RC', data);
                setRecipes(data.data.drinks);
            }

            GetRecipe();
        }
    }, [findRecipe]);

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                setFindRecipe,
                setFlagSubmit
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    );    
}

export default RecipeProvider;
