import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Lienzo from './componentes/lienzo/lienzo';

ReactDOM.render(<Lienzo />, document.getElementById('root'));
registerServiceWorker();
