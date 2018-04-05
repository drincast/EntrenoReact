import React, { Component } from 'react';

class Ordenar extends Component {
  actualizarCantidad(evento){
    this.props.establecerCantidad(this.props.indice, evento.target.value);
    //console.log(this.props.indice, evento.target.value);
  }

  render() {
    return(
      <div>
        <br />
        <label> Cantidad: </label>
        <input type="number" min="0" max="20" onChange={this.actualizarCantidad.bind(this)} />
        <label className="EspacioPlatillo"> Precio: {this.props.precio} </label>
      </div>
    );
  }
}

export default Ordenar;
