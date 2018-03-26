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
          <div className="list-group-item" key={index}>
            <div className="panel-body">
              <img role="presentation" src={logo} className="ImagenPlatillo" />
              <h2 className="TituloPlatillo">{value.nombre}</h2>
              <div className="DescripcionPlatillo">{value.descripcion}</div>
            </div>
          </div>
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
