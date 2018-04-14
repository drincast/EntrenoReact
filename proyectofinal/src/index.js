import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Lienzo from './componentes/lienzo/lienzo';

//se inicia el enrutador con historial
const direcciones = (
  <BrowserRouter>
    <Route path="/" component={Lienzo} ></Route>
  </BrowserRouter>
);

ReactDOM.render(direcciones, document.getElementById('root'));
registerServiceWorker();
