import { extendObservable } from 'mobx'

class TiendaControles{
  constructor(){
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
}

var varTiendaController = new TiendaControles();

export default varTiendaController;
