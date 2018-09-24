import { extendObservable } from 'mobx';
import datos from '../firebase';

class TiendaControles{
  constructor(){

    var self = this;

    datos.bebidas.once('value')
    .then(
      function(snapshot){
        snapshot.forEach(
          function(childSnapshot){
            const key = childSnapshot.key;
            const val = childSnapshot.val();
            self.bebidas.push(val);
          }
        );
      }
    );

    datos.platillos.once('value')
    .then(
      function(snapshot){
        snapshot.forEach(
          function(childSnapshot){
            const key = childSnapshot.key;
            const val = childSnapshot.val();
            self.platillos.push(val);
          }
        );
      }
    );

    extendObservable(this,
      {
        platillos: [],
        bebidas: []
      }
    )
  }

  ponerPlatilloCantidad(indicePlatillo, cantidadPlatillo){
    this.platillos.forEach((value, index) => {
      if(indicePlatillo === index){
        this.platillos[index].cantidad = cantidadPlatillo
      }
    });
  }

  ponerBebidaCantidad(indiceBebida, cantidadBebida){
    this.bebidas.forEach((value, index) => {
      if(indiceBebida === index){
        this.bebidas[index].cantidad = cantidadBebida
      }
    });
  }
}

var varTiendaController = new TiendaControles();

export default varTiendaController;
