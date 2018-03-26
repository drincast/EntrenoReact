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
            "precio": 100,
            "cantidad": 0
          },
          {
            "nombre": "nombrePlatillo",
            "descripcion": "platillo muy rico",
            "precio": 100,
            "cantidad": 0
          }
        ]
      }
    )
  }
}

var varTiendaController = new TiendaControles();

export default varTiendaController;
