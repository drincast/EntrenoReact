//import React, { Component } from 'react';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/initial/home';
import Login from './components/initial/login';
import Signup from './components/initial/signup';
import AHeader from './auth/aheader';


import './App.css';

const Header = (props) => {
  if(props.propsH.session === null){
    return(
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
    </nav>
    );
  }
  else{
    return(
      <AHeader></AHeader>
    );
  }


  {/*return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Signup</Link>
      {/*<Link to='/login'>Login</Link>*/}
      {/*props.propsH.session === null ? <Link to='/login'>Login</Link> : <a onClick={props.propsH.logoutFunctionDispache}>Logout</a>}
    </nav>
  )*/}
}

const App = (props) => {
  return(
    <Router>
      <div>
        <Header propsH={props}/>
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

const mapStateToProps = (state, ownProps) => {
    //console.log('valor de session', state.session); //OK
    return {
        session: state.session.session,
        own: ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logoutFunctionDispache: () => {
            dispatch({type: "LOGOUT"});
            console.log(ownProps);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
