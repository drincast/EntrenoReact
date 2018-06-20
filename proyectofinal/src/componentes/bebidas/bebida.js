import React, { Component } from 'react';

import logo from '../../logo.svg';
import './bebida.css';
import varTiendaController from '../../controladores/tiendacontroler';
import Ordenar from '../ordenar/ordenar';

class Bebida extends Component {
  pasarCantidadAControladorBebida(indice_d, cantidad_d){
    varTiendaController.ponerBebidaCantidad(indice_d, cantidad_d);
  }

  render(){
    let bebidas_div = [];
    const llenar_array_bebidas_div = varTiendaController.bebidas.forEach(      
      (value, index)=>(
        bebidas_div.push(
          <div className="list-group-item" key={index}>
            <div className="panel-body">
              <img role="presentation" src={logo} className="ImagenPlatillo" />
              <h2 className="TituloPlatillo">{value.nombre}</h2>
              <div className="DescripcionPlatillo">{value.descripcion}</div>

              <Ordenar precio={value.precio} indice={index} establecerCantidad={this.pasarCantidadAControladorBebida.bind(this)}/>
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
              {bebidas_div}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bebida;
