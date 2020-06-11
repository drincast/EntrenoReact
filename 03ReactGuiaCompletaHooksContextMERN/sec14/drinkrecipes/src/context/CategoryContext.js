import React, { createContext, useState
            , useEffect } from 'react';
import axios from 'axios';

// context
export const CategoryContext = createContext();

//provaider donde estan las funciones y states
const CategoryProvider = (props) => {
    //state del context
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            
            setCategories(categories.data.drinks);
        }

        getCategories();
    }, []);
    
    return(
        <CategoryContext.Provider
            value={{
                categories
            }}>
            {props.children}
        </CategoryContext.Provider>
    )
};

export default CategoryProvider;