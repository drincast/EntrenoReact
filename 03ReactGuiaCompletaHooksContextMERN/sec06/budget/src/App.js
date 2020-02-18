import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "core-js/stable";
import React, { useEffect, useState } from 'react';

import QuestionBudget from './components/QuestionBudget';
import Form from './components/Form';
import ListExpense from './components/ListExpense';
import BudgetControl from './components/BudgetControl';

function App() {
    //state
    const [budget, setBudget] = useState(0);
    const [remainingBudget, setRemainingBudget] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);
    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState();

    //useEffect actualiza remainigBudget
    useEffect(() => {
        if(expense !== undefined){

            //add expense to vec expenses
            setExpenses([
                ...expenses,
                expense
            ]);

            //subtract to the current budget
            const currentBudget = remainingBudget - expense.quantity;
            setRemainingBudget(currentBudget);
            setExpense(undefined);
        }        
    }, [expense, expenses, remainingBudget]);

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

    function ShowFormAndList() {
        if(!showQuestion){
            return (
                <div className="row">
                    <div className="one-half column">
                        {/* <Form addNewExpense={addNewExpense} /> */}
                        <Form addNewExpense={setExpense} />
                    </div>

                    <div className="one-half column">
                        <ListExpense expenses={expenses} />

                        <BudgetControl budget={budget}
                            remainingBudget={remainingBudget} />
                    </div>
                </div>
            );
        } 
        else{
            return null
        }
    }

    // const addNewExpense = expense => {        
    //     setExpenses([
    //         ...expenses,
    //         expense
    //     ]);
    // }

    return (
        <div className="container">
            <header>
                <h1>Presupuesto</h1>

                <div className="contenido-principal contenido">
                    {
                        ShowQuestion()
                    }
                    {
                        ShowFormAndList()
                    }

                    
                </div>
            </header>
        </div>
    );
}

export default App;
