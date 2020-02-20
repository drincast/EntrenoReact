export function getDateDifference(year) {
    return new Date().getFullYear() - year;
}

export function getIncrementForBrand(value, brand) {
    let result = 0;

    switch (brand) {
        case 'americano':
            result += (value * 0.15);
            break;

        case 'europeo':
            result += (value * 0.3);
            break;
    
        default:
            result += (value * 0.05);
            break;
    }

    return result;
}

export function getIncrementForPlan(plan) {
    return (plan === 'basico' ? 1.20 : 1.50);
}