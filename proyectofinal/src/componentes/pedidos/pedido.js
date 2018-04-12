import React, { Component } from 'react';
import { observer } from 'mobx-react';

import varTiendaController from '../../controladores/tiendacontroler';

class Pedido extends Component {
  render() {
    let platillosPedidos = [];
    let bebidasPedidos = [];

    const llenar_platillosPedido = varTiendaController.platillos.forEach(
      (value, index) => {
        if(value.cantidad !== 0){
          platillosPedidos.push(
            <div key={index} className="list-group-item">
              <div className="panel-body">
                <h4>{value.nombre}</h4>
                <br />
                <div className="APrecioCantidad">
                  <span>Cantidad: {value.cantidad}</span>
                  <span className="PrecioPlatillo">Precio: {value.precio * value.cantidad}</span>
                </div>
              </div>
            </div>
          );
        }
      }
    );

    const llenar_bebidasPedido = varTiendaController.bebidas.forEach(
      (value, index) => {
        if(value.cantidad !== 0){
          bebidasPedidos.push(
            <div key={index} className="list-group-item">
              <div className="panel-body">
                <h4>{value.nombre}</h4>
                <br />
                <div className="APrecioCantidad">
                  <span>Cantidad: {value.cantidad}</span>
                  <span className="PrecioPlatillo">Precio: {value.precio * value.cantidad}</span>
                </div>
              </div>
            </div>
          );
        }
      }
    );


    return(
      <div className="container col-md-6">
        <div>
          <div className="panel panel-primary">
            <div className="list-group Pedidos-Menu">
              {platillosPedidos}
              {bebidasPedidos}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default observer(Pedido);
