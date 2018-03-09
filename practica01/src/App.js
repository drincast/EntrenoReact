import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import Cabecera from './componentes/cabecera/';
import reactLogo from './reactLogo.png';
const appConfig = require('./util/appconfig.json');



class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Cabecera titulo="Titulo de Pagina" urlHome="https://en.wikipedia.org/wiki/Separation_of_concerns" urlImg="" />
        </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
