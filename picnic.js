function picnicBudget(noOfParticipant) {
    // IF the parameter of this function is not number, then this error message shown
    if (typeof noOfParticipant != 'number') {
        return 'Please give a munber';
    }
    // IF the amount number of ana is negavive [less than 0], then this error message shown
    if (noOfParticipant < 0) {
        return 'Please give a positive value';
    }

    const singlePersonCostForFirst100 = 5000;
    const singlePersonCostForSecond100 = 4000;
    const singlePersonCostForRest = 3000;

    var restParticipant;
    let totalBudget;
    let budgetForRestParticipant;

    if (noOfParticipant <= 100) {
        totalBudget = singlePersonCostForFirst100 * noOfParticipant;
    }
    else if (noOfParticipant <= 200) {
        var budgetForFirst100 = singlePersonCostForFirst100 * 100;
        restParticipant = noOfParticipant - 100;
        budgetForRestParticipant = singlePersonCostForSecond100 * restParticipant;
        totalBudget = budgetForFirst100 + budgetForRestParticipant;
    }
    else {
        var budgetForFirst100 = singlePersonCostForFirst100 * 100;
        var budgetForSecond100 = singlePersonCostForSecond100 * 100;
        restParticipant = noOfParticipant - 200;
        budgetForRestParticipant = singlePersonCostForRest * restParticipant;
        totalBudget = budgetForFirst100 + budgetForSecond100 + budgetForRestParticipant;
    }

    return totalBudget;
}

var group1 = picnicBudget(400);
console.log(group1);