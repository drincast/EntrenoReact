import React, { Fragment } from 'react';

import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Header title={"Tienda Virtual"} />
            <Footer year={year}/>
        </Fragment>
    );
}

export default App;
