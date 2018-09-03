import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Segundo from './segundo';

class Principal extends Component{
  render(){
    return(
      <div>
        <h2>Hola desde componente principal</h2>
        <h2>de create-react-app</h2>
        <Segundo />
      </div>
    )
  }
}

export default Principal;
