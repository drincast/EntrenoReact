import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Platillo from '../platillos/platillo';
import Pedido from '../pedidos/pedido';
import Bebida from '../bebidas/bebida';

const rutas = (
  <div>
    <Route exact path="/platillos" component={Platillo}></Route>
    <Route path="/bebidas" component={Bebida}></Route>
  </div>
)

class Lienzo extends Component{

  render(){
    console.log(this.props.location);
    console.log(this.props.match);
    console.log(this.props.history);
    return(
      <div className="container">
        <div className="jumbotron">
          <h2>Nombre de tienda</h2>
        </div>
        <div>
          <ul className="nav nav-pills ListMargin">
            <li role="presentation" className="active">
              <Link to="/platillos">Platillos</Link>
            </li>
            <li role="presentation" className="active">
              <Link to="/bebidas">Bebidas</Link>
            </li>
          </ul>
          {rutas}
        </div>
        <Pedido />
      </div>
    )
  }
}

export default Lienzo;
