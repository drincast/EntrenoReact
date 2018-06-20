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
        platillos: [
          {
            "nombre": "nombrePlatillo",
            "descripcion": "platillo muy rico",
            "precio": 100,
            "cantidad": 0
          },
          {
            "nombre": "nombrePlatillo",
            "descripcion": "platillo muy rico",
            "precio": 110,
            "cantidad": 0
          },
          {
            "nombre": "nombrePlatillo",
            "descripcion": "platillo muy rico",
            "precio": 120,
            "cantidad": 0
          }
        ],
        bebidas: [
          {
            "nombre": "bebidaUno",
            "descripcion": "bebida muy rico",
            "precio": 50,
            "cantidad": 0
          },
          {
            "nombre": "bebidaDos",
            "descripcion": "bebida muy rico",
            "precio": 60,
            "cantidad": 0
          },
          {
            "nombre": "bebidaTres",
            "descripcion": "bebida muy rico",
            "precio": 70,
            "cantidad": 0
          }
        ]

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
