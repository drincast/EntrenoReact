import React, { Fragment } from 'react';

import Header from './components/Header';
import Form from './components/Form';

//uso de context API, context creado
import CategotyProvider from './context/CategoryContext';

function App() {
    return (
        <CategotyProvider>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <Form>
                        
                    </Form>
                </div>
            </div>
        </CategotyProvider>
    );
}

export default App;
