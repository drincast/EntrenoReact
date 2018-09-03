import { extendObservable, computed } from 'mobx';

class PrincipalData {
  constructor() {
    //las propiedades definidas dentro de esta función los las que pueden ser compartidas
    //entre los componentes
    extendObservable(this,
      {
        numero: 0
      });
  }

  aumentarNumero(){
    console.log("numero", this.numero);
    this.numero = this.numero + 1;
  }

  disminuirNumero(){
    console.log("numero", this.numero);
    this.numero = this.numero - 1;
  }
}

var VarPrincipalData = new PrincipalData;

export default VarPrincipalData;
