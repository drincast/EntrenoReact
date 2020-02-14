import React, { Fragment } from 'react';

const BudgetControl = () => {
    return (
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto:
            </div>
            <div className='alert'>
                Restante:
            </div>
        </Fragment>
    );
}

export default BudgetControl;