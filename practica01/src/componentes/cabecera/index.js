import React, { Component } from 'react';

import './style.css';

class Cabecera extends Component {
  render() {
    return (
      <header id="divCabedera">
        <div id="divCabeceraImagen">
          <a href={this.props.urlHome}>
            <img src={this.props.urlImg} alt="logo" />
          </a>
        </div>
        <div id="divCabeceraTitulo">
          <h1>{this.props.titulo}</h1>
        </div>
      </header>
    );
  }
}

export default Cabecera;
