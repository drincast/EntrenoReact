import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//connect permite pasar el estado como la capacidad de despachar actions y actionscreator a los componentes
import { connect } from 'react-redux';

class App extends Component {
  agregarTarea(e){
    //console.log(e, e.target, e.key, e.keyCode, e.charCode);
    //en react para este ejemlo no funciona e.keyCode siempre es 0, investigar el porque
    //e.charCode si retorna el valor del la tecla presionada
    if(e.charCode === 13){
      this.props.agregar(e.target.value, this.props.id);
      //console.log(e.target.value);
    }
  }

  render() {
    const elemTareas = this.props.tareas.map(
      (tarea) => {
        return <h2 key={tarea.id}> {tarea.tarea} </h2>
      }
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          {this.props.informacion}
        </p>
        
        <button onClick={this.props.aumentar}>Aumentar</button>
        <button onClick={this.props.disminuir}>Disminuir</button>
       
        {/* <button>Aumentar</button>
        <button>Disminuir</button> */}
        <br /><br />
        
        <input onKeyPress={this.agregarTarea.bind(this)} />
       
        <br />
        <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        { elemTareas }
      </div>
    );
  }
}

//mapStateToProps y mapDispatchToProps, ingresan como propiedades (prop)
//al componente, tanto el state como los dispacher

//internamente hace una subcripcion y un get state, constantemente un
//cambio en el state se ejecuta nuevamente
const mapStateToProps = (state) => {
  //retorno de un objeto javascript
  return {
    //informacion: state.cantidad
    informacion: state.numero.cantidad,
    tareas: state.tareas,
    id: state.id
  }
}

//puede ser definido como un objeto javascript o una función
//(la función tiene la ventaja de poder hacer llamados asincronos)
//mapDispatchToProp asume que sus funciones son ACTION CREATOR y al ser
//llamadas desde el componente las engloba en un DISPATCH
// const mapDispatchToProps = {
//   aumentar: () => {
//     return {
//       type: "AUM"
//     }
//   },

//   disminuir: () => {
//     return {
//       type: "DIS"
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return{
    aumentar: () => { dispatch(
      (dispatch) => {
        setTimeout(()=>{
          return dispatch({type: "AUM"})
        }, 3000);
        
      });
      
      // dispatch(
      //   {
      //     type: "AUM"
      //   });
    },

    disminuir: () => {
      setTimeout(()=>{
        dispatch({
          type: "DIS"
        });
      }, 5000);
      
    },

    // disminuir: () => {
    //   dispatch({
    //     type: "DIS"
    //   })
    // },

    agregar: (tarea, id) => {
      dispatch({
        type: "AGR",
        tarea,
        id
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default (App);
