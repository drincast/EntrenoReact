import React, { Fragment, useState } from 'react';

import Error from './Error';

const QuestionBudget = ({saveBudget, saveRemainingBudget, showQuestion}) => {

    //state
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [error, setError] = useState(false);

    function DefineBudget(e) {
        setTotalQuantity(parseInt(e.target.value, 10));
    }

    const sendBudget = (e) => {
        e.preventDefault();

        //validar
        if(totalQuantity <= 0 || isNaN(totalQuantity)){
            setError(true);
            return;
        }

        setError(false);
        saveBudget(totalQuantity);
        saveRemainingBudget(totalQuantity);
        showQuestion(false);
    }

    //submit presupuesto

    return (
        <Fragment>
            <h2>digita tu presupuesto</h2>

            {
                error ?
                    <Error message="El presupuesto es incorrecto"/>
                :
                    null
            }

            <form onSubmit={sendBudget}>
                <input type="number"
                    name="budget"
                    id="budget"
                    className="u-full-width"
                    onChange={DefineBudget}/>
                <input type="submit"
                    className="button-primary u-full-width"
                    value="aceptar presupuesto"/>
            </form>
        </Fragment>
    );
}

export default QuestionBudget;