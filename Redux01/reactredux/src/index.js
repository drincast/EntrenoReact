import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const state = {
    cantidad: 2
};

const reducerNumero = (state = {cantidad: 2} , action) => {
    let nuevoEstado = Object.assign({}, state);
    let esNuevoEstado = false;

    switch (action.type) {
        case "AUM":
            console.log("en AUM");
            nuevoEstado.cantidad = state.cantidad + 1;
            esNuevoEstado = true;
            break;
        case "DIS":
            console.log("en DIS");
            nuevoEstado.cantidad = state.cantidad - 1;
            esNuevoEstado = true;
            break;

        default:
            break;
    }
    
    if(esNuevoEstado){
        return nuevoEstado
    }
    else{
        return state;
    }    
};

const reducerTareas = (state = [], action) => {
    let nuevoEstado = Object.assign({}, state);
    let esNuevoEstado = false;

    switch (action.type) {
        case "AUM":
            console.log("en AUM");
            nuevoEstado.cantidad = state.cantidad + 1;
            esNuevoEstado = true;
            break;
        case "DIS":
            console.log("en DIS");
            nuevoEstado.cantidad = state.cantidad - 1;
            esNuevoEstado = true;
            break;

        default:
            break;
    }
    
    if(esNuevoEstado){
        return nuevoEstado
    }
    else{
        return state;
    }    
};

//combina los reducer
const reducer = combineReducers({
    numero: reducerNumero,
    tareas: reducerTareas
});



//const store = createStore(reducer, state);
const store = createStore(reducer);

ReactDOM.render(
    //I. implementar el provaider
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
