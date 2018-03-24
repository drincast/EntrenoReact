import React, { Component } from 'react';
import { observer } from 'mobx-react';

import varListaData from './listaData';

class Lista extends Component{
  enviarTarea(evento){
    if(evento.which === 13){
      varListaData.agregarTarea(evento.target.value);
      evento.target.value = '';
    }
  }

  eliminarTarea(index){
    varListaData.eliminarTarea(index);
  }

  render(){
    let listaDiv = [];

    const agregarDiv = varListaData.tareas.forEach(
      (value, index) => (
        listaDiv.push(<li key={index} onClick={this.eliminarTarea.bind(this, index)} className="list-group-item">{value}</li>)
      )
    )

    return(
      <div className="container">
        <h2>Lista</h2>
        <input onKeyPress={this.enviarTarea.bind(this)} />
        <div className="row">
          <div className="col-xs-12">
            <ul className="list-group">
              {listaDiv}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default observer(Lista);
