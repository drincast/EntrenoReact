import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [idRecipe, setIdRecipe] = useState(null);
    const [dataRecipe, setDataRecipe] = useState({});

    useEffect(() => {
        const GetRecipe = async () => {
            if(!idRecipe)
                return;
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

            const data = await axios.get(url);
            setDataRecipe(data.data.drinks[0]);
        }

        GetRecipe();
    }, [idRecipe]);

    return (
        <ModalContext.Provider
            value={{
                dataRecipe,
                setIdRecipe,
                setDataRecipe
            }}
        >
            { props.children }
        </ModalContext.Provider>
    );
}

export default ModalProvider;