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

// const reducerNumero = (state = {cantidad: 2} , action) => {
//     let nuevoEstado = Object.assign({}, state);
//     let esNuevoEstado = false;
//
//     console.log("en reducerNumero");
//
//     switch (action.type) {
//         case "AUM":
//             console.log("en AUM");
//             nuevoEstado.cantidad = state.cantidad + 1;
//             esNuevoEstado = true;
//             break;
//         case "DIS":
//             console.log("en DIS");
//             nuevoEstado.cantidad = state.cantidad - 1;
//             esNuevoEstado = true;
//             break;
//
//         default:
//             break;
//     }
//
//     if(esNuevoEstado){
//         return nuevoEstado
//     }
//     else{
//         return state;
//     }
// };

const reducerNumero = function(state = {cantidad: 2} , action) {
    let nuevoEstado = Object.assign({}, state);
    let esNuevoEstado = false;

    console.log("en reducerNumero");

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

    console.log("en reducerTareas");

    switch (action.type) {
        case "AGR":
            console.log(nuevoEstado);
            nuevoEstado = state.concat([{tarea: action.tarea, id: action.id}]);
            esNuevoEstado = true;
            console.log(nuevoEstado);
            break;
        // case "DIS":
        //     console.log("en DIS");
        //     nuevoEstado.cantidad = state.cantidad - 1;
        //     esNuevoEstado = true;
        //     break;

        default:
            break;
    }

    if(esNuevoEstado){
        return nuevoEstado;
    }
    else{
        return state;
    }
};

const reducerId = (state = 1, action) => {
    let nuevoEstado = Object.assign({}, state);
    let esNuevoEstado = false;

    console.log("en reducerId");

    switch (action.type) {
        case "AGR":
            nuevoEstado = state + 1;
            esNuevoEstado = true;
            break;
        default:
            esNuevoEstado = false;
            break;
    }

    if(esNuevoEstado){
        return nuevoEstado;
    }
    else{
        return state;
    }
};

const fun01 = (uno) => {
  console.log("en fun01", uno);
  return 23;
}

//combina los reducer
//esta declaración hace que se ejecuten las funciones al cargar el componete
const reducer = combineReducers({
    numero: reducerNumero,
    tareas: reducerTareas,
    id: reducerId
});

const prueba = {
  algo: fun01
}

//const store = createStore(reducer, state);
//esta declaración hace que se ejecuten las funciones al cargar el componete
const store = createStore(reducer);

ReactDOM.render(
    //I. implementar el provaider
    //<Provider store={store}>
        <App />,
    //</Provider>,
    document.getElementById('root')
);
registerServiceWorker();
