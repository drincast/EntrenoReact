import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "core-js/stable";
import React, { useState } from 'react';

import QuestionBudget from './components/QuestionBudget';
import Form from './components/Form';

function App() {
    //state
    const [budget, setBudget] = useState(0);
    const [remainingBudget, setRemainingBudget] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);

    function ShowQuestion() {
        if(showQuestion){
            return (
                <QuestionBudget saveBudget={setBudget}
                    saveRemainingBudget={setRemainingBudget}
                    showQuestion={setShowQuestion} />
            );
        } 
        else{
            return null
        }
    }

    return (
        <div className="container">
            <header>
                <h1>Presupuesto</h1>

                <div className="contenido-principal contenido">
                    {
                        ShowQuestion()
                    }
                    

                    <div className="row">
                        <div className="one-half column">
                            <Form />
                        </div>

                        <div className="one-half column">
                            2
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
