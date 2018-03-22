import { extendObservable } from 'mobx';

class ListaData {
  constructor() {
    extendObservable(
      this,
      {tareas: ['Aprender React',
               'Hacer una aplicación con React']}
    );
  }
}

var varListaData = new ListaData();

export default varListaData;
