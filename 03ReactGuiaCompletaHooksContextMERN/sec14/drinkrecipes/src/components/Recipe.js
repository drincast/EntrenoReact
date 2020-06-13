import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

//Context
import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({recipe}) => {
    //Configuración del modal material IU
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const HandleOpen = () => {
        setOpen(true)
    }

    const HandleClose = () => {
        setOpen(false)
    }
    
    //extraer valores del context
    const { dataRecipe, setIdRecipe,
            setDataRecipe } = useContext(ModalContext);

    //render ingredients
    const showIngredients = data => {
        let ingredients = [];

        for(let i = 1; i < 16; i++){
            if(data[`strIngredient${i}`]){
                ingredients.push(
                    <li key={data[`strIngredient${i}`]}>
                        {data[`strIngredient${i}`]} {data[`strMeasure${i}`]}
                    </li>
                )
            }
        }

        return ingredients;
    }

    return (
        <div className='col-md-4 mb-3'>
            <div className="card">
                <h2 className="card-header">
                    {
                        recipe.strDrink
                    }
                </h2>
                <img 
                    src={recipe.strDrinkThumb} 
                    alt={`Imgen de ${recipe.strDrink}`} 
                    className="card-img-top"/>
                <div className="card-body">
                    <button className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdRecipe(recipe.idDrink);
                            HandleOpen(); 
                            setDataRecipe({});
                        }}>
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            HandleClose();
                            setIdRecipe(null);
                        }}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{dataRecipe.strDrink}</h2>
                            <h3 className='mt-4'>Instrucciones</h3>
                            <p>
                                {dataRecipe.strInstructions}
                            </p>

                            <img src={dataRecipe.strDrinkThumb}
                                alt={`Imagen de ${dataRecipe.strDrink}`}
                                className="img-fluid my-4"/>

                            <h3>Ingredientes y Cantidades</h3>

                            <ul>
                                {showIngredients(dataRecipe)}
                            </ul>
                        </div>                        
                    </Modal>
                </div>
            </div>
        </div>
    );
}
export default Recipe;