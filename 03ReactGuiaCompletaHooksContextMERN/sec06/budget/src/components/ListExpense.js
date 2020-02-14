import React from 'react';
import Expense from "./Expense";

const ListExpense = ({expenses}) => {
    console.log(expenses);

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                expenses.length > 0 ?
                    expenses.map(item => (
                        <Expense key={item.id}
                        expense={item}/>
                    ))
                :
                    null
            }
        </div>
    );
}

export default ListExpense;