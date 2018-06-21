import React, { Component } from 'react';

import logo from '../../logo.svg';
import './platillo.css';
import varTiendaController from '../../controladores/tiendacontroler';
import Ordenar from '../ordenar/ordenar';
import datos from '../../firebase';

class Platillo extends Component {
  pasarCantidadAcontroladorPlatillo(indice_d, cantidad_d){
    varTiendaController.ponerPlatilloCantidad(indice_d, cantidad_d);
  }

  // obtenerUrlImg(uno, dos, tres, event){
  //   console.log("TARGET", uno);
  //   console.log("IDIMAGEN", dos);
  //   console.log("O", event.target);
  // // onLoad={this.obtenerUrlImg.bind(this, 1, 2, 3)}
  // }

  obtenerUrlImg(event, idImagen){
    // console.log("TARGET", event.target);
    // console.log("IDIMAGEN", idImagen);
    event.persist();
    if(idImagen !== undefined){
      datos.archivos.child(idImagen).getDownloadURL()
      .then(
        function(url)
        {
          if(event.target !== null){
            event.target.setAttribute('src', url);
            console.log('****');
            console.log('urlImg', event.target.getAttribute('src'));
          }

        }
      );
    }
  }

  render(){
    let platillos_div = [];
    const llenar_array_platillos_div = varTiendaController.platillos.forEach(
      (value, index)=>{
        let urlImg;



        platillos_div.push(
          <div className="list-group-item" key={index}>
            <div className="panel-body">
              <img role="presentation" src={value.urlImageT} onLoad={(event) => this.obtenerUrlImg(event, value.urlImagen)} className="ImagenPlatillo" />
              <h2 className="TituloPlatillo">{value.nombre}</h2>
              <div className="DescripcionPlatillo">{value.descripcion}</div>

              <Ordenar precio={value.precio} indice={index} establecerCantidad={this.pasarCantidadAcontroladorPlatillo.bind(this)}/>
            </div>
          </div>
        );



      }
    )

    return(
      <div className="container col-md-6">
        <div>
          <div className="panel panel-primary">
            <div className="list-group Platillo-Menu">
              {platillos_div}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Platillo;
