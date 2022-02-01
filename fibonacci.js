
function fibonacciSeries(number){
    if(typeof number != 'number'){
        return "Please give a number";
    }
    if(number<2){
        return "Please enter a positive number greter than 1"
    }
    const fibo =[0,1];
    for(var i=2; i<number; i++){

        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

let myFibonacci = fibonacciSeries(11);

console.log(myFibonacci);