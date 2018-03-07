import { extendObservable, computed } from 'mobx';

class PrincipalData {
  constructor() {
    extendObservable(this,
      {
        numero: 0
      });
  }

  aumentarNumero(){
    console.log("numero", this.numero);
    this.numero = this.numero + 1;
  }
}

var VarPrincipalData = new PrincipalData;

export default VarPrincipalData;
