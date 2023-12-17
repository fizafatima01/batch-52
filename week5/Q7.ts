
function LeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const givenYear = 2024;
if (LeapYear(givenYear)) {
    console.log(`${givenYear} is a leap year.`);
} else {
    console.log(`${givenYear} is not a leap year.`);
}
