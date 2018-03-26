import React, { Component } from 'react';

import logo from '../../logo.svg';
import './platillo.css';
import varTiendaController from '../../controladores/tiendacontroler';

class Platillo extends Component {
  render(){
    let platillos_div = [];
    const llenar_array_platillos_div = varTiendaController.platillos.forEach(
      (value, index)=>(
        platillos_div.push(
          <div>{value.nombre}</div>
        )
      )
    )

    return(
      <div className="container col-md-6">
        <div>
          <div className="panel panel-primary">
            <div className="list-group Platillo-Menu">
              {platillos_div}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Platillo;
