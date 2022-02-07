//Leap Year calculation

function isLeapYear(year) {
    if (typeof number != "number") {
        return "Please enter a number";
    }
    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
            console.log(year, "is not leapyear");
            return;
        }
        console.log(year, "is leapyear");
    }
    else
        console.log(year, "is not leapyear");
}

isLeapYear(1900);