import React, { Component } from 'react';

import VarPrincipalData from './PrincipalData'

class MasUno extends Component{
  otrafuncion(){
    console.log("VarPrincipalData", VarPrincipalData);
  }

  f1(){
    console.log("VarPrincipalData", VarPrincipalData);
    VarPrincipalData.aumentarNumero();
  }

  render(){
    return(
      <div>
        <button onClick={this.f1}>otra funcion</button>
        <button onClick={() => { VarPrincipalData.aumentarNumero() } }>Aumentar</button>
      </div>
    );
  }
}

export default MasUno;
