import React, { Fragment } from 'react';
import { CheckBudget } from "../helpers";
import PropTypes from 'prop-types';

const BudgetControl = ({budget, remainingBudget}) => {

    return (
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: ${budget}
            </div>
            <div className={CheckBudget(budget, remainingBudget)}>
                Restante: ${remainingBudget}
            </div>
        </Fragment>
    );
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired ,
    remainingBudget: PropTypes.number.isRequired
 }

export default BudgetControl;