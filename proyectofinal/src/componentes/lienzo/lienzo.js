import React, { Component } from 'react';

import Platillo from '../platillos/platillo';
import Pedido from '../pedidos/pedido';
import Bebida from '../bebidas/bebida';

class Lienzo extends Component{

  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h2>Nombre de tienda</h2>
        </div>
        <Platillo />
        <Bebida />
        <Pedido />
      </div>
    )
  }
}

export default Lienzo;
