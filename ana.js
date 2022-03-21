function anaToVori(ana) {
    // IF the parameter of this function is not number, then this error message shown
    if (typeof ana != 'number') {
        return 'Please give a munber';
    }
    // IF the amount number of ana is negavive [less than 0], then this error message shown
    if (ana < 0) {
        return 'Please give a positive value';
    }
    let vori;
    // 1 vori = 16 ana
    vori = ana / 16;
    return vori;
}

let testAna1 = 32;
console.log(anaToVori(testAna1));
