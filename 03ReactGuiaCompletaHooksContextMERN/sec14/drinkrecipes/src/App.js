import React, { Fragment } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';

//uso de context API, context creado
import CategotyProvider from './context/CategoryContext';
import RecipeProvider from './context/RecipeContext';
import ModalProvider from './context/ModalContext';

function App() {
    return (
        <CategotyProvider>
            <RecipeProvider>
                <ModalProvider>
                    <Header />
                    <div className="container mt-5">
                        <div className="row">
                            <Form>
                                
                            </Form>
                        </div>

                        <RecipesList />
                    </div>
                </ModalProvider>                
            </RecipeProvider>
        </CategotyProvider>
    );
}

export default App;
