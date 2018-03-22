import React, { Component } from 'react';

import varListaData from './listaData';

class Lista extends Component{
  render(){
    let listaDiv = [];

    const agregarDiv = varListaData.tareas.forEach(
      (value, index) => (
        listaDiv.push(<li>{value}</li>)
      )
    )

    return(
      <div>
        <h2>Lista</h2>
        <input />
        <div>
          <div>
            <ul>
              {listaDiv}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Lista;
