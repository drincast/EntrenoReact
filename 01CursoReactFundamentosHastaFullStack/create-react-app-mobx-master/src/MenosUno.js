import React, { Component } from 'react';

import VarPrincipalData from './PrincipalData'

class MenosUno extends Component{
  render(){
    return(
      <div>
        <button onClick={() => { VarPrincipalData.disminuirNumero() } }>Disminuir</button>
      </div>
    );
  }
}

export default MenosUno;
