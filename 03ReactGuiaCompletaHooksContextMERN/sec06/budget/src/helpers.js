export const CheckBudget = (budget, remainingBudget) => {
    let clv;

    if( ( budget / 4 ) > remainingBudget ) {
        clv = 'alert alert-danger';
    } else if ( (budget / 2) > remainingBudget ) {
        clv = 'alert alert-warning';
    } else {
        clv = 'alert alert-success';
    }

    return clv;
}