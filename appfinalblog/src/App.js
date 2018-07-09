//import React, { Component } from 'react';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './components/initial/home';
import Login from './components/initial/login';
import Signup from './components/initial/signup';

import logo from './logo.svg';
import './App.css';

const Header = () => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

const App = () => {
  return(
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <h2>Dentro de App</h2>
      </div>
    </Router>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
