import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "core-js/stable";

import React from 'react';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header title='Cotizador de seguros'/>
        </div>
    );
}

export default App;
