import React, { Component } from 'react';
import { observer } from 'mobx-react';

import MasUno from './MasUno';
import MenosUno from './MenosUno';

import VarPrincipalData from './PrincipalData';

class Principal extends Component{
  render(){
    return(
      <div>
        <h2> Saludos desde principal </h2>
        <h2> {VarPrincipalData.numero} </h2>
        <MasUno />
        <MenosUno />
      </div>
    )
  }
}

//observer hace que el componente se co
export default observer(Principal);
