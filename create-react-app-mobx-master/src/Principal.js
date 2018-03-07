import React, { Component } from 'react';

import MasUno from './MasUno';

import VarPrincipalData from './PrincipalData';

class Principal extends Component{
  render(){
    return(
      <div>
        <h2> Saludos desde principal </h2>
        <h2> {VarPrincipalData.numero} </h2>
        <MasUno />
      </div>
    )
  }
}

export default Principal;
