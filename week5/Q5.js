"use strict";
function determineAge(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
    }
    else if (age >= 13 && age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
// Example usage
console.log(determineAge(15)); // Determine the category for age 15
