import { extendObservable } from 'mobx';

class ListaData {
  constructor() {
    extendObservable(
      this,
      {tareas: ['Aprender React',
               'Hacer una aplicación con React']}
    );
  }

  agregarTarea(tarea){
    console.log(tarea);
    this.tareas.push(tarea);
  }
}

var varListaData = new ListaData();

export default varListaData;
