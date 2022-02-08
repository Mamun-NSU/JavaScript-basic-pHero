
function feetToInch(feet) {
    if (typeof feet != "number") {
        return "Please enter a number";
    }
    var inch = feet * 12;
    return inch;
}
var feet1 = 10;
console.log(feetToInch(feet1));