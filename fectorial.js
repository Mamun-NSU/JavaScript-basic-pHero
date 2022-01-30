
// Fectorial function
function getFectorial(number){
    let fectorial = 1;
    for(var i = 1; i<= number; i++){
        fectorial = fectorial * i;
    }
    return fectorial;
}

let firstFectorial = getFectorial(7);
console.log("Fectorial of 7 is : ", firstFectorial);

var secondFectorial = getFectorial(10);
console.log("Fectorial of 10 is : ", secondFectorial);

let thiredFectorial = getFectorial(5);
console.log("Fectorial of 5 is : ", thiredFectorial);

let forthFectorial = getFectorial(12);
console.log("Fectorial of 12 is : ", forthFectorial);
