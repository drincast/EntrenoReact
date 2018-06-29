import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//connect permite pasar el estado como la capacidad de despachar actions y actionscreator a los componentes
import { connect } from 'react-redux';

class App extends Component {
  render() {
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
        <br /><br />
        <input />
        <br />
        <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
    informacion: state.numero.cantidad
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
    aumentar: () => {
      dispatch({
        type: "AUM"
      });
    },

    disminuir: () => {
      dispatch({
        type: "DIS"
      })
    },

    agregar: () => {
      dispatch({
        type: "AGR"
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
