import React, { Component } from 'react';

import Platillo from '../platillos/platillo';

class Lienzo extends Component{

  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h2>Nombre de tienda</h2>
        </div>
        <h4><Platillo></Platillo></h4>
        <h4>Pedidos</h4>
      </div>
    )
  }
}

export default Lienzo;
