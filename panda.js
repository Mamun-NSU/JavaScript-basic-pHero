// pandaCost is somethings like food panda
function pandaCost(noOfSingara, noOfSamucha, noOfJilapi) {
    // IF the parameters of this function are not number, then this error message shown
    if ((typeof noOfSingara != 'number') || (typeof noOfSamucha != 'number') || (typeof noOfJilapi != 'number')) {
        return 'Please give munbers';
    }
    // IF the number of Singara OR Sanucha OR Jilabi is negavive [less than 0], then this error message shown
    if ((noOfSingara < 0) || (noOfSamucha < 0) || (noOfJilapi < 0)) {
        return 'Please give positive values';
    }
    const unitPriceOfSingara = 7;
    const unitPriceOfSamucha = 10;
    const unitPriceOfJilapi = 15;

    let totalPriceOfSingara = noOfSingara * unitPriceOfSingara;
    let totalPriceOfSamucha = noOfSamucha * unitPriceOfSamucha;
    let totalPriceOfJilapi = noOfJilapi * unitPriceOfJilapi;

    let totalCost = totalPriceOfSingara + totalPriceOfSamucha + totalPriceOfJilapi;

    return totalCost;
}

let order1 = pandaCost(3, 2, 2);
console.log(order1);