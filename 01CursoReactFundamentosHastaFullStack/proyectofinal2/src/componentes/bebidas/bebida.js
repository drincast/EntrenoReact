import React, { Component } from 'react';

import logo from '../../logo.svg';
import './bebida.css';
import varTiendaController from '../../controladores/tiendacontroler';
import Ordenar from '../ordenar/ordenar';
import datos from '../../firebase';

class Bebida extends Component {
  pasarCantidadAControladorBebida(indice_d, cantidad_d){
    varTiendaController.ponerBebidaCantidad(indice_d, cantidad_d);
  }

  obtenerUrlImg(event, idImagen){
    event.persist();
    let obj = event.target; 
    if(idImagen !== undefined){
      console.log('obj.dataset.load', obj.dataset.load);      
      if(obj.dataset.load === '0'){
        datos.archivos.child(idImagen).getDownloadURL()
      .then(
        function(url)
        {
          if(event.target !== null){
            event.target.setAttribute('src', url);
            obj.dataset.load = '1';
          }
        }
      );
      }
      
    }
  }
  
  render(){
    let bebidas_div = [];
    const llenar_array_bebidas_div = varTiendaController.bebidas.forEach(      
      (value, index)=>(
        bebidas_div.push(
          <div className="list-group-item" key={index}>
            <div className="panel-body">
              {/* <img role="presentation" data-load="0" src={logo} className="ImagenPlatillo" /> */}
              <img role="presentation" data-load="0" src={value.urlImageT} onLoad={(event) => this.obtenerUrlImg(event, value.urlImagen)} className="ImagenPlatillo" />
              <h2 className="TituloPlatillo">{value.nombre}</h2>
              <div className="DescripcionPlatillo">{value.descripcion}</div>

              <Ordenar precio={value.precio} indice={index} establecerCantidad={this.pasarCantidadAControladorBebida.bind(this)}/>
            </div>
          </div>
        )
      )
    )

    return(
      <div className="container col-md-6">
        <div>
          <div className="panel panel-primary">
            <div className="list-group Platillo-Menu">
              {bebidas_div}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bebida;
